# Mentor guide: 80/20 সিদ্ধান্ত

## একটিই প্রকল্প: KhetShift

আগামীকালের সময়সীমার জন্য আমার নির্বাচিত সমাধান KhetShift। NASA-এর historical weather, স্থানীয় জমির ইনপুট এবং editable crop assumptions দিয়ে ধানের পরের crop option তুলনা। এটি **আমার feasibility judgement**, বিশ্বের সবার চেয়ে নতুন বা জিতবেই এমন প্রমাণিত দাবি নয়।

প্রধান অনুপ্রেরণা: 2024-এর GaamaRamma/Waterwise-এর কৃষকের water decision-কে কেন্দ্র করার ধারণা। 2plant থেকে planting-risk discussion-এর গুরুত্ব নিয়েছি। Winner-এর code, model, design বা ভিডিও কপি করিনি। আমাদের নতুন অংশ বাংলা counterfactual workflow, assumptions পরিবর্তন, year-by-year variation ও auditable export।

## পাঁচ বছরের winner review থেকে প্রাসঙ্গিক শিক্ষা

Official winner announcements/organiser descriptions reviewed, 2021–2025। নিচের “শিক্ষা” আমার বিশ্লেষণ; judges-এর গোপন deliberation বা সব winner-এর live app/video end-to-end পরীক্ষা নয়। আর্কাইভ project pages-এর কিছু অংশ অপ্রাপ্য ছিল। Official বর্ণনার technology claims independently benchmark করা হয়নি।

| বছর | Verified benchmark | প্রযুক্তি/idea এবং আমাদের শিক্ষা |
|---|---|---|
| 2021 | Change Maker, SHINE, Best Use of Technology | NASA weatherকে solar purchasing discussion-এর সহজ interface-এ এনেছে। নির্দিষ্ট user decisionকে কেন্দ্র করুন। একই বছরে বাংলাদেশের Mohakash mission concept award পেয়েছে; credible conceptও গুরুত্বপূর্ণ। |
| 2022 | Starflock/AirAware, Best Use of Data; Team Diamonds, Most Inspirational | Starflock wildfire-smoke chemistry-এর data question নিয়েছে। বাংলাদেশের Diamonds শিশুদের star variability শেখানোর interactive game করেছে। Data question ছোট ও শেখার flow স্পষ্ট রাখুন। |
| 2023 | Storm Prophet, Best Use of Data; Team Voyagers, Best Storytelling | Storm Prophet LSTM দিয়ে geomagnetic model তৈরি করেছে। বাংলাদেশের Voyagers water cycle নিয়ে web game করেছে। ML claim-এর জন্য model evidence লাগে, আর story-তে user interaction জরুরি। |
| 2024 | Waterwise, Best Use of Data; 2plant, Galactic Impact | কৃষিতে পানির সুযোগ, soil moisture ও evapotranspiration থেকে planting-risk discussion। Farmer action-এর সঙ্গে data যুক্ত থাকলে relevance স্পষ্ট হয়। |
| 2025 | Twisters/SkySense, Best Use of Technology; QUEÑARIS, Local Impact | SkySense personalised weather activity windows নিয়ে কাজ করেছে। QUEÑARIS স্থানীয় water-scarcity/reforestation problem-এ satellite/drone/AI মিলিয়েছে। Bangladesh-specific constraint ও usable output দেখান। |

এগুলো inspiration benchmark, তাদের ফলাফল পুনরুৎপাদন করার দাবি নয়। বিশেষ করে SkySense-এর ultra-local forecast বা QUEÑARIS-এর ecological validation আমরা অর্জন করেছি বলছি না।

## পুরোনো TerraPulse বনাম নতুন prototype

আগের repository-তে চারটি ফাইল ও NASA Eyes iframe navigation ছিল। নিজস্ব data ingestion, backend, trained AI বা agricultural calculation ছিল না। README যথাযথভাবে wrapper হিসেবে স্বীকার করেছে। ভিডিও 4:14; নির্বাচিত visual frames দেখা হয়েছে, পুরো narration/audio যাচাই হয়নি। Cloud browser-এ NASA globe-এর WebGL context ব্যর্থ হয়েছিল, যা সব laptop-এ ব্যর্থ হবে এমন প্রমাণ নয়।

আগের UI-র পরিচ্ছন্ন presentation কাজে লাগতে পারে, কিন্তু global-winning data contribution হিসেবে iframe দেখানো যথেষ্ট নয়। KhetShift-এ independent algorithm, real data archive, sensitivity controls ও reproducible result যোগ হয়েছে। অযাচাইকৃত 3D/AI feature যোগ না করে এটাই বেশি কাজে লাগে।

## জেতার সম্ভাবনা সম্পর্কে সৎ বিচার

**বর্তমান নতুন prototype পুরোনো wrapper-এর চেয়ে শক্তিশালী submission candidate। Global winner-ready বলা যাচ্ছে না।** কোনো winning probability দেওয়া সম্ভব নয়। Local judges, অন্য submissions, challenge fit ও নিয়ম না জেনে percentage বানানো হবে।

| বিচার করার lens | এখনকার শক্তি | সবচেয়ে গুরুত্বপূর্ণ ঘাটতি |
|---|---|---|
| Impact | নির্দিষ্ট বাংলাদেশের sample locations, farmer/extension-worker workflow | Farmer interview বা measured outcome নেই |
| Creativity | Bengali counterfactual, editable assumptions, provenance export | Agriculture decision tools আগে আছে; global novelty সীমিত |
| Validity | Real POWER records, transparent math, missing handling ও tests | Daily water balance, local crop calibration ও field validation নেই |
| Relevance | Field Shift-এর NASA data, crop properties, local input, priorities-এর সঙ্গে concept fit | Local accepted challenge ও final resource/rule fit নিশ্চিত করা বাকি; soil-health simulation নেই |
| Presentation | Clear comparison, rain calendar, short actual-demo plan | Final live screen recording, team identity ও incognito link verification বাকি |

এই lens official current event guidance-এ পাওয়া পাঁচটি criteria-র সঙ্গে মেলে। Bangladesh numeric scoring weights যাচাই করা হয়নি; এই table কোনো official score নয়। Global awards-এর দশ category আর judging criteria এক জিনিস নয়।

## যে ২০% কাজ এখন সবচেয়ে ফল দেবে

1. **Rule ও access:** correct local form, exact cutoff, pre-built/AI rules, video limit, public links। Broken/private link সবচেয়ে ভালো idea-ও ঢেকে দেয়।
2. **একটি clean actual demo:** input বদল, হিসাব বদল, source খোলা, export। ৯০–১২০ সেকেন্ডে judges যেন নিজেরা contribution ধরতে পারেন।
3. **একটি বাস্তব review:** কৃষি কর্মকর্তা বা অভিজ্ঞ কৃষক থাকলে এই assumptionগুলো দেখান। ২–৩টি প্রকৃত comment লিখুন; না থাকলে “validation pending” বলুন।
4. **নিজের দলের বোঝা:** প্রত্যেকে formula, data resolution ও limits ব্যাখ্যা করতে পারবে। Code মুখস্থ করার দরকার নেই।

আজ নতুন LLM chatbot, deep learning, 3D globe, login, database, forecast alert বা দশটি extra feature যোগ করবেন না। ছোট finished comparison এই সময়সীমায় বেশি বিশ্বাসযোগ্য।

## Judge Q&A

**NASA data কোথায়?** POWER daily original JSON এবং query manifest-এ। MERRA-2 meteorology, coarse grid; field sensor বা fine-resolution satellite image নয়।

**এটা কি AI?** এখন নয়। Transparent deterministic scenario arithmetic। Forecasting model দাবি করা হয়নি।

**Bean কেন আগে?** এই scenario-তে editable demand ও duration কম, আর balanced preference legume-কে গুরুত্ব দেয়। এটি cultivar suitability বা guaranteed best crop নয়।

**কম gap মানে কম actual irrigation?** না। Formula season-এর water-budget proxy। Timing, soil balance ও rice losses বাদ আছে।

**মাটির data কীভাবে আসে?** ব্যবহারকারীর local input। Texture/slow drainage caution দেখায়; initial water input numeric budget-এ ব্যবহৃত হয়। NASA soil map ব্যবহার করা হয়নি।

**কত পানি বাঁচায়?** এখনো মাপা হয়নি। Field trial ছাড়া number বা percent দেব না।

**আগের winners-এর চেয়ে কেন আলাদা?** Bengali auditable local scenario workflow-এর execution আমাদের নিজস্ব। Unique global invention বলে দাবি করি না।

## Primary source register

2021: https://legacy.spaceappschallenge.org/blog/meet-the-2021-global-winners/

2022: https://legacy.spaceappschallenge.org/blog/2022-global-winners/

2023: https://science.nasa.gov/directorates/smd/2023-nasa-international-space-apps-challenge-announces-10-global-winners/

2024: https://www.nasa.gov/learning-resources/stem-engagement-at-nasa/nasa-international-space-apps-challenge-announces-2024-global-winners/

2025: https://www.nasa.gov/learning-resources/stem-engagement-at-nasa/nasa-announces-2025-international-space-apps-challenge-global-winners/

Local website: https://www.nasaspaceappsbd.com/

Documents page: https://www.nasaspaceappsbd.com/important-documents (indexed entry still refers to 2025)

Global 2026: https://www.spaceappschallenge.org/2026/

Current event guidance, five criteria: https://www.spaceappschallenge.org/2026/local-events/ajmer/ (another local event, not Bangladesh-specific rulebook)

Challenge: https://www.spaceappschallenge.org/2026/challenges/field-shift-adapting-farms-with-nasa-data/

NASA data documentation: https://power.larc.nasa.gov/docs/services/api/temporal/daily/ and https://power.larc.nasa.gov/docs/methodology/data/sources/

FAO crop-water ranges: https://www.fao.org/4/s2022e/s2022e07.htm

Review date: 8 October 2026. Checked sources available on that date. Local team confirmed tomorrow's deadline is the Bangladesh local round; exact form and cutoff were not supplied.
