import assert from 'node:assert/strict';
import fs from 'node:fs';
import {CROPS,YEARS,compare,season,monthly,median} from '../dist/model.mjs';
const o={month:11,day:15,irrigation:200,soilWater:0,rainFraction:.7,priority:'balanced'};
const manifest=JSON.parse(fs.readFileSync(new URL('../dist/data/manifest.json',import.meta.url)));
const samples=[];
for(const p of manifest.points){
 const raw=JSON.parse(fs.readFileSync(new URL('../dist/'+p.file,import.meta.url)));
 assert.equal(Object.keys(raw.properties.parameter.PRECTOTCORR).length,2192);
 const result=compare(raw,CROPS,o);assert.equal(result.length,3);assert(result.every(c=>c.validSeasons===5));
 const wet=compare(raw,CROPS,{...o,irrigation:400});for(const c of result){const w=wet.find(x=>x.id===c.id);assert(w.gap<=c.gap);}
 const moreRain=compare(raw,CROPS,{...o,rainFraction:.9});for(const c of result)assert(moreRain.find(x=>x.id===c.id).gap<=c.gap);
 for(let month=1;month<=12;month++)assert(compare(raw,CROPS,{...o,month}).every(c=>c.validSeasons===5));
 const s=season(raw,CROPS[0],o,2020),start=new Date('2020-11-15T00:00:00Z');let sum=0;
 // A separate direct traversal verifies rain aggregation and November-to-March boundary.
 for(let d=0;d<120;d++){const dt=new Date(start.getTime()+d*86400000),key=dt.toISOString().slice(0,10).replaceAll('-','');sum+=raw.properties.parameter.PRECTOTCORR[key];}
 assert(Math.abs(sum-s.rain)<1e-9);assert.equal(s.end,'2021-03-14');assert(Math.abs(s.gap-Math.max(0,575-sum*.7-200))<1e-9);
 const missing=structuredClone(raw);missing.properties.parameter.PRECTOTCORR['20201115']=-999;const ms=season(missing,CROPS[0],o,2020);assert.equal(ms.complete,false);assert.equal(ms.gap,null);assert.equal(compare(missing,CROPS,o).find(c=>c.id==='rice').validSeasons,4);
 const zero=structuredClone(raw);zero.properties.parameter.PRECTOTCORR['20201115']=0;assert.equal(season(zero,CROPS[0],o,2020).complete,true);
 assert.equal(monthly(raw).length,5);assert(monthly(raw).every(row=>row.months.length===12&&row.months.every(m=>m.rain!==null)));
 assert.throws(()=>compare(raw,CROPS,{...o,month:13}));assert.throws(()=>compare(raw,CROPS,{...o,day:29}));assert.throws(()=>compare(raw,CROPS,{...o,irrigation:-1}));assert.throws(()=>compare(raw,CROPS,{...o,rainFraction:1.1}));
 samples.push({point:p.name,options:o,results:result});
}
assert.equal(median([3,1,2]),2);assert.equal(median([]),null);
fs.writeFileSync(new URL('../docs/verified-demo-results.json',import.meta.url),JSON.stringify(samples,null,2));
console.log('PASS: real data completeness, cross-year windows, water sensitivity, missing-data exclusion, monthly aggregation, invalid inputs; all four locations and twelve start months.');
console.log(JSON.stringify(samples[0].results.map(c=>({crop:c.en,gap:c.gap,min:c.minGap,max:c.maxGap,rain:c.medianRain})),null,2));
