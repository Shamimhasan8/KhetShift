# KhetShift: submission text

## স্থানীয় form-এর জন্য বাংলা সংক্ষিপ্ত পরিচিতি

**Project name:** KhetShift — খেতের পরের সিদ্ধান্ত

**One line:** NASA-এর বাস্তব আবহাওয়ার ইতিহাস ও কৃষকের স্থানীয় তথ্য দিয়ে ধানের পরের ফসলের বিকল্প তুলনার একটি স্বচ্ছ বাংলা prototype।

**সমস্যা:** ফসল আবর্তনের আলোচনা করতে বৃষ্টির ইতিহাস, সেচের সুযোগ, মাটির তথ্য ও ফসলের চাহিদা একসঙ্গে বোঝা প্রয়োজন। জটিল ডেটা স্থানীয় কৃষক ও সম্প্রসারণকর্মীর কাছে ব্যবহারযোগ্য তুলনায় পৌঁছানো কঠিন।

**সমাধান:** KhetShift-এ চারটি বাংলাদেশি নমুনা স্থান, রোপণের সময়, স্থানীয় মাটির তথ্য, সেচের পরিকল্পনা ও অগ্রাধিকার দিয়ে ধান, ভুট্টা এবং একটি illustrative bean alternative তুলনা করা যায়। NASA POWER-এর মূল daily precipitation ও maximum-temperature data থেকে পাঁচ রোপণবর্ষে পৃথক seasonal water-budget proxy, dry spell ও গরম দিনের হিসাব দেখাই। ব্যবহারকারী অনুমান বদলে ফল কীভাবে বদলায় দেখতে পারেন এবং মূল উৎসসহ comparison download করতে পারেন।

**নিজস্ব অবদান:** বাংলায় auditable comparison, NASA archive ও স্থানীয় ইনপুটের সমন্বয়, year-by-year counterfactual, পরিবর্তনযোগ্য অনুমান, missing data-এর স্পষ্ট handling এবং export-এ data provenance। অন্য প্রকল্পের code বা branding অনুলিপি করা হয়নি।

**প্রভাবের সম্ভাবনা:** কৃষি কর্মকর্তার সঙ্গে বিকল্প আলোচনা ও water trade-off বোঝার সময় কমাতে পারে। এই সুবিধা এখনো user study বা field trial দিয়ে যাচাই করা হয়নি। ফলন, আয় বা পানি সাশ্রয়ের কোনো শতাংশ দাবি নেই।

**NASA data:** NASA POWER Daily API, MERRA-2 meteorology; `PRECTOTCORR` ও `T2M_MAX`; 2020–2025; চারটি sample point। এটি field-level measurement নয়।

**সীমা:** Historical scenario, forecasting নয়। Crop duration ও usable-rain fraction assumptions। FAO crop-water indicative range বাংলাদেশি cultivar calibration নয়। Soil texture ও drainage সতর্কতা হিসেবে ব্যবহৃত, soil health simulate হয় না। ET, water timing, seepage, salinity, pH ও markets অন্তর্ভুক্ত নয়।

**পরবর্তী ধাপ:** স্থানীয় agronomist-এর crop/soil calibration; rain ও soil-moisture-এর finer-resolution NASA products; daily soil-water balance; বাস্তব কৃষকের usability test; calibrated comparisons-এর মূল্যায়ন।

## Global project-page fields-এর English draft

Title: KhetShift: Transparent Crop Rotation Exploration for Bangladesh

Challenge: Field Shift: Adapting Farms with NASA Data

Short summary: KhetShift turns real NASA POWER weather histories into an auditable, Bengali-first comparison of the crop after rice. Farmers and extension workers can vary water budgets, crop assumptions and priorities, inspect five historical sowing years, and export every result with its sources and limitations.

Project details: Our working prototype combines six years of daily NASA POWER precipitation and maximum temperature archives at four Bangladesh sample points with user-provided soil information, editable crop characteristics and farmer priorities. It compares paddy rice, maize and an illustrative bean alternative. For each of five sowing years, it computes a seasonal water-budget proxy and reports the median and range, dry spells and exploratory hot-day counts. Users can shift a planting month, vary planned irrigation or usable rainfall, inspect original NASA data and download a reproducible JSON comparison. The ranking is a transparent preference heuristic, not a validated soil-health or yield score. The prototype makes uncertainty and unmeasured local constraints visible. We do not claim field validation, water savings, cultivar suitability or NASA endorsement. Local agronomic calibration and a daily soil-water model are the next steps.

Data: NASA POWER daily parameters PRECTOTCORR and T2M_MAX. Each original response, query and collection timestamp is included. FAO indicative crop-water ranges supply initial assumptions.

Tools: HTML, CSS, JavaScript ES modules, Python data retrieval, Node verification, NASA POWER API. No paid API, backend database or trained ML model is required.

AI disclosure: Codex assisted with research, implementation and documentation. No AI-generated weather observations or synthetic validation results are used. Team members must review the code and disclose assistance and development timing according to the applicable rules.

## Team-এর পূরণযোগ্য field

- Registered team name, members, roles ও local event: team নিজে নিশ্চিত করবে।
- Accepted challenge name: local organiser-এর form-এ মিলিয়ে নিন।
- Public website, GitHub ও video links: login ছাড়া পরীক্ষার পরে দিন।
- Exact deadline/timezone, video limit এবং document format: local নির্দেশনা অনুযায়ী দিন।
- Development history: earlier TerraPulse wrapper এবং এই নতুন prototype-এর contributions/timing আলাদা করে সত্যভাবে লিখুন।

এই fields এখনো verified না হওয়ায় কোনো পরিচয় বা deadline বানিয়ে লেখা হয়নি।
