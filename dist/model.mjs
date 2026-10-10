// Transparent scenario arithmetic. Crop ranges are indicative FAO values,
// not Bangladesh cultivar calibration. No machine-learning or forecast claims.
export const CROPS=[
 {id:'rice',en:'Paddy rice',bn:'ধান',family:'cereal',days:120,need:575,low:450,high:700},
 {id:'maize',en:'Grain maize',bn:'ভুট্টা',family:'cereal',days:125,need:650,low:500,high:800},
 {id:'bean',en:'Bean (illustrative legume)',bn:'বিন / শিমজাতীয়',family:'legume',days:90,need:400,low:300,high:500}
];
export const YEARS=[2020,2021,2022,2023,2024];
export function median(a){if(!a.length)return null; const s=[...a].sort((x,y)=>x-y);return (s[Math.floor((s.length-1)/2)]+s[Math.ceil((s.length-1)/2)])/2;}
export function validValue(v,fill=-999){return typeof v==='number'&&Number.isFinite(v)&&v!==fill;}
export function dateKey(d){return d.toISOString().slice(0,10).replaceAll('-','');}
export function validateOptions(o){
 if(!Number.isInteger(o.month)||o.month<1||o.month>12)throw Error('Month must be 1–12');
 if(!Number.isInteger(o.day)||o.day<1||o.day>28)throw Error('Day must be 1–28 for comparable years');
 if(!(o.rainFraction>=0&&o.rainFraction<=1))throw Error('Rain fraction must be 0–1');
 if(!(o.irrigation>=0&&o.irrigation<=1000)||!(o.soilWater>=0&&o.soilWater<=200))throw Error('Water inputs out of range');
 if(!['water','diversity','balanced'].includes(o.priority))throw Error('Unknown priority');
}
export function season(raw,crop,o,year){
 validateOptions(o);
 if(!Number.isInteger(crop.days)||!(crop.days>=30&&crop.days<=240)||!(crop.need>=100&&crop.need<=1500))throw Error('Crop assumptions out of range');
 const p=raw.properties.parameter,fill=raw.header.fill_value,start=new Date(Date.UTC(year,o.month-1,o.day));
 let rain=0,observed=0,run=0,drySpell=0,hotDays=0,tempCount=0;
 for(let i=0;i<crop.days;i++){
  const d=new Date(start);d.setUTCDate(d.getUTCDate()+i);const k=dateKey(d),r=p.PRECTOTCORR[k],t=p.T2M_MAX[k];
  if(validValue(r,fill)&&r>=0){rain+=r;observed++;run=r<1?run+1:0;drySpell=Math.max(run,drySpell);}else run=0;
  if(validValue(t,fill)){tempCount++;if(t>=35)hotDays++;}
 }
 const complete=observed===crop.days;
 const gap=complete?Math.max(0,crop.need-rain*o.rainFraction-o.irrigation-o.soilWater):null;
 const end=new Date(start);end.setUTCDate(end.getUTCDate()+crop.days-1);
 return {year,start:start.toISOString().slice(0,10),end:end.toISOString().slice(0,10),rain:complete?rain:null,gap,drySpell:complete?drySpell:null,hotDays:tempCount===crop.days?hotDays:null,observed,expected:crop.days,complete};
}
export function compare(raw,crops,o){
 validateOptions(o);
 const result=crops.map(c=>{
  const seasons=YEARS.map(y=>season(raw,c,o,y)),complete=seasons.filter(s=>s.complete),gaps=complete.map(s=>s.gap),diversity=c.family==='legume'?1:0;
  const gap=median(gaps),waterFit=gap===null?null:Math.max(0,1-gap/c.need);
  // Preference score is explicitly a UI heuristic, not a soil-health or yield estimate.
  const weights=o.priority==='water'?[1,0]:o.priority==='diversity'?[0,1]:[.75,.25];
  const score=waterFit===null?null:waterFit*weights[0]+diversity*weights[1];
  return {...c,seasons,gap,waterFit,score,minGap:gaps.length?Math.min(...gaps):null,maxGap:gaps.length?Math.max(...gaps):null,medianRain:median(complete.map(s=>s.rain)),drySpell:median(complete.map(s=>s.drySpell)),validSeasons:complete.length};
 });
 return result.sort((a,b)=>(b.score??-1)-(a.score??-1)||(a.gap??Infinity)-(b.gap??Infinity));
}
export function monthly(raw){const p=raw.properties.parameter,fill=raw.header.fill_value;return YEARS.map(year=>({year,months:Array.from({length:12},(_,j)=>{let rain=0,n=0,temp=0,tn=0;const days=new Date(Date.UTC(year,j+1,0)).getUTCDate();for(let d=1;d<=days;d++){const k=String(year)+String(j+1).padStart(2,'0')+String(d).padStart(2,'0');const r=p.PRECTOTCORR[k],t=p.T2M_MAX[k];if(validValue(r,fill)&&r>=0){rain+=r;n++;}if(validValue(t,fill)){temp+=t;tn++;}}return {rain:n===days?rain:null,temp:tn===days?temp/tn:null,observed:n,expected:days};})}));}
