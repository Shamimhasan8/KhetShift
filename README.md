# KhetShift — খেতের পরের সিদ্ধান্ত

বাংলাদেশের জন্য NASA POWER ডেটা দিয়ে ফসল আবর্তনের একটি স্বচ্ছ historical comparison prototype। **চাষের নির্দেশনা, irrigation prescription বা yield forecast নয়।**

## দ্রুত চালু করুন

Python 3 থাকলে project folder থেকে:

```sh
python3 -m http.server 8000 --directory dist
```

নিজের browser-এ `http://localhost:8000` খুলুন। `file://` দিয়ে HTML খোলার বদলে HTTP ব্যবহার করুন, কারণ JSON ডেটা fetch হয়। Internet API বা কোনো API key লাগে না; মূল NASA ডেটা সঙ্গে আছে।

GitHub Pages-এর জন্য `dist/`-এর সব ফাইল (data ও fonts-সহ) publishing directory-তে দিন। Vercel-এ framework Other, build command ফাঁকা, output directory `dist`।

## যাচাই

Node 18+ দিয়ে `node scripts/check.mjs`। NASA ডেটা নতুন করে আনতে `python3 scripts/fetch_power.py`। Fetch ব্যর্থ হলে script থামে, synthetic fallback বানায় না।

## কী আছে

- চারটি নমুনা বিন্দু: বগুড়া, রাজশাহী, খুলনা, সিলেট। জেলা বা মাঠের গড় নয়।
- NASA POWER `PRECTOTCORR`, `T2M_MAX`: 2020-01-01 থেকে 2025-12-31, LST। প্রতি বিন্দুতে 2,192 দিন।
- পাঁচ রোপণবর্ষ 2020–2024। ডিসেম্বরের পরে মৌসুম পরের বছরে যেতে পারে।
- তিনটি editable উদাহরণ: paddy rice, grain maize, illustrative bean।
- মাস, দিন, পরিকল্পিত সেচ, শুরুর মাটির পানি, rain fraction ও preference বদলে ফল দেখুন।
- মাসের বৃষ্টির calendar, বছরভিত্তিক তুলনা, sourceসহ JSON export।
- বাংলা মূল interface এবং English overview। সম্পূর্ণ English UI নয়।

## হিসাব ও সীমা

`gap = max(0, assumed crop need - historical rain × assumed usable fraction - planned irrigation - initial soil water)`

প্রতি বছরে আলাদা gap, এরপর পাঁচটির median ও min–max। 70% usable rainfall এই prototype-এর অনুমান। FAO indicative range-এর midpoint initial water need; duration editable prototype assumption। Soil texture আর drainage warning/record হিসেবে থাকে, texture থেকে পানি বানানো হয় না। Balanced preference-এ 75% water fit ও 25% cereal-to-legume preference; কোনো scientific soil-health score নয়।

মডেলে দৈনিক soil balance, runoff timing, ET, seepage/ponding, cultivar suitability, pH, salinity, market বা yield নেই। Bean case বাংলাদেশি জাত হিসেবে calibrated নয়। ≥35°C দিন এবং <1 mm dry-day exploratory thresholds।

## উৎস ও অধিকার

NASA POWER API response অপরিবর্তিতভাবে `dist/data/`-এ সংরক্ষিত। Source URL, query ও collection timestamp `manifest.json`-এ। Code-এর MIT license NASA data বা fonts-এর অধিকার বদলায় না। Font: Noto Sans Bengali, SIL OFL 1.1, license `dist/fonts/OFL.txt`। NASA অনুমোদনের দাবি নেই।

Official challenge: https://www.spaceappschallenge.org/2026/challenges/field-shift-adapting-farms-with-nasa-data/

POWER: https://power.larc.nasa.gov/docs/services/api/temporal/daily/

FAO ranges: https://www.fao.org/4/s2022e/s2022e07.htm

## Submission

`docs/SUBMISSION_BN.md`, `docs/VIDEO_BN.md`, `docs/MENTOR_BN.md`, `docs/READINESS_BN.md` পড়ুন। Team identity ও verified local submission details যোগ করার দায়িত্ব team-এর। এগুলো অনুমান করে পূরণ করা হয়নি।

AI assistance: এই নতুন prototype, code ও drafts Codex-এর সহায়তায় তৈরি। Trained ML model নেই। Local organiser-এর AI/pre-built-work নিয়ম অনুযায়ী contribution ও timing প্রকাশ করুন।
