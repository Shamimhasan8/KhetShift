"""Fetch original POWER responses. No synthetic observations or silent fallbacks."""
import json, urllib.request, pathlib, datetime, concurrent.futures
ROOT=pathlib.Path(__file__).resolve().parents[1]
POINTS=[('bogura','Bogura','বগুড়া',24.85,89.37),('rajshahi','Rajshahi','রাজশাহী',24.37,88.60),('khulna','Khulna','খুলনা',22.85,89.54),('sylhet','Sylhet','সিলেট',24.90,91.87)]
def fetch(point):
    key,name,bn,lat,lon=point
    url=f'https://power.larc.nasa.gov/api/temporal/daily/point?parameters=T2M_MAX,PRECTOTCORR&community=AG&longitude={lon}&latitude={lat}&start=20200101&end=20251231&format=JSON&time-standard=LST'
    with urllib.request.urlopen(url,timeout=100) as r:
        raw=r.read()
    payload=json.loads(raw)
    if payload.get('header',{}).get('fill_value') is None or not payload.get('properties',{}).get('parameter'):
        raise ValueError('Invalid POWER response')
    (ROOT/'dist/data'/f'{key}.json').write_bytes(raw)
    return {'id':key,'name':name,'bn':bn,'lat':lat,'lon':lon,'sourceUrl':url,'retrievedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'file':f'data/{key}.json','header':payload['header'],'geometry':payload['geometry'],'days':len(payload['properties']['parameter']['PRECTOTCORR'])}
if __name__=='__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
        points=list(ex.map(fetch,POINTS))
    (ROOT/'dist/data/manifest.json').write_text(json.dumps({'dataset':'NASA POWER daily, MERRA-2 meteorology','sowingYears':[2020,2021,2022,2023,2024],'points':points},ensure_ascii=False,indent=2))
    print(json.dumps([{'id':p['id'],'days':p['days'],'retrievedAt':p['retrievedAt']} for p in points],indent=2))
