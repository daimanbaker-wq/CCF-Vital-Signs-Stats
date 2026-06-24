# Quarterly Exception Report — 19 June 2026

**Period:** June 2026
**Total rows processed:** 304
**Run duration:** 1119s

## Summary

| Status | Count |
| :--- | ---: |
| CONFIRMED | 44 |
| EXTERNAL | 1 |
| NOT_FOUND | 44 |
| PARTIAL | 75 |
| UNREACHABLE | 140 |

## Exceptions Requiring Attention

### Cornwall has a coastline of over 400 miles (724 kilometres), 158 miles designated as Heritage Coast,

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/environment/environmental-protection/coastal-protection/
- **Evidence:** Keyword match: 5/10 words (50%)

### The population is spread over 1,376 sq. miles in total, equivalent to 414 people per sq. mile, compa

- **Verdict:** DATA_DRIFT
- **URL:** https://totalpopulation.co.uk/authority/cornwall
- **Evidence:** Keyword match: 6/12 words (50%)

### Between the last two censuses (held in 2011 and 2021), the average (median) age of Cornwall increase

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/explore-local-statistics/areas/E06000052-cornwall/indicators#population
- **Evidence:** Numbers matched: ['201', '2021', '1', '2011', '202']. Keyword overlap: 78%

### The gender split in Cornwall is 51.5% female, 48.5% male (ONS, Cornwall Council).

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/visualisations/censusareachanges/E06000052/
- **Evidence:** Only 1/5 keywords matched

### Within Cornwall 42,778 of residents (7.5%) identified their Ethnic Group as solely 'Cornish' which i

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/ethnicity/articles/cornishidentityenglandandwales/census2021
- **Evidence:** Keyword match: 8/10 words (80%)

### 46% of Cornwall's residents live outside of towns, in settlements of fewer than 3,000 people (Cornwa

- **Verdict:** LINK_BROKEN
- **URL:** https://ehq-production-europe.s3.eu-west-1.amazonaws.com/b9a73d7163e5de6fda318bd76974e57b4952cef0/original/1646843503/49a7ffcba609f666078c0f9373171258_The_Cornwall_We_Know.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4KKNQAKIPIPQP5NM%2F20260303%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20260303T212033Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=737e353f0d38787ab1c01bed88873d7b18419429fa962fdd1012b941309a5aac
- **Evidence:** HTTP_ERROR:403

### As of mid-2023, Cornwall and the Isles of Scilly had a population of 578,324, with a workforce marke

- **Verdict:** DATA_DRIFT
- **URL:** https://online.flippingbook.com/view/174546986/5/
- **Evidence:** Only 0/14 keywords matched

### In 2024, the average salary in Cornwall was £37,542- significantly below the UK average.

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallcommunityfoundation.com/our-impact-strategy/cornwall-local-economy-employment/
- **Evidence:** Numbers matched: ['4', '202']. Keyword overlap: 80%

### Over 20% of workers earned below the real Living Wage, with South East Cornwall being most affected.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/datasets/numberandproportionofemployeejobswithhourlypaybelowthelivingwage
- **Evidence:** Only 3/13 keywords matched

### Universal Credit claimants increased by 35% between 2022-2024.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.nomisweb.co.uk/reports/lmp/lad/1778384945/subreports/cc_time_series/report.aspx
- **Evidence:** Only 1/5 keywords matched

### In 2024 the average salary in Cornwall was £37,542. The UK average salary was £45,836 (Cornwall Coun

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallcommunityfoundation.com/our-impact-strategy/cornwall-local-economy-employment/
- **Evidence:** Keyword match: 5/5 words (100%)

### In Cornwall 34.5% of part-time jobs paid below the real living wage, vs 12.8% of full-time jobs (ONS

- **Verdict:** LINK_BROKEN
- **URL:** https://cornwallvsf.org/app/uploads/2025/09/LWP-ACTION-PLAN-.pdf
- **Evidence:** Page returned no readable text

### Part-time work accounts for over 37.6% of jobs in Cornwall (Nomis Labour Market Profile Cornwall 202

- **Verdict:** DATA_DRIFT
- **URL:** https://www.nomisweb.co.uk/query/select/getdatasetbytheme.asp
- **Evidence:** Only 3/7 keywords matched

### Self-employment accounted for 14.7% of all employed people in Cornwall in Sept 2024. This was higher

- **Verdict:** DATA_DRIFT
- **URL:** https://www.nomisweb.co.uk/reports/lmp/lad/1778384945/report.aspx#tabempunemp
- **Evidence:** Numbers matched: ['4', '2024', '5', '2025', '202']. Keyword overlap: 77%

### With the average self-employment income at £22,900 it is lower compared to the UK median at £30,300 

- **Verdict:** DATA_DRIFT
- **URL:** https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fassets.publishing.service.gov.uk%2Fmedia%2F67cabc53a175f08d198d809a%2FTable_3.4_2223.ods&wdOrigin=BROWSELINK
- **Evidence:** Only 0/7 keywords matched

### There were 58,963 people on Universal Credit in December 2024 compared to 43,917 in May 2022, showin

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/potdptfq/emqu-q4-v2.pdf
- **Evidence:** Page returned no readable text

### Hospitality is the top employer in two constituencies: St Austell and Newquay (19.1%) and St Ives, w

- **Verdict:** DATA_DRIFT
- **URL:** https://commonslibrary.parliament.uk/research-briefings/cbp-10536/
- **Evidence:** Only 2/12 keywords matched

### There are 25,275 distinct businesses in Cornwall and 29,590 local units, or workspaces.

- **Verdict:** LINK_BROKEN
- **URL:** https://www.nomisweb.co.uk/datasets/idbrlu/reports/default.aspx?geography=E06000052
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Compared to the previous 2023 data, there has been a loss of 75 businesses (-0.3%) and 60 local unit

- **Verdict:** LINK_BROKEN
- **URL:** https://www.nomisweb.co.uk/datasets/idbrlu/reports/default.aspx?geography=E06000052
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### The largest sector by number of businesses was Construction with 3,965 businesses (15.7%), followed 

- **Verdict:** DATA_DRIFT
- **URL:** https://www.economyhub.cornwall.gov.uk/economy-and-employment/#/view-report/9e93e3faae4c449084e459fcd86e88d0/___iaFirstFeature/G3
- **Evidence:** Only 0/14 keywords matched

### The top three priorities highlighted by Cornwall Chamber's recent survey are improving transport and

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallchamber.co.uk/chamber-intelligence/cornwall-can-be-2025report/
- **Evidence:** Only 4/20 keywords matched

### 34% are spending less on eating and drinking out and 29% are looking for more 'free things to do.

- **Verdict:** LINK_BROKEN
- **URL:** https://visittamarvalley.co.uk/wp-content/uploads/2024/04/Visit-Cornwall.pdf
- **Evidence:** Page returned no readable text

### 29% are cutting back on buying gifts/shopping, although this has been declining for a number of year

- **Verdict:** LINK_BROKEN
- **URL:** https://visittamarvalley.co.uk/wp-content/uploads/2024/04/Visit-Cornwall.pdf
- **Evidence:** Page returned no readable text

### 40% of respondents reported difficulties securing or retaining good quality, year-round employment, 

- **Verdict:** LINK_BROKEN
- **URL:** https://visittamarvalley.co.uk/wp-content/uploads/2024/04/Visit-Cornwall.pdf
- **Evidence:** Page returned no readable text

### Almost half of the respondents (48%) to our survey feel that they don't receive a fair wage for the 

- **Verdict:** LINK_BROKEN
- **URL:** https://visittamarvalley.co.uk/wp-content/uploads/2024/04/Visit-Cornwall.pdf
- **Evidence:** Page returned no readable text

### 39% reported their current skills did not match employer needs.

- **Verdict:** LINK_BROKEN
- **URL:** https://visittamarvalley.co.uk/wp-content/uploads/2024/04/Visit-Cornwall.pdf
- **Evidence:** Page returned no readable text

### Many people (46%) still feel that Cornwall is not doing well after the pandemic and economic uncerta

- **Verdict:** LINK_BROKEN
- **URL:** https://visittamarvalley.co.uk/wp-content/uploads/2024/04/Visit-Cornwall.pdf
- **Evidence:** Page returned no readable text

### Our foodbank use in St Ives goes up in the winter by about 25%, usually due to the amount of seasona

- **Verdict:** DATA_DRIFT
- **URL:** https://www.stivesfoodbank.org/
- **Evidence:** Keyword match: 7/12 words (58%)

### Over half of households experience at least one form of deprivation, with child poverty particularly

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallcommunityfoundation.com/research-reports/vital-signs-2025/
- **Evidence:** Only 8/20 keywords matched

### Fuel poverty affects 15.4% of households, with energy-inefficient homes worsening the issue.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/health-and-social-care/public-health/public-health-campaigns/winter-wellbeing/
- **Evidence:** Keyword match: 6/9 words (67%)

### Rising living costs have driven record reliance on foodbanks, and increased eligibility for free sch

- **Verdict:** DATA_DRIFT
- **URL:** https://www.thepost.uk.com/news/nearly-a-quarter-of-cornwall-pupils-eligible-for-free-school-meals-as-government-plans-to-expand-access-to-scheme-802680
- **Evidence:** Only 6/14 keywords matched

### Cornwall's average internet speed lags behind the UK average, with over one-third of residents facin

- **Verdict:** DATA_DRIFT
- **URL:** https://homenicom.co.uk/area/cornwall/broadband
- **Evidence:** Only 6/14 keywords matched

### Child poverty after housing costs in Cornwall is deeply concerning, with one in three children livin

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallcommunityfoundation.com/insights/vital-signs-2025/
- **Evidence:** Keyword match: 11/13 words (85%)

### Child poverty is highest within North Cornwall and Camborne and Redruth parliamentary constituencies

- **Verdict:** DATA_DRIFT
- **URL:** https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Faaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com%2F2010%2FChid%2Bpoverty%2BAHC%2B2015-2023_Local%2BAuthorities%2Band%2BConstituencies.xlsx%3Fv%3D1716657555000&wdOrigin=BROWSELINK
- **Evidence:** Only 2/11 keywords matched

### The Office for National Statistics (ONS) data shows 53.9% of households in Cornwall were deprived in

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/the-council-and-democracy/data-and-intelligence/census-2021/dimensions-of-deprivation/
- **Evidence:** Keyword match: 11/18 words (61%)

### Data collated from the DWP and ONS and presented in Cornwall Live show that, in the Bodmin St Mary's

- **Verdict:** DATA_DRIFT
- **URL:** https://endchildpoverty.org.uk/child-poverty-2024/
- **Evidence:** Only 7/15 keywords matched

### In the Camborne Trelowarren and Penzance East wards, 36% of children were living below the threshold

- **Verdict:** DATA_DRIFT
- **URL:** https://endchildpoverty.org.uk/child-poverty-2024/
- **Evidence:** Only 4/9 keywords matched

### In Falmouth Penwerris 34% of children were living in poverty, and in Launceston North and North Peth

- **Verdict:** DATA_DRIFT
- **URL:** https://endchildpoverty.org.uk/child-poverty-2024/
- **Evidence:** Keyword match: 5/10 words (50%)

### By contrast, just 9% of children in the Falmouth Arwenack and Feock and Kea wards were living in pov

- **Verdict:** DATA_DRIFT
- **URL:** https://endchildpoverty.org.uk/child-poverty-2024/
- **Evidence:** Only 7/17 keywords matched

### At the time of writing, fuel poverty affects over 15.4% of all households (40,355 homes), a 2.8% inc

- **Verdict:** DATA_DRIFT
- **URL:** https://www.gov.uk/government/statistics/sub-regional-fuel-poverty-2024-2022-data/sub-regional-fuel-poverty-in-england-2024-2022-data
- **Evidence:** Numbers matched: ['2022', '202', '2']. Keyword overlap: 78%

### On the Isles of Scilly it is 18% (179 homes), a 6.3% increase from 2022 (Cornwall Council, Winter We

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/health-and-social-care/public-health/public-health-campaigns/winter-wellbeing/
- **Evidence:** Numbers matched: ['2022', '202', '2']. Keyword overlap: 67%

### Both figures are above England's average of 13%, however, these statistics do not account for the re

- **Verdict:** DATA_DRIFT
- **URL:** https://www.gov.uk/government/statistics/sub-regional-fuel-poverty-2024-2022-data/sub-regional-fuel-poverty-in-england-2024-2022-data
- **Evidence:** Keyword match: 11/15 words (73%)

### Cornwall has about double the number of houses with no central heating, about 1.5% nationally and 3.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/the-council-and-democracy/data-and-intelligence/census-2021/housing-census-2021/
- **Evidence:** Numbers matched: ['3.5%']. Keyword overlap: 62%

### Approximately 22.63% of households have an Energy Performance Certificate (EPC) rating of E, and abo

- **Verdict:** DATA_DRIFT
- **URL:** https://epc.opendatacommunities.org/
- **Evidence:** Only 4/9 keywords matched

### The Trussell Trust reported that between April 2024 and March 2025, food banks in Cornwall distribut

- **Verdict:** DATA_DRIFT
- **URL:** https://www.voicenewspapers.co.uk/news/tens-of-thousands-of-emergency-food-parcels-handed-out-in-cornwall-last-year-as-record-support-provided-across-uk-689211
- **Evidence:** Numbers matched: ['4', '2024', '16', '5', '202']. Keyword overlap: 65%

### Low income as a primary issue has fallen from 30% in 2023 to 21% in 2024 to 18% in 2025 thanks to th

- **Verdict:** LINK_BROKEN
- **URL:** https://cornwallvsf.org/app/uploads/2025/09/LWP-ACTION-PLAN-.pdf
- **Evidence:** Page returned no readable text

### Camborne based Transformation CPR Foodbank distributed 134,137 food bank meals in 2024, which is 11,

- **Verdict:** DATA_DRIFT
- **URL:** https://transformationcpr.org/support-us/donating-to-transformation
- **Evidence:** Numbers matched: ['4', '2024', '202']. Keyword overlap: 50%

### They also delivered 349 Christmas Hampers to families and individuals and approximately 1,000 wrappe

- **Verdict:** DATA_DRIFT
- **URL:** https://www.itv.com/news/westcountry/2024-12-19/food-bank-to-give-out-two-thousand-christmas-presents-to-families-in-need
- **Evidence:** Keyword match: 7/10 words (70%)

### Transformation CPR had 673 visits to their Community Hub which offers support for money, health and 

- **Verdict:** DATA_DRIFT
- **URL:** https://transformationcpr.org/
- **Evidence:** Keyword match: 6/11 words (55%)

### Their Community Health and Wellbeing Workers engaged with 320 households and are actively working wi

- **Verdict:** DATA_DRIFT
- **URL:** https://transformationcpr.org/
- **Evidence:** Keyword match: 6/10 words (60%)

### In Newquay, the Drop In and Share Centre (DISC) experienced a dramatic increase in demand during the

- **Verdict:** DATA_DRIFT
- **URL:** https://www.itv.com/news/westcountry/2024-12-03/worrying-times-as-award-winning-foodbank-announces-closure
- **Evidence:** Keyword match: 7/14 words (50%)

### Department for Education figures show that in January 2024, Cornwall had 16,937 pupils eligible for 

- **Verdict:** DATA_DRIFT
- **URL:** https://explore-education-statistics.service.gov.uk/find-statistics/school-pupils-and-their-characteristics/2023-24
- **Evidence:** Numbers matched: ['4', '2024', '202']. Keyword overlap: 93%

### 420,155 vehicles were registered in Cornwall by March 2023. 20,792 classified as low-emission vehicl

- **Verdict:** DATA_DRIFT
- **URL:** https://www.gov.uk/government/statistics/vehicle-licensing-statistics-2023/vehicle-licensing-statistics-2023
- **Evidence:** Numbers matched: ['3', '2023', '5%', '202']. Keyword overlap: 75%

### 15% of households in Cornwall didn't own a car or a van in 2021, a much lower figure than the averag

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/datasets/TS045/editions/2021/versions/1/filter-outputs/e8011248-2e85-4c61-a21e-68b528799347#get-data
- **Evidence:** Keyword match: 20/26 words (77%)

### Cornwall has the tenth longest road network in Great Britain, with 435 km of 'A' roads and 4,174 km 

- **Verdict:** DATA_DRIFT
- **URL:** https://www.gov.uk/government/statistics/road-lengths-in-great-britain-2023/road-lengths-in-great-britain-2023
- **Evidence:** Keyword match: 7/10 words (70%)

### Only 1.1% of Cornwall residents aged 16 to 74 who are in employment use the train to get to work, co

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/the-council-and-democracy/data-and-intelligence/census-2021/travel-to-work-census-2021/
- **Evidence:** Keyword match: 10/13 words (77%)

### This is 42% lower than the UK average (158 Mbps).

- **Verdict:** DATA_DRIFT
- **URL:** https://www.uswitch.com/broadband/studies/broadband-statistics/
- **Evidence:** Numbers matched: ['42%']. Keyword overlap: 100%

### Broadband users in Cornwall typically see speeds in the range of 35 Mbps to 143 Mbps, and the median

- **Verdict:** DATA_DRIFT
- **URL:** https://fairinternetreport.com/United-Kingdom/Cornwall
- **Evidence:** Keyword match: 14/17 words (82%)

### The average upload speed in Cornwall is 15 Mbps, which is 26% lower than the UK's average upload spe

- **Verdict:** DATA_DRIFT
- **URL:** https://fairinternetreport.com/United-Kingdom/Cornwall
- **Evidence:** Numbers matched: ['20', '15']. Keyword overlap: 100%

### Crisis and Care funding, available to adults and families for support with food, energy, utilities, 

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/benefits-and-support/crisis-and-care-awards/
- **Evidence:** HTTP_ERROR:404

### Cornwall also has one of the highest volunteering rates in the UK, with over one-third of people reg

- **Verdict:** DATA_DRIFT
- **URL:** https://www.volunteercornwall.org.uk/about-us/our-impact/facts-and-statistics
- **Evidence:** Keyword match: 6/12 words (50%)

### 91% of respondents believe there is a wide income gap between people in Cornwall (a 4% increase from

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallcommunityfoundation.com/research-reports/vital-signs-2025/
- **Evidence:** Numbers matched: ['4%', '2022', '202', '2']. Keyword overlap: 44%

### 57% reported feeling disadvantaged compared to others.

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallcommunityfoundation.com/research-reports/vital-signs-2025/
- **Evidence:** Only 2/5 keywords matched

### 71% of respondents said there were not enough means of public transport for commuting and accessing 

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallcommunityfoundation.com/research-reports/vital-signs-2025/
- **Evidence:** Keyword match: 7/11 words (64%)

### However, 73% stated that they know their neighbours and feel able to get to know people in their com

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallcommunityfoundation.com/research-reports/vital-signs-2025/
- **Evidence:** Only 5/16 keywords matched

### 64% of children in my school are on Pupil Premium which is huge, easily three times the national ave

- **Verdict:** DATA_DRIFT
- **URL:** https://explore-education-statistics.service.gov.uk/find-statistics/school-pupils-and-their-characteristics/2023-24
- **Evidence:** Keyword match: 8/10 words (80%)

### Whilst 50% have special educational needs'

- **Verdict:** DATA_DRIFT
- **URL:** https://explore-education-statistics.service.gov.uk/find-statistics/special-educational-needs-in-england/2024-25
- **Evidence:** Keyword match: 3/4 words (75%)

### Cornwall has a higher-than-average proportion of people with a long-term health condition or disabil

- **Verdict:** DATA_DRIFT
- **URL:** https://disabilitycornwall.org.uk/
- **Evidence:** Keyword match: 7/11 words (64%)

### One in five people are affected by disability.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Cardiovascular deaths are rising, though still below the national average.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Obesity is a major concern, with 62.7% of adults in Cornwall overweight or obese.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Drug use, especially crack cocaine and synthetic substances, is growing, with 2,388 adults in drug t

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### One in ten residents provides unpaid care, and social care staff shortages remain high, with 11% of 

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### In 2022-23 62.7% of adults in Cornwall and 66.7% of adults on the Isles of Scilly were living with o

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/ljmko5bo/cios-healthier-weight-strategy-2025-35-2800125.pdf
- **Evidence:** Page returned no readable text

### In 2022-23, 22.4% of Reception aged children and 32.8% of Year 6 aged children in Cornwall and Isles

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/ljmko5bo/cios-healthier-weight-strategy-2025-35-2800125.pdf
- **Evidence:** Page returned no readable text

### Meanwhile, boys born in the area has a life expectancy of 79.6 years (ONS Life Expectancy for Local 

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/healthandlifeexpectancies/bulletins/lifeexpectancyforlocalareasoftheuk/between2001to2003and2020to2022
- **Evidence:** Keyword match: 5/7 words (71%)

### Between 2020 and 2043, the proportion of residents aged 65 and over is expected to increase from 25.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/healthandlifeexpectancies/bulletins/lifeexpectancyforlocalareasoftheuk/between2001to2003and2020to2022
- **Evidence:** Numbers matched: ['3', '2020', '15', '0', '65', '202']. Keyword overlap: 82%

### The working-age group (16-64) will shrink from 57.9% to 53.3%.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare/healthandlifeexpectancies/bulletins/lifeexpectancyforlocalareasoftheuk/between2001to2003and2020to2022
- **Evidence:** Only 2/5 keywords matched

### The Cornwall & Isles of Scilly Drugs Needs Assessment 2024-25 update reported that an estimated 27,7

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### Around one-third are class A drug users (Safer Cornwall).

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### There are 2,562 adults using opiates and/or crack cocaine in our local population.

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### The latest data shows that in Cornwall 2,388 adults were in structured treatment for drug dependency

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 1,808 adults were in structured treatment for alcohol dependency in the 12-month period to September

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### Within this figure, the number of people accessing help for non-opiates alongside alcohol has increa

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### In addition, 162 young people under the age of 18 were in treatment with the young people's service 

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### This figure has stabilised this year, after a rise of 38% in 2023/24 (Safer Cornwall).

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### Of the 3,613 adults in treatment during the year to April 2024, approximately two-thirds are male an

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### 62 people died whilst in treatment in the 12-month period to April 2024, which is 1.7% of people who

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### This is just above the national average (1.3%) but shows some improvement from the 2% experienced in

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### There were 17.9 alcohol-related deaths per 100,000 people in comparison with 14.5 per 100,000 nation

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### Drug misuse deaths are also higher in Cornwall (6.5 per 100,000 people) than nationally but are lowe

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### The NHS Confederation reports that only 8% of the mental health budget and less than 1% of the total

- **Verdict:** LINK_BROKEN
- **URL:** https://www.nhsconfed.org/articles/childrens-mental-health-needs-more
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### This indicates a significant disparity in funding allocation, as 50% of adult mental health problems

- **Verdict:** LINK_BROKEN
- **URL:** https://www.nhsconfed.org/articles/childrens-mental-health-needs-more
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Cornwall faces a severe shortage of Mental Health Practitioners (MHPs) in GP surgeries, with only 19

- **Verdict:** LINK_BROKEN
- **URL:** https://www.nhsconfed.org/articles/childrens-mental-health-needs-more
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### This is far below the target of 46, and leads to inconsistent access to early mental health support.

- **Verdict:** LINK_BROKEN
- **URL:** https://www.nhsconfed.org/articles/childrens-mental-health-needs-more
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### The 86 deaths registered in 2022 were also the highest number recorded since 2001.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornish-times.co.uk/news/almost-100-suicide-deaths-registered-in-cornwall-as-government-launches-plan-to-reduce-deaths-661417
- **Evidence:** Numbers matched: ['2022', '86', '1', '202', '2']. Keyword overlap: 57%

### Of these, 6,129 had received a formal diagnosis, indicating a diagnosis rate of 61.8%.

- **Verdict:** DATA_DRIFT
- **URL:** https://digital.nhs.uk/data-and-information/publications/statistical/primary-care-dementia-data/february-2025
- **Evidence:** Keyword match: 6/7 words (86%)

### Cornwall has a higher-than-average proportion of people whose day-to-day lives are limited by disabi

- **Verdict:** DATA_DRIFT
- **URL:** https://www.nomisweb.co.uk/sources/census_2021/report?compare=E06000052,E12000009,E92000001#section_10
- **Evidence:** Only 0/19 keywords matched

### 37% of households in Cornwall have one or more disabled people (Disability Cornwall).

- **Verdict:** DATA_DRIFT
- **URL:** https://www.nomisweb.co.uk/sources/census_2021/report?compare=E06000052,E12000009,E92000001#section_10
- **Evidence:** Only 0/6 keywords matched

### It is estimated to be affecting over 35,500 people in Cornwall and the Isles of Scilly (Cornwall Cou

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/riohdkqm/director-of-public-health-annual-report-24_final-v2.pdf
- **Evidence:** Page returned no readable text

### The percentage of adults seen by an NHS dentist in Cornwall has steadily declined from 2019-2024. Th

- **Verdict:** DATA_DRIFT
- **URL:** https://www.healthwatchcornwall.co.uk/report/2024-11-01/healthwatch-cornwall-report-highlights-dental-care-crisis-affecting-local
- **Evidence:** Only 2/11 keywords matched

### In the NHS Dental Statistics for England for the 2023-24 period, the Cornwall and Isles of Scilly In

- **Verdict:** DATA_DRIFT
- **URL:** https://www.healthwatchcornwall.co.uk/report/2024-11-01/healthwatch-cornwall-report-highlights-dental-care-crisis-affecting-local
- **Evidence:** Numbers matched: ['4', '2024', '24', '202']. Keyword overlap: 30%

### For children, it is ranked 41 out of 42 ICBs (based on the percentage of the child population seen b

- **Verdict:** DATA_DRIFT
- **URL:** https://www.healthwatchcornwall.co.uk/report/2024-11-01/healthwatch-cornwall-report-highlights-dental-care-crisis-affecting-local
- **Evidence:** Numbers matched: ['4', '2024', '202']. Keyword overlap: 25%

### In Cornwall one in ten residents provide unpaid care.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.nomisweb.co.uk/sources/census_2021/report?compare=E06000052,E12000009,E92000001#section_10
- **Evidence:** Only 0/7 keywords matched

### The last census data from the Office for National Statistics (ONS) shows 10.1% of the population ove

- **Verdict:** DATA_DRIFT
- **URL:** https://www.nomisweb.co.uk/sources/census_2021/report?compare=E06000052,E12000009,E92000001#section_10
- **Evidence:** Only 2/19 keywords matched

### In Cornwall, 28,130 people were providing more than 20 hours of unpaid care a week, including 17,453

- **Verdict:** DATA_DRIFT
- **URL:** https://www.nomisweb.co.uk/sources/census_2021/report?compare=E06000052,E12000009,E92000001#section_10
- **Evidence:** Only 0/16 keywords matched

### Census data has shown that 115 children in Cornwall between the ages of five and 17 to 50 or more ho

- **Verdict:** DATA_DRIFT
- **URL:** https://www.nomisweb.co.uk/sources/census_2021/report?compare=E06000052,E12000009,E92000001#section_10
- **Evidence:** Only 1/14 keywords matched

### The vacancy rate in the social care sector in Cornwall is over 11%.

- **Verdict:** LINK_BROKEN
- **URL:** https://www.proudtocarecornwall.org.uk/wp-content/uploads/2024/07/Cornwalls-adult-social-care-workforce-final-report.pdf
- **Evidence:** HTTP_ERROR:404

### For the overall adult social care workforce in Cornwall, there were a total of 19,500 posts, and fil

- **Verdict:** LINK_BROKEN
- **URL:** https://www.proudtocarecornwall.org.uk/wp-content/uploads/2024/07/Cornwalls-adult-social-care-workforce-final-report.pdf
- **Evidence:** HTTP_ERROR:404

### There were 1,200 bank and agency posts, of which 800 were care workers (Cornwall Council Proud to Ca

- **Verdict:** LINK_BROKEN
- **URL:** https://www.proudtocarecornwall.org.uk/wp-content/uploads/2024/07/Cornwalls-adult-social-care-workforce-final-report.pdf
- **Evidence:** HTTP_ERROR:404

### 76% of respondents reported inequality in healthcare access with 75% stating they could not see a he

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 68% reported difficulty seeing a healthcare professional without long waiting times.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Mental health provisions were of particular concern with 72% stating that mental health support was 

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### There has been a significant increase in the number of people who find it difficult to arrange trans

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### There are 284,160 properties in Cornwall.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.economyhub.cornwall.gov.uk/housing/#/view-report/85fe651fd2af40e0bf133770aaa91687/___iaFirstFeature/G3
- **Evidence:** Only 1/3 keywords matched

### 66.3% of homes are owned by occupants, while the figure for England is 61.3%.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.economyhub.cornwall.gov.uk/housing/#/view-report/85fe651fd2af40e0bf133770aaa91687/___iaFirstFeature/G3
- **Evidence:** Only 0/6 keywords matched

### The private rental market makes up 19.7% of housing in Cornwall, similar to 20.4% nationally, and so

- **Verdict:** DATA_DRIFT
- **URL:** https://www.economyhub.cornwall.gov.uk/housing/#/view-report/85fe651fd2af40e0bf133770aaa91687/___iaFirstFeature/G3
- **Evidence:** Only 2/13 keywords matched

### In the 2023-24 period, Cornwall Council delivered 775 new affordable homes (Cornwall Council Afforda

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/fb0phgl4/housing-analysis-2024.pdf
- **Evidence:** Page returned no readable text

### During 2023-24 there were 2,527 net additional homes completed, which represents a circa 0.9% increa

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/fb0phgl4/housing-analysis-2024.pdf
- **Evidence:** Page returned no readable text

### This was slightly higher than the average of £286,000 in March 2024 (revised), a 2.0% rise.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/visualisations/housingpriceslocal/E06000052/
- **Evidence:** Keyword match: 4/6 words (67%)

### Detached properties: £441,000

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Semi-detached properties: £293,000

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Terraced properties: £241,000

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Flats and maisonettes: £161,000

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### The most affordable postcode district is TR14 8 (eastern Camborne) with the average price of £182,00

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### The most expensive postcode district is PL27 6 (villages surrounding Wadebridge), with an average of

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/fb0phgl4/housing-analysis-2024.pdf
- **Evidence:** Page returned no readable text

### In Cornwall the average home costs 8.8 times average earnings in 2024, compared to 7.5 in England an

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/fb0phgl4/housing-analysis-2024.pdf
- **Evidence:** Page returned no readable text

### The private rental market makes up 19.7% of housing in Cornwall, in contrast to 20.4% nationally (Co

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/visualisations/housingpriceslocal/E06000052/
- **Evidence:** Keyword match: 5/8 words (62%)

### The average monthly private rent in Cornwall was £957 per month in April 2025. This was an increase 

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/visualisations/housingpriceslocal/E06000052/
- **Evidence:** Numbers matched: ['4', '£883', '2025', '5', '202']. Keyword overlap: 100%

### In Cornwall, the average rent for flats or maisonettes rose by 8.3%, while for detached properties, 

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/visualisations/housingpriceslocal/E06000052/
- **Evidence:** Keyword match: 10/10 words (100%)

### Average rent for one-bed properties rose by 9.3%, while the average for four-bed (or above) properti

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/visualisations/housingpriceslocal/E06000052/
- **Evidence:** Keyword match: 12/12 words (100%)

### There were 424 rental listings on Rightmove in Cornwall in April 2025.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Social rented properties represent 12.8%, compared to 17.1% in England (Cornwall Council, 2024).

- **Verdict:** DATA_DRIFT
- **URL:** https://www.economyhub.cornwall.gov.uk/housing/#/view-report/85fe651fd2af40e0bf133770aaa91687/___iaFirstFeature/G3
- **Evidence:** Only 0/6 keywords matched

### The figures in the 2011 census were 12% compared to 18%.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.economyhub.cornwall.gov.uk/housing/#/view-report/85fe651fd2af40e0bf133770aaa91687/___iaFirstFeature/G3
- **Evidence:** Only 0/3 keywords matched

### This has increased by 131% over the last 5 years.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/housing/housing-intelligence/
- **Evidence:** Numbers matched: ['5']. Keyword overlap: 25%

### 54% of households on the housing register require one-bedroom accommodation (Cornwall Council Preven

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/housing/housing-intelligence/
- **Evidence:** Keyword match: 4/7 words (57%)

### 1,987 new social housing lets were offered to tenants in Cornwall in 2022-23.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/housing/homechoice-housing-register/changes-to-homechoice-policy/#banding
- **Evidence:** Numbers matched: ['202', '23', '2']. Keyword overlap: 71%

### This was down from 2,432 in 2021-22, and the lowest figure of any year over the past decade, with th

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/housing/homechoice-housing-register/changes-to-homechoice-policy/#banding
- **Evidence:** Only 8/18 keywords matched

### 814 affordable homes were developed in 2024 for Social or Affordable Rent or affordable homeownershi

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/y5pdy3k1/gypsy_roma_traveller-strategy-2024-54659-final.pdf
- **Evidence:** Page returned no readable text

### 80% of the Gypsies, Roma and Travellers communities live in conventional housing in Cornwall, with 2

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/y5pdy3k1/gypsy_roma_traveller-strategy-2024-54659-final.pdf
- **Evidence:** Page returned no readable text

### Cornwall Council's Decent Homes report estimates that 44,340 of Cornwall's owner-occupied properties

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/zmzgcdvk/cornwall_decent_homes_2021.pdf
- **Evidence:** Page returned no readable text

### This equates to 24% of owner-occupied properties.

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/zmzgcdvk/cornwall_decent_homes_2021.pdf
- **Evidence:** Page returned no readable text

### 12,497 (20% of all private rented) of private rented have category 1 hazards, and 2,637 (8% of all s

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/zmzgcdvk/cornwall_decent_homes_2021.pdf
- **Evidence:** Page returned no readable text

### Short-term let numbers fluctuate between 15,000 to over 24.000 in summer.

- **Verdict:** DATA_DRIFT
- **URL:** https://airbtics.com/average-rent-cornwall-gb/
- **Evidence:** Only 2/8 keywords matched

### There were approximately 6.080 holiday homes in Cornwall when the census was taken in March 2021.

- **Verdict:** DATA_DRIFT
- **URL:** https://airbtics.com/average-rent-cornwall-gb/
- **Evidence:** Numbers matched: ['202', '1']. Keyword overlap: 22%

### 38% of these properties were in West Cornwall, with the Camborne, Pool and Redruth Community Network

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/0bpf3qnp/cornwall_empty_homes_2021.pdf
- **Evidence:** Page returned no readable text

### The predominant reasons for properties being empty were due to being under repair (22%), followed by

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/0bpf3qnp/cornwall_empty_homes_2021.pdf
- **Evidence:** Page returned no readable text

### From inception of Cornwall Council's Empty Properties Project in September 2010 to April 2021, 1,446

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/0bpf3qnp/cornwall_empty_homes_2021.pdf
- **Evidence:** Page returned no readable text

### In 2023-24, 2,910 households were assessed as homeless or threatened with homelessness in Cornwall.

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/cxbn0mra/preventing-homelessness-and-rough-sleeping-strategy-web.pdf
- **Evidence:** Page returned no readable text

### Single people accounted for 68% of all households who were homeless or threatened with homelessness.

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/cxbn0mra/preventing-homelessness-and-rough-sleeping-strategy-web.pdf
- **Evidence:** Page returned no readable text

### In Cornwall young people are disproportionally affected by homelessness with 18-34-year-olds account

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/cxbn0mra/preventing-homelessness-and-rough-sleeping-strategy-web.pdf
- **Evidence:** Page returned no readable text

### Mental health is the most prevalent support need, accounting for 32% of all support needs (Cornwall 

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/cxbn0mra/preventing-homelessness-and-rough-sleeping-strategy-web.pdf
- **Evidence:** Page returned no readable text

### In January 2025 there were 960 households in temporary and emergency accommodation.

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/cxbn0mra/preventing-homelessness-and-rough-sleeping-strategy-web.pdf
- **Evidence:** Page returned no readable text

### Since 2019 there has been a 224% increase in the number of households in temporary accommodation, ha

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/cxbn0mra/preventing-homelessness-and-rough-sleeping-strategy-web.pdf
- **Evidence:** Page returned no readable text

### In 2023-24 circa £20m was spent on emergency and temporary accommodation in Cornwall.

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/cxbn0mra/preventing-homelessness-and-rough-sleeping-strategy-web.pdf
- **Evidence:** Page returned no readable text

### The majority (68%) of households currently in temporary accommodation have been there for less than 

- **Verdict:** LINK_BROKEN
- **URL:** https://www.cornwall.gov.uk/media/cxbn0mra/preventing-homelessness-and-rough-sleeping-strategy-web.pdf
- **Evidence:** Page returned no readable text

### During the 2024-25 winter St Petrocs' Winter Service supported 538 people, a 27% increase from the p

- **Verdict:** DATA_DRIFT
- **URL:** https://www.gov.uk/government/statistics/rough-sleeping-snapshot-in-england-autumn-2024/rough-sleeping-snapshot-in-england-autumn-2024
- **Evidence:** Numbers matched: ['4', '2024', '25', '202']. Keyword overlap: 88%

### St Petrocs provided 107 people with emergency accommodation over the winter, of which 97 (or 91%) di

- **Verdict:** DATA_DRIFT
- **URL:** https://www.gov.uk/government/statistics/rough-sleeping-snapshot-in-england-autumn-2024/rough-sleeping-snapshot-in-england-autumn-2024
- **Evidence:** Numbers matched: ['4', '2024', '97', '25', '202']. Keyword overlap: 83%

### 82% of people had mental health needs, 64% of people had physical health issues and 21% of people ha

- **Verdict:** DATA_DRIFT
- **URL:** https://www.stpetrocs.org.uk/Listing/Category/reports
- **Evidence:** Only 0/12 keywords matched

### In 2024 St Petrocs helped 537 people move on from homelessness. They engaged 1,402 people across the

- **Verdict:** DATA_DRIFT
- **URL:** https://www.stpetrocs.org.uk/Listing/Category/reports
- **Evidence:** Only 1/10 keywords matched

### In 2024, 346 people lived in St Petrocs' 24 supported accommodation units.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.stpetrocs.org.uk/Listing/Category/reports
- **Evidence:** Only 1/6 keywords matched

### Additionally, 65% of their clients now have long-term health conditions or disabilities, a 48% incre

- **Verdict:** DATA_DRIFT
- **URL:** https://www.stpetrocs.org.uk/Listing/Category/reports
- **Evidence:** Only 0/10 keywords matched

### 91% of respondents believe there is insufficient local, affordable housing.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 93% agreed that there aren't enough houses for people on low income, an increase of 10% since 2022.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 92% stated that private rental accommodation is unaffordable for most people, a 5% increase since 20

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 87% agreed that too many homes stood unoccupied all year.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### My rent has doubled in the last five years.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Cornwall's crime rate is 11% lower than the national average for similar areas, with 33,083 crimes r

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### However, crime increased by 13% compared to 2023, driven by rising shoplifting and persistent issues

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Over half of recorded crimes occur in town centres, and two-thirds happens in ten major towns.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Cornwall's overall recorded crime rate is below average for similar areas nationally, but this is la

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### In the past year, 33,083 crimes were reported to the police, equating to a rate of 57.5 crimes per 1

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Compared with the same period in 2023, crime numbers increased by 13% (Safer Cornwall).

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Over 55% of recorded crime occurs in our town centres.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/council-news/communities-and-housing/new-statistics-spark-fresh-calls-to-end-domestic-abuse-and-sexual-violence-in-cornwall/
- **Evidence:** Only 3/7 keywords matched

### A further six women, who were victims of domestic abuse, took their own lives, and another five deat

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/council-news/communities-and-housing/new-statistics-spark-fresh-calls-to-end-domestic-abuse-and-sexual-violence-in-cornwall/
- **Evidence:** Keyword match: 22/22 words (100%)

### Reports of domestic abuse and sexual violence continue to increase year-on-year, and it is estimated

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/council-news/communities-and-housing/new-statistics-spark-fresh-calls-to-end-domestic-abuse-and-sexual-violence-in-cornwall/
- **Evidence:** Keyword match: 20/20 words (100%)

### The Cornwall & Isles of Scilly Drugs Needs Assessment 2024-25 update reported that an estimated 27,7

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### Around one-third are class A drug users (Safer Cornwall).

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### National research into the prevalence of problem drug use estimate that there are 2,562 adults using

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2025/04/CIOS-Drugs-Needs-Assessment-2024_25.pdf
- **Evidence:** Page returned no readable text

### In the year leading up to September 2024, Devon and Cornwall Police recorded 2,433 shoplifting offen

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornish-times.co.uk/news/shoplifting-offences-in-devon-and-cornwall-rise-by-almost-half-761516
- **Evidence:** Keyword match: 12/15 words (80%)

### Two thirds of all recorded crimes happen in 10 of our largest towns (Bodmin, Camborne, Falmouth, Lis

- **Verdict:** LINK_BROKEN
- **URL:** https://safercornwall.co.uk/wp-content/uploads/dlm_uploads/2023/10/SC-0042-Partnership-Plan-SEPT-2023.pdf
- **Evidence:** Page returned no readable text

### In Cornwall, there were 7,536 antisocial behaviour crimes reported in the period from October 2023 t

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwalllive.com/news/cornwall-news/worst-cornwall-neighbourhoods-antisocial-behaviour-10090169
- **Evidence:** Numbers matched: ['4', '3', '2024', '202']. Keyword overlap: 57%

### In the period from October 2023 to September 2024, 487 hate crimes were recorded in Cornwall by Devo

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Hate crime currently accounts for around 1% of all recorded crime in Cornwall.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Over the past three years, recorded hate crime has decreased by 3% (Safer Cornwall).

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### The number of hate crime offences against religion/belief recorded in Cornwall rose from 39 to 44 la

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Crime against transgender people increased by 54% from 24 to 37 in the 12-month periods ending Septe

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### CFRS operates 31 fire stations with 43 fire engines across Cornwall, staffed by approximately 167 Fu

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/fire-and-rescue-service/about-cornwall-fire-and-rescue-service/meet-cfrs/
- **Evidence:** Numbers matched: ['24', '400', '167']. Keyword overlap: 67%

### The service maintains a high fire engine availability rate of 87.8%, but response times to primary f

- **Verdict:** LINK_BROKEN
- **URL:** https://assets-hmicfrs.justiceinspectorates.gov.uk/uploads/cornwall-fire-and-rescue-service-report-2023-25.pdf
- **Evidence:** Page returned no readable text

### 75% of respondents considered Cornwall a safe place to live which marks a decrease from 2022 (83%).

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Only half the respondents (53%) report feeling safe walking alone at night, compared to 63% in 2022.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 65% felt there were not enough police patrols to respond quickly to crime.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 36% reported being affected by anti-social behaviour, a significant increase from 24% in 2022.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### A 2024 report by the South-West Social Mobility Commission reveals that the region has the lowest pr

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 75,718 pupils are attending 295 schools in Cornwall in 2024/25. This includes 278 state-funded and 6

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### In 2023 6.9% of 16-64 year-old in Cornwall had no qualifications, slightly below the national averag

- **Verdict:** DATA_DRIFT
- **URL:** https://explore-local-statistics.beta.ons.gov.uk/indicators/aged-16-to-64-years-with-no-qualifications-great-britain?utm_source=chatgpt.com
- **Evidence:** Numbers matched: ['3', '16', '2023', '64', '202']. Keyword overlap: 22%

### 30.6% of people in Cornwall had a level 4 or higher qualification-such as a degree, postgraduate qua

- **Verdict:** DATA_DRIFT
- **URL:** https://www.ons.gov.uk/peoplepopulationandcommunity/educationandchildcare/bulletins/educationenglandandwales/census2021
- **Evidence:** Numbers matched: ['4']. Keyword overlap: 82%

### GCSE results varied widely, with the top school achieving 61% grade 5+ in English and maths, while o

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Nationally, 45.3% reached this benchmark compared to 19.2% in Cornwall.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Cornwall has 51 secondary schools that serve 33,934 students for the school year 2024/25 (snobe.co.u

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/schools-and-education/schools-and-colleges/further-and-higher-education-colleges/
- **Evidence:** Numbers matched: ['4', '51', '25']. Keyword overlap: 29%

### In 2023/2024, Cornwall supported over 4,000 children with Special Educational Needs and Disabilities

- **Verdict:** LINK_BROKEN
- **URL:** https://letstalk.cornwall.gov.uk/sendcapacity
- **Evidence:** HTTP_ERROR:404

### A significant portion of these children have Education, Health and Care (EHC) plans, with an 18% inc

- **Verdict:** LINK_BROKEN
- **URL:** https://letstalk.cornwall.gov.uk/sendcapacity
- **Evidence:** HTTP_ERROR:404

### There were also in excess of 100 EHC needs assessment requests every month (Cornwall Council).

- **Verdict:** LINK_BROKEN
- **URL:** https://letstalk.cornwall.gov.uk/sendcapacity
- **Evidence:** HTTP_ERROR:404

### St Joseph's School in Launceston led with 61% of pupils achieving grade 5 or above, followed by Penr

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwalllive.com/news/cornwall-news/cornwalls-best-worst-schools-gcse-9492796
- **Evidence:** Keyword match: 17/18 words (94%)

### Penair School in Truro and Launceston College each had 50% of students reaching this benchmark (Corn

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwalllive.com/news/cornwall-news/cornwalls-best-worst-schools-gcse-9492796
- **Evidence:** Keyword match: 7/9 words (78%)

### Conversely, Sir James Smith's School in Camelford and Hayle Academy reported the lowest outcomes, wi

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwalllive.com/news/cornwall-news/cornwalls-best-worst-schools-gcse-9492796
- **Evidence:** Keyword match: 23/27 words (85%)

### Nationally, 45.3% of students achieved a grade 5 or above in both English and maths in the 2022/23 s

- **Verdict:** LINK_BROKEN
- **URL:** https://social-mobility.data.gov.uk/intermediate_outcomes/compulsory_school_age_(5_to_16_years
- **Evidence:** HTTP_ERROR:404

### Disadvantaged students faced greater challenges, with only 25.2% reaching this standard compared to 

- **Verdict:** LINK_BROKEN
- **URL:** https://social-mobility.data.gov.uk/intermediate_outcomes/compulsory_school_age_(5_to_16_years
- **Evidence:** HTTP_ERROR:404

### In Cornwall 19.2% of students eligible for free school meals (FSM) achieved a grade 5 or above in bo

- **Verdict:** LINK_BROKEN
- **URL:** https://social-mobility.data.gov.uk/intermediate_outcomes/compulsory_school_age_(5_to_16_years
- **Evidence:** HTTP_ERROR:404

### Only 46% of 5-year-olds eligible for free school meals met Early Years Foundation Stage goals in the

- **Verdict:** DATA_DRIFT
- **URL:** https://news.exeter.ac.uk/faculty-of-humanities-arts-and-social-sciences/south-west-pupils-are-the-poorest-performers-in-the-country-on-all-measures-of-education-disadvantage-report-warns/
- **Evidence:** Numbers matched: ['23', '5', '2', '202']. Keyword overlap: 94%

### Five out of six Parliamentary Constituencies in Cornwall are below the England average when it comes

- **Verdict:** DATA_DRIFT
- **URL:** https://news.exeter.ac.uk/faculty-of-humanities-arts-and-social-sciences/south-west-pupils-are-the-poorest-performers-in-the-country-on-all-measures-of-education-disadvantage-report-warns/
- **Evidence:** Keyword match: 15/17 words (88%)

### Only Camborne and Redruth (56.5%) outperformed the England average. St Ives has the lowest percentag

- **Verdict:** DATA_DRIFT
- **URL:** https://news.exeter.ac.uk/faculty-of-humanities-arts-and-social-sciences/south-west-pupils-are-the-poorest-performers-in-the-country-on-all-measures-of-education-disadvantage-report-warns/
- **Evidence:** Numbers matched: ['37.6%']. Keyword overlap: 94%

### For primary school outcomes, Camborne and Redruth (44.8%) and St Ives (44.8%) reach the national ave

- **Verdict:** DATA_DRIFT
- **URL:** https://news.exeter.ac.uk/faculty-of-humanities-arts-and-social-sciences/south-west-pupils-are-the-poorest-performers-in-the-country-on-all-measures-of-education-disadvantage-report-warns/
- **Evidence:** Keyword match: 8/9 words (89%)

### The overall attainment score for all secondary school pupils in Cornwall was 44.1 points out of 90 p

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### The average score achieved across secondary schools in England was 46.3.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### The overall absence rate in Cornwall is higher than pre-pandemic levels. Department for Education da

- **Verdict:** DATA_DRIFT
- **URL:** https://explore-education-statistics.service.gov.uk/find-statistics/pupil-absence-in-schools-in-england/2023-24#dataBlock-e08331fe-cad5-47d6-a8b5-0c7b7136bc7b-tables
- **Evidence:** Numbers matched: ['3', '24', '10%', '2023', '202']. Keyword overlap: 85%

### Permanent absence, however, is much lower on the Isles of Scilly than the England average, at 12.2%.

- **Verdict:** DATA_DRIFT
- **URL:** https://explore-education-statistics.service.gov.uk/find-statistics/pupil-absence-in-schools-in-england/2023-24#dataBlock-e08331fe-cad5-47d6-a8b5-0c7b7136bc7b-tables
- **Evidence:** Only 4/10 keywords matched

### The persistent absences rate for primary schools is 15.3%, higher than the national average of 14.6%

- **Verdict:** DATA_DRIFT
- **URL:** https://explore-education-statistics.service.gov.uk/find-statistics/pupil-absence-in-schools-in-england/2023-24#dataBlock-e08331fe-cad5-47d6-a8b5-0c7b7136bc7b-tables
- **Evidence:** Keyword match: 13/17 words (76%)

### Only half of respondents (52%) agreed that local schools provided a good level of education (55% in 

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### However, 62% felt they had opportunities to learn new skills and gain qualifications.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 45% felt that higher education opportunities in Cornwall were insufficient, compared to 33% in 2022.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Cornwall is 142nd out of 149 local authorities for school income per pupil.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Cornwall is 151st out of 151 local authorities for average gross salary of teachers.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### It is less than £2,000 per child, compared with a median of £2,753 across 150 English local authorit

- **Verdict:** LINK_BROKEN
- **URL:** https://www.exeter.ac.uk/media/universityofexeter/newsarchive/researchgeneral/Social_Mobility_in_the_South_West_Report.pdf
- **Evidence:** Page returned no readable text

### This equates to over £14,000 less funding over the course of a child's life from 0 to 18 years.

- **Verdict:** LINK_BROKEN
- **URL:** https://www.exeter.ac.uk/media/universityofexeter/newsarchive/researchgeneral/Social_Mobility_in_the_South_West_Report.pdf
- **Evidence:** Page returned no readable text

### 10,870 people are employed in creative-related occupations (Cornwall Council, Creative Census 2024).

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 72% of our survey respondents stated that travelling to arts, culture and heritage events is difficu

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Cornwall has 13,000 listed buildings, 1,437 scheduled monuments, 517 historic ports and 145 conserva

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Our Cornish Mining World heritage site covers nearly 20,000 hectares and is made up of 10 distinct a

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### In 2024 it featured over 50 international choirs, hosted 50 concerts and attracted 30,000 attendees.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### The Hall for Cornwall is the largest performance venue in Cornwall, playing host to more than 300 mu

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Falmouth University is also key to the development of Cornwall's creative economy, educating the nex

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Data from the 2024 survey revealed 10,870 people were employed in creative-related occupations acros

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### ... with participation in the census increasing by 43% over 2023.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### ... with 80% enjoying creative expression, 64% appreciating diverse roles, and 63% valuing the posit

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### A significant 83% earn at least half of their income from creative work, with 47% relying solely on 

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Half of respondents (55%) agreed that Cornwall has a wide range of cultural and sporting facilities.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 68% believe Cornwall effectively celebrates its history and culture.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### More people stated finding it difficult to travel to cultural events, 72% compared to 67% in 2022.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 64% said they could not afford to attend as many cultural events as they would like, a significant i

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### With over 400 miles of coast, Cornwall has one of the most varied and beautiful coastlines in the UK

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### In 2024, Earth experienced its first year with global temperatures exceeding 1.5°C above pre-industr

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Each of the past 10 years (2015-2024) were among the 10 warmest years on record, with 2024 being the

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Water pollution remains a concern, with Cornwall recording the highest number of incidents in Englan

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Cornwall is currently generating 40% of its electricity supply from renewables and Cornwall Council 

- **Verdict:** DATA_DRIFT
- **URL:** https://cornwallvsf.org/connecting/projects/greenfootsteps/
- **Evidence:** Numbers matched: ['205', '0', '2030', '203']. Keyword overlap: 36%

### Part of these improvements included 102 Euro 6 buses which produce 75% less NO2 emissions than previ

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/environment/environmental-protection/air-quality/
- **Evidence:** Only 3/12 keywords matched

### Diesel car registrations increased from 2010 to their peak in 2016 but have since fallen by 90%.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwall.gov.uk/environment/environmental-protection/air-quality/
- **Evidence:** Only 2/8 keywords matched

### Cornwall currently has over 408 publicly accessible electric vehicle (EV) charging points, with the 

- **Verdict:** DATA_DRIFT
- **URL:** https://www.bbc.co.uk/news/articles/cr42wz7k5lyo
- **Evidence:** Only 5/18 keywords matched

### Road traffic generates 875,000 tonnes of greenhouse gases per year. This is 93% of Cornish transport

- **Verdict:** DATA_DRIFT
- **URL:** https://www.bbc.co.uk/news/articles/cr42wz7k5lyo
- **Evidence:** Only 1/10 keywords matched

### 12% of species of principal importance are threatened with local extinction or complete loss in Corn

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### Since their reintroduction in 2017, 10 species of birds were recorded for the first time ever, inclu

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwallwildlifetrust.org.uk/what-we-do/about-us/state-nature-cornwall-2020-report
- **Evidence:** Numbers matched: ['7', '10']. Keyword overlap: 33%

### The Forest for Cornwall project aims to create 8,000 hectares of tree canopy across Cornwall.

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornwallwildlifetrust.org.uk/what-we-do/about-us/state-nature-cornwall-2020-report
- **Evidence:** Keyword match: 5/10 words (50%)

### Cornwall National Landscape is unique, it is the only protected landscape that has 12 separate secti

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### It has been constructed from 12 different hedge designs to celebrate the distinct hedging styles fro

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### The proportion of household waste sent to be recycled in Cornwall is below the average in the South 

- **Verdict:** DATA_DRIFT
- **URL:** https://www.cornish-times.co.uk/news/recycling-rate-in-cornwall-below-average-in-the-south-west-665753
- **Evidence:** Keyword match: 10/10 words (100%)

### There are around 5,000 B Corps worldwide, with over 800 in the UK and 31 in Cornwall-the largest clu

- **Verdict:** DATA_DRIFT
- **URL:** https://bcorporation.uk/reinventing-business/by-b-lab-uk/how-is-the-b-corp-movement-growing-across-the-uk/
- **Evidence:** Keyword match: 7/11 words (64%)

### Only half (55%) felt they have opportunities to reduce their carbon footprint, a significant decreas

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 80% reported access to outdoor spaces like parks and footpaths.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

### 50% agreed that recycling efforts in their area were insufficient.

- **Verdict:** LINK_BROKEN
- **URL:** Not available in the provided document.
- **Evidence:** FETCH_ERROR:Error:Timed out after 90s

---
*Generated by quarterly_monitor.py on 2026-06-19 20:19*
