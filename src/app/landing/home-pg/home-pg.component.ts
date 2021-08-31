import { Component, OnInit, TemplateRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.scss']
})
export class HomePgComponent implements OnInit {
  modalRef: BsModalRef;

  // Image caption as per worder
  imgName: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Portfolio data
  portfolio: any = [

    { logo: "/assets/icons/form.png", uCase: 'Data/ML Consulting', tech: "Azure", method: "Deep Learning", year: '2020-2021', heading: "Document Recognition", shortDes: "Delivering a solution that automatically performs QA checks on supplier forms received by EDF.", details: "EDF's quality department faced a major challenge to manually review an increased number of quality documents (received from its suppliers). Most of the errors detected in the forms they received were deemed “non-technical“ (e.g., missing signature, incorrect language, etc.) which could be automated by technology. <br/><br/> My team and I were tasked to create an AI-powered Records Review technology (front-end and back-end) to augment/supplement the existing review process by automating “non-technical“ reviews of documents given the high volume of detectable “non-technical“ errors. <br/><br/> Phase 1 of the solution the team and I are building will enable the following capabilities: <br/>  <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Automatic Language detection <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Automatic detection of blank pages <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Automatic detection of missing information<br/><br/> The introduction of our AI-powered Records Review is expected to reduce the time taken by EDF to perform document reviews, improve the efficiency of the overall review process, reduce long-term cost and improve resource time utilisation. <br/><br/> <b style='color:green !important;'> Company: </b> Électricité de France (EDF) <br/> <strong>Role:</strong> Team Management <br/> <strong>Year:</strong> 2021 <br/> <strong>Toolset:</strong> Microsoft Azure; Python; <br/> <strong>Method:</strong> Computer Vision, NLP, Deep Learning"},

    // Covid
    { logo: "/assets/icons/omni.png", uCase: 'Data/ML Consulting', tech: "AWS", method: "Machine Learning", year: '2020-2021', heading: "Omnichannel Analytics", shortDes: "Defining the analytics strategy for Takeda Pharmaceuticals to improve their customer (HCP) contact strategy.", details: "Takeda Pharmaceuticals wanted to empower its Marketing and Field Force teams via the use of omnichannel data to enhance their ability to engage/connect with Health Care Professionals (HCP’s). <br/><br/> I enabled the use of omnichannel data for Takeda by setting out the approach/strategy to . . . <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Ingest channel data (Spotme - Events, Salesforce - Email, BrightCove - Video, Google Analytics - Web, Veeva - Fieldforce) into Takeda’s AWS platform. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Define/design a flexible curation layer to enable a plethora of analytics options. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Surface/Visualise actionable data sets/insights for consumption by Takeda’s global teams. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Create and prioritise analytics use cases, ranging from channel/campaign analytics to detailed customer analytics (e.g. customer 360, segmentation, propensity modeling). <br/><br/> <strong>Company:</strong> Takeda Pharmaceuticals <br/> <strong>Role:</strong> Programme Management <br/> <strong>Year:</strong> 2021 <br/> <strong>Toolset:</strong> Amazon Web Services (AWS) "},
    { logo: "/assets/icons/framework.png", uCase: 'Data/ML Consulting', tech: "N/A", method: "Team/Community", year: '2020-2021', heading: "Data Science Framework", shortDes: "Defined a set of guiding principles and best practices for Accenture delivery teams to follow.", details: "Data Science projects do not tend to fit the usual software development life-cycle. To support project delivery teams, I defined a set of guiding questions to standardise the Data Science delivery approach. <br/><br/>  The guiding questions/principles were grouped to form 8 quality stage gates which made up the Data Science Framework. The Data Science Framework looked to ensure . . . <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Potential projects require a data science solution, the solution proposed is technically appropriate and the right team is in place to deliver it. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Teams understand the nuances of the type of data (tabular, image, text, etc.) they are working with and they have a stable/reproducible environment set up to develop machine learning solutions. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; The solution being developed is appropriate and the libraries/hardware being used are fit for purpose. <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; All key components (experimentation, testing, model, hardened code base, etc.) have been considered for moving a machine learning solution into production. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; A monitoring solution has been set up to track the models in production and a remedial response plan is in place for issue resolution. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; A clear process is in place for the smooth introduction of new/re-calibrated models into production to replace existing models. <br/><br/> The Data Science Science framework was digitised into a web portal and launched globally across Accenture for project teams to submit details against each stage for review/QA by senior Data Science leadership. <br/><br/> <strong>Company:</strong> Accenture <br/> <strong>Role:</strong> Initiative Lead <br/> <strong>Year:</strong> 2021"},
    { logo: "/assets/icons/quality4.png", uCase: 'Data/ML Consulting', tech: "AWS", method: "Team/Community", year: '2020-2021', heading: "Data Science QA", shortDes: "Providing technical QA and oversight to numerous Data Science teams at OpenReach.", details: "I provided technical guidance to teams of Data Scientists at OpenReach. The teams and I were focused on the following use cases: <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Detecting network/line failures <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Cost estimation of phone line provisions <br/><br/> As the Data Science QA on the OpenReach programme, I provided teams with support on the implementation of machine learning techniques, data engineering best practices, AWS cloud architecture design for model deployment, and model monitoring. <br/><br/> <strong>Company:</strong> OpenReach <br/>  <strong>Role:</strong> Programme Management <br/> <strong>Year:</strong> 2020 <br/> <strong>Toolset:</strong> Amazon Web Services (AWS), Python"},

    // Three UK
    { logo: "/assets/icons/team.png", uCase: 'Data/ML Consulting', tech: "N/A", method: "Team/Community", year: '2018-2019', heading: "Data Science Practice", shortDes: "Created and grew a brand new Data Science and Engineering practice at Three UK.", details: "I was asked by the Chief Digital Officer (CDO) and Director of Big Data of Three UK to become their Data Science and Engineering Practice Lead. <br><br> With the remit to influence and evangelise Data Science across the business, I grew a brand new practice consisting of a multidisciplinary team of Data Scientists, Data Engineers, and Visualisation developers. <br/><br/> Over the space of 18 months, my team and I <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Built Three UK’s first machine learning solution in production - a recommendation engine for their loyalty app, Wuntu. The solution resulted in a consistent 70% uplift in offer redemptions and a 56% increase in offer views. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Developed a bespoke data product using user location and web browsing data to support the business to make a footprint in the B2B market. The data product was leveraged as assets with the Three UK’s partners to create a new stream of revenue. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; - Developed and automated 24 Business Intelligence Tableau dashboards to enable the business to better understand the performance of their offers, marketing campaigns, data quality, customer consents/GDPR compliance, and more. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Reviewed and improved existing internal practices with respect to data (e.g. data acquisition, governance, storage, reporting, etc.) <br/><br/>  And much much more. <br/><br/> <strong>Company:</strong> Three UK <br/> <strong>Role:</strong> Team Leadership <br/> <strong>Year:</strong> 2019" }, 
    { logo: "/assets/icons/rec.png", uCase: 'Data/ML Consulting', tech: "Azure", method: "Machine Learning", year: '2018-2019', heading: "Personalisation Engine", shortDes: "Created/deployed a recommendation system for Three UK's customer loyalty app.", details: "Three UK provided a range of offers to its customers via their customer loyalty app, Wuntu. <br /><br /> I developed and deployed a recommendation engine to deliver personalised coupon offers to the users of Wuntu. In addition, I defined/implemented a measurement framework to assess the performance of the solution against key performance indicators. The results . . . <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Three UK’s first in-house ML solution <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; 70% uplift in offer redemptions <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; 56% Increase in offer views <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; 2.5x increase in offer views per user visit. <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Created 3 new follow-up ML opportunities <br/><br/> <strong>Company:</strong> Three UK <br/> <strong>Role:</strong> Individual Contributor/Team Management <br/> <strong>Year:</strong> 2019 <br/> <strong>Toolset:</strong> Microsoft Azure; Apache Spark; Python; <br/> <strong>Method:</strong> Collaborative Filtering" },
    { logo: "/assets/icons/loc.png", uCase: 'Data/ML Consulting', tech: "Azure", method: "Engineering", year: '2018-2019', heading: "User Journey Product", shortDes: "Enabling a new revenue stream for Three UK via the creation of a custom location data product.", details: "As a major mobile network, Three UK is in the unique position to obtain valuable data sources (e.g. location, web browsing, demographic, etc.) as a bi-product of their network operations. Three UK wanted to make a footprint in the B2B market, creating data products to monetise this data for various industries (retail, utility, etc.). <br/><br/> My team and I developed/automated several solutions that analysed billions of rows of location and web browsing data to create custom data products (location settle, trip, kpi, cell calibration, weblogs, etc.). <br/><br/> The solutions created ranged from using advanced geometric techniques to summarise the visit locations and context (home, work, etc.) of Three UK customers to advanced network analysis to predict the future demand for electric vehicle charging points across the UK. <br/><br/> The insights/output generated by our solutions were monetized/leveraged as assets with Three business customers/partners and resulted in a new stream of revenue (£200,000 in annual subscriptions, and £76,000 in proof-of-concepts). <br/><br/> <strong>Company:</strong> Three UK <br/> <strong>Role:</strong> Team Management, R&D <br/> <strong>Year:</strong> 2019 <br/> <strong>Toolset:</strong> Microsoft Azure; Python; Apache Spark " },
    { logo: "/assets/icons/mxnet.png", uCase: 'Data/ML Consulting', tech: "AWS", method: "Cloud", year: '2018-2019', heading: "MXNet Deep Learning Training", shortDes: "Organised a Deep Learning training course for Accentures Data Science CoE Team.", details: "Working closely with AWS, I co-organised an AWS MXNet Deep Learning Training for the UKI Data Science CoE practice. <br/><br/> The training was attended by all 9 members of the CoE, where each participant received hands-on training with MXNet as well as a theoretical review of various neural network architectures. <br/><br/> <strong>Company:</strong> Accenture, AWS <br/> <strong>Role:</strong> Initiative Lead <br/> <strong>Year:</strong> 2019" },
    { logo: "/assets/icons/engineering.png", uCase: 'Data/ML Consulting', tech: "Azure", method: "Engineering", year: '2018-2019', heading: "Data Engineering Best Practice", shortDes: "Introduced data collection, storage, and engineering best practices for Three UK.", details: "As the Data Science & Engineering Practice Lead at Three UK, my team and I introduced/implemented various data/data engineering best practices such as . . . <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Completing a thorough data quality assessment on all the data sources ingested into Three UK’s Azure platform. <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Introduced a central location (Confluence) to document all data-related details (data dictionaries, data models, etc.). <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash;  Advising the data ingestion team on best practices on ingesting big data (e.g. partitioning, incremental load, file formats, etc.). <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Updating Three UK’s existing data model and creating a curated data layer to accelerate analytics use case delivery. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Redefined the end-to-end business process for receiving, processing, and storing coupon metadata received by Three UK from merchant partners of their customer loyalty app, Wuntu. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Implemented a new categorisation solution for classifying raw web-browsing events into the industry Interactive Advertising Bureau (IAB) categories. The solution was utilised to support a wide range of analytical use cases related to B2C, B2B, and B2B2C areas. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Introduced a data quality component into discussions when the business is negotiating with potential new merchant partners being considered to be integrated into Three UK’s customer loyalty app, Wuntu. <br/><br/> <strong>Company:</strong> Three UK <br/> <strong>Role:</strong> Team Management <br/> <strong>Year:</strong> 2019 <br/> <strong>Toolset:</strong> Microsoft Azure; Python; Apache Spark" }, 
    { logo: "/assets/icons/racing-car.png", uCase: 'Data/ML Consulting', tech: "AWS", method: "Cloud", year: '2018-2019', heading: "AWS Deep Racer Competition", shortDes: "Organised Accenture's participation in the Global Deep Racer competition in London.", details: "Working closely with AWS, I co-organised an AWS Deep Racer Competition for the Global Data Science practice. As a member of the UKI Data Science practice, I ...  <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Facilitated the procurement of the cars/equipment <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Aligned all the global teams on their participation <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Marketed the competition across the organisation <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Organised training on AWS for the UKI practice <br/><br/> <center> <img src='/assets/images/portfolio/deepracer/dr-1.jpeg'> </center> <br/><br/> Overall, the competition was a huge success which was attended by over 45 participants from the UKI Data Science practice alone. Practitioners of got experience with reinforcement learning and working on AWS. One of our Data Science practitioners came in the top 2 of the competition. <br/><br/> <strong>Company:</strong> Accenture, AWS <br/> <strong>Role:</strong> Initiative Lead <br/> <strong>Year:</strong> 2019" },
    { logo: "/assets/icons/food.png", uCase: 'Data/ML Consulting', tech: "Azure", method: "Engineering", year: '2018-2019', heading: "Food Safety Ratings", shortDes: "Identifying restaurant partners with poor food safety ratings for Three UK's customer loyalty app.", details: "Three UK’s customer loyalty app, Wuntu, offers its users discounts on restaurant and dining experiences. Three UK’s digital commercial teams regularly worked closely with restaurant partners to introduce new offers into the Wuntu app. <br/><br/> The team and I created/implemented a solution to capture the food safety ratings of Three UK’s restaurant partners. The solution consisted of the combination of an API web crawler and a string matching algorithm. The extracted food ratings were visualised on a Tableau dashboard which was refreshed monthly. <br/><br/> The solution highlighted insights that allowed Wuntu Product Owners to back up honest conversations with restaurant partners about food safety standards. <br/><br/> <strong>Company:</strong> Three UK <br/> <strong>Role:</strong> Team Management <br/> <strong>Year:</strong> 2019 <br/> <strong>Toolset:</strong> Microsoft Azure; Python; <br/> <strong>Method:</strong> WebScaping" },
    { logo: "/assets/icons/diagram.png", uCase: 'Data/ML Consulting', tech: "Azure", method: "Business Intelligence", year: '2018-2019', heading: "Product Performance", shortDes: "Developed/automated BI dashboards to understand Merchant and Product Performance.", details: "My team and I developed/automated numerous Business Intelligence dashboards for Three UK. Our Tableau dashboards primarily enabled business stakeholders to better understand the performance of their customer loyalty app, Wuntu. We additionally developed dashboards for the Data Science practice to check and track data quality and models in production. <br/><br/> The Business Intelligence dashboards we enabled include ... <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash;  Loyalty App - Engagement: A dashboard visualising key metrics related to Wuntu Engagement i.e. registration, consent, tenure, activity, etc. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Loyalty App - Coupon Performance: Dashboard visualising KPIs related to coupon engagement i.e. views, redemptions, repeat redemptions, etc. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Loyalty App - Partner Performance: Dashboard visualising KPI’s related to the performance of merchants on Wuntu. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Loyalty App - Marking Campaign Performance:  Dashboard visualising KPIs related to the performance of marketing campaigns executed by the commercial and marketing teams. <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Internal - Data Quality:  Dashboard which provides data quality metrics (e.g. missing data, data skew, etc.) for the various data sources ingested into Three UK’s Azure platform. The dashboard was utilised by the Data Science and Engineering teams to check data quality to make sure downstream solutions (business dashboards, ML models, etc.) are not affected. <br/><br/> <strong>Company:</strong> Three UK <br/> <strong>Role:</strong> Team Management <br/> <strong>Year:</strong> 2019 <br/> <strong>Toolset:</strong> Microsoft Azure; Apache Spark; Tableau" },
    { logo: "/assets/icons/gdpr.png", uCase: 'Data/ML Consulting', tech: "Azure", method: "Business Intelligence", year: '2018-2019', heading: "Consent & GDPR Compliance", shortDes: "Developed/automated a BI dashboard to understand customer consents/GDPR compliance.", details: "My team and I developed/automated numerous Business Intelligence Tableau dashboards for Three UK. <br/> <br/> To keep the business in line with GDPR, we created 3 different views to report on the number of marketing consents received: <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Wuntu Loyalty App Consents <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; My 3 App Consents <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Targeted Ads Consents <br/> <br/> Each view allowed the business end-user to toggle/filter by age (Under/Over 18) for Targeted Ad purposes. The dashboard was refreshed and used daily by the business to report on the number of consents. <br/><br/> <strong>Company:</strong> Three UK <br/> <strong>Role:</strong> Team Management <br/> <strong>Year:</strong> 2019 <br/> <strong>Toolset:</strong> Microsoft Azure; Apache Spark; Tableau" },

    // Italy
    { logo: "/assets/icons/phone.png", uCase: 'Data/ML Consulting', tech: "GCP", method: "Machine Learning", year: '2017-2018', heading: "Data-Driven Marketing", shortDes: "Executed an improved customer contact strategy for Wind/Tre using Data and Machine Learning.", details: "In 2016, Wind Telecommunications and H3G merged in the Italian market to form Wind Tre. <br/><br/> From late 2017 to mid-2018, I led a large-scale programme to migrate data from legacy systems into GCP, train new customer behaviour models and execute an improved customer contact strategy for Wind Tre. <br/><br/> Leading an international team of 22+ spanning 4 geographies, the team I . . . <br/> <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Engineered a customer analytical record on GCP <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Developed propensity models to predict churn for tied and untied customers <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Developed propensity models to predict likelihood to change device <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Insight analysis on offer/treatments performance - i.e. Combination of the device, device age, device price, contract length, payment method, etc. <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Marketing campaign design and treatment/offer selection <br/><br/> The introduction of our data-driven approach (compared to the traditional approach) resulted in . . . <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; The reduction in the churn of high-risk customers by 15% <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Doubled the contract redemption rate of mobile SIM only customers <br/><br/> <strong>Company:</strong> Wind Tre <br/> <strong>Role:</strong> Programme Management <br/> <strong>Year:</strong> 2018 <br/> <strong>Toolset:</strong> Goolge Cloud Platform (GCP), Python <br/> <strong>Method:</strong> Ensemble methods (Random Forest, XGBoost) "},
    { logo: "/assets/icons/cloud.png", uCase: 'Data/ML Consulting', tech: "GCP", method: "Cloud", year: '2017-2018', heading: "GCP Cloud Migration", shortDes: "Leading an international team on a large-scale data transformation project for Wind Tre.", details: "In 2016, Wind Telecommunications and H3G merged in the Italian market to form Wind Tre. <br/><br/> From late 2017 to mid-2018, I led a large-scale data transformation programme to combine and migrate Wind and H3G’s IT infrastructure into a unified Google Cloud Platform (GCP). <br/><br/> Leading an international team of 22 spanning 4 geographies, the team I defined/enabled . . . <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; GCP Cloud Architecture <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; GCP training <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Cloud Operating Model <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Migration of data into GCP <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Financial Operating Model <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Route to live for Machine Learning <br/>&nbsp;&nbsp;&nbsp;&nbsp; &ndash; Cloud best practices <br/><br/> <strong>Company:</strong> Wind Tre <br/>  <strong>Role:</strong> Programme Management <br/> <strong>Year:</strong> 2018 <br/> <strong>Toolset:</strong> Goolge Cloud Platform (GCP)" },
    { logo: "/assets/icons/teentech.png", uCase: 'Data/ML Consulting', tech: "N/A", method: "Team/Community", year: '2016-2017', heading: "TeenTech Award", shortDes: "Introduced a new Data Science Category for the TeenTech Awards to support young people in STEM.", details: " As part of a <a href='https://www.teentech.com/teentech-awards/categories/data-science/' target='_blank'> report </a> on behalf of the Data Skills Taskforce, Accenture sponsored the launch of a Data Science Award with TeenTech - an organisation that promotes STEM careers for young people. <br/><br/> As the initiative lead within Accenture, I created the inaugural Data Science Award in 2017 which involved... <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Defining the Data Science category <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Marketing the category at TeenTech events <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Volunteering at TeenTech events <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Creating guiding material for teachers and pupils <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Providing data sets for challenges <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Organising mentors to support participating teams <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Setting the judging criteria <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Reviewing all entries and selecting winners <br/><br/> The Data Science Award continues to have strong participation every year since its launch in 2017, with students getting hands-on experience working with data and an insight into what a potential Data Science career could look like. You can learn more about the Data Science Award <a href='https://www.teentech.com/teentech-awards/categories/data-science/' target='_blank'> here </a>. <br/><br/>  <center> <img src='/assets/images/portfolio/teentech/teentech.jpeg' alt='sometext'>  <p style='font-size:5px'> <em><strong>July 2017</strong> Introducing the Data Science Award to a selection of students.</em> </p> </center>  <strong>Company:</strong> Accenture, TeenTech <br/> <strong>Role:</strong> Initiative Lead / Project Management <br/> <strong>Year:</strong> 2017" },
    { logo: "/assets/icons/cctv.png", uCase: 'Data/ML Consulting', tech: "On-Premise", method: "Deep Learning", year: '2016-2017', heading: "Computer Vision (CV)", shortDes: "Automatic Number Plate Recognition (ANPR) solution to analyse/score service station videos for Shell UK.", details: "Computer vision proof of concept for Shell UK focused on analysing service station videos. <br/><br/> Using open-source technology, I delivered a solution that provided automatic number plate recognition as well as classification of vehicle type, model, make and colour. <br/><br/> <strong>Company:</strong> Shell UK <br/> <strong>Role:</strong> Individual Contributor <br/> <strong>Year:</strong> 2017 <br/> <strong>Toolset:</strong> Python (Keras, Theano, Tensorflow, OpenCV) <br/> <strong>Method:</strong> Convolution Neural Networks" },

    // Sky
    { logo: "/assets/icons/fraud.png", uCase: 'Data/ML Consulting', tech: "On-Premise", method: "Machine Learning", year: '2016-2017', heading: "SkyGo Fraud", shortDes: "Built an automated fraud detection system to detect/prevent fraudulent use of SkyGo.", details: "The Group Technical Director for Content Protection at Sky was interested in using data to prevent/minimise the loss from content piracy for SkyGo (a sky OTT service). <br/><br/> After an initial consultation, over a 12 month period, I successfully designed, developed and deployed an end-to-end fraud solution that enabled Sky UK to identify the fraudulent use of their SkyGo service. <br/><br/> The final iteration of the solution consisted of: <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; A Hadoop data back-end. <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; An intelligence engine which utilised supervised and unsupervised learning techniques to identify fraudulent users. <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; A Tableau front-end for Sky’s Group Security team to check and review users flagged by the intelligence engine. <br/><br/> With the aim to minimise the loss from content piracy, the solution helped Sky identify fake accounts, network attacks and illegal streaming which resulted in the closure of 500+ accounts (and counting). <br/><br/> <strong>Company:</strong> Sky UK <br/> <strong>Role:</strong> Individual Contributor <br/> <strong>Year:</strong> 2016 <br/>  <strong>Toolset:</strong> Apache Hadoop and Spark Stack, Python, ElasticSearch, Kibana, Tableau, Git, Maven, Jenkin <br/> <strong>Method:</strong> K-means; Density Based Clustering; SOM " },

    // Accenture
    { logo: "/assets/icons/car.png", uCase: 'Data/ML Consulting', tech: "On-Premise", method: "Machine Learning", year: '2013-2015', heading: "Warranty Claims", shortDes: "Supported the delivery of a text classification algorithm for warranty claims received by JLR.", details: "I supported the delivery of a text classification algorithm for warranty claims received by Jaguar Land Rover (JLR). <br/> <br/> The solution is used by JLR to direct warranty claims received by the car manufacturer to the appropriate business function. <br/><br/> <strong>Company:</strong> Jaguar Land Rover (JLR) <br/> <strong>Role:</strong> Individual Contributor <br/> <strong>Year:</strong> 2015 <br/> <strong>Toolset:</strong> Python <br/> <strong>Method:</strong> Tree based Ensemble Methods" },
    { logo: "/assets/icons/talk.png", uCase: 'Data/ML Consulting', tech: "On-Premise", method: "Machine Learning", year: '2013-2015', heading: "Topic Modelling", shortDes: "Text analysis of customer claims received by Esure Car Insurance to understand common complaints.", details: "I built a Latent Dirichlet Allocation (LDA) topic model visualised on a D3.js dashboard for customer claims received by Esure car insurance. <br><br> The solution enabled Esure senior management to better understand common customer complaints/claims received through their Glasgow call centre, as well as highlighting the value of text analytics to the Insurer.	<br/><br/> <strong>Company:</strong> Esure Insurance <br/> <strong>Role:</strong> Individual Contributor <br/> <strong>Year:</strong> 2015 <br/> <strong>Toolset:</strong> R, D3.js <br/> <strong>Method:</strong> Latent Dirichlet Allocation (LDA)" },
    { logo: "/assets/icons/pie.png", uCase: 'Data/ML Consulting', tech: "SAS", method: "Business Intelligence", year: '2013-2015', heading: "SAS Business Intelligence", shortDes: "Delivered an end-to-end Business Intelligence solution for Royal Bank of Scotland (RBS).", details: "Delivered an end to end BI solution for Royal Bank of Scotland (RBS) teams to monitor the performance of their financial products. <br><br> I successfully managed an offshore team of six SAS developers to produce regular data marts, delivered seven SAS VA reports and outlined business proposals for future BI reporting. <br> <br> The SAS VA reports are used daily by the RBS Commercial and Private Banking teams to monitor product performance. <br/><br/> <strong>Company:</strong> Royal Bank of Scotland (RBS) <br/> <strong>Role:</strong> Individual Contributor <br/> <strong>Year:</strong> 2015 <br/> <strong>Toolset:</strong> SAS Enterprise Guide, SAS VA "},
    { logo: "/assets/icons/brain.png", uCase: 'Data/ML Consulting', tech: "N/A", method: "Team/Community", year: '2013-2015', heading: "Data Science CoE", shortDes: "Co-creating and leading Accenture’s UKI Data Science Center of Excellence (CoE).", details: "As the first member hired into Accenture’s UKI Data Science CoE in 2015, I oversaw the growth of the practice into a core team of 8. My responsibilities included... <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Mentoring a team of 8 Data Scientists <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Overseeing team recruitment <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Managing team project assignments <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Shaping new business proposals <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Enabling R&D and innovation prototyping <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Creating a pipeline of AI/ML projects <br/><br/> <strong>Company:</strong> Accenture <br/> <strong>Role:</strong> Team Management <br/> <strong>Year:</strong> 2015"},

    // GSK
    //{ logo: "/assets/icons/prob1.png", uCase: 'Drug', tech: "SAS", method: "Statistics", year: '2013-2015', heading: "Probability Calculations", shortDes: "Calculating the probability of failures in batches of respiratory drugs manufactured by GSK.", details: " " },
    //{ logo: "/assets/icons/rca2.png", uCase: 'Drug', tech: "SAS", method: "Statistics", year: '2013-2015', heading: "Root Cause Investigation", shortDes: "Statistically supporting manufacturing Root Cause Investigations (RCI) for GSK", details: " " },

    { logo: "/assets/icons/drug.png", uCase: 'Drug R&D', tech: "SAS", method: "Statistics", year: '2013-2015', heading: "Tablet Dissolution Profiling", shortDes: "Designing and analysing Oral Solid Dose (OSD) tablet dissolution trials for HIV drugs.", details: " I designed and analysed numerous trials to assess the dissolution profile of oral solid dose (OSD) drugs. The trials focus on comparing the dissolution profile of tablets sampled from test batches with those taken from a reference/control batch from earlier bioavailability studies. <br/><br/> <strong>Company:</strong> GlaxoSmithKline <br/> <strong>Role:</strong> Statistician, Individual Contributor <br/> <strong>Year:</strong> 2014 <br/> <strong>Toolset:</strong> SAS Base <br/> <strong>Method:</strong> Non-Linear Models; " },
    { logo: "/assets/icons/lungs.png", uCase: 'Drug R&D', tech: "SAS", method: "Statistics", year: '2013-2015', heading: "Respiratory Drug Validation", shortDes: "Designing and analysing process validation trials for new respiratory drugs.", details: "I designed and analysed numerous trials to support the product validation of new  respiratory (RSC) drugs. The trials focus on ensuring the various Fine Particle Mass measurements consistently passed the US clinical phase III specifications. <br/><br/> <strong>Company:</strong> GlaxoSmithKline <br/> <strong>Role:</strong> Statistician, Individual Contributor <br/> <strong>Year:</strong> 2014 <br/> <strong>Toolset:</strong> SAS Base <br/> <strong>Method:</strong> Binomial distribution probability calculations; Sampling Plans;  " },
    { logo: "/assets/icons/inhaler.png", uCase: 'Drug R&D', tech: "SAS", method: "Statistics", year: '2013-2015', heading: "Drug Bio-Equivalence", shortDes: "Designing and analysing drug bio-equivalence trials for respiratory devices.", details: "I designed and analysed numerous trials to assess the in vitro drug bio-equivalence between pairs of respiratory devices. The trials focus on validating the bio-equivalence between pairs of respiratory devices for various measurements (e.g. Fine Particle Mass, Emitted Dose, Coarse Particle Mass, Total Mass, etc.). <br/><br/> <strong>Company:</strong> GlaxoSmithKline <br/> <strong>Role:</strong> Statistician, Individual Contributor <br/> <strong>Year:</strong> 2014 <br/> <strong>Toolset:</strong> SAS Base <br/> <strong>Method:</strong> Population Bio-Equivalence (PBE); Two One Sided T-tests (TOST)." },

    // RBS
    { logo: "/assets/icons/bank.png", uCase: 'N/A', tech: "SAS", method: "N/A", year: '2010-2011', heading: "Channel Analytics", shortDes: "Delivered various analytics insight reports to support the Royal Bank of Scotland (RBS).", details: "As an Analytics Manager within the Channel Analytics team at the Royal Bank of Scotland (RBS), I delivered various pieces of analytics, which covered . . . <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Designing and analysing campaigns to evaluate and improve the NatWest mobile application. <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Analysing campaigns to evaluate branch and employee performance. <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Analytics support for the divestment of RBS and NatWest branches to Santander. <br/><br/> <strong>Company:</strong> Royal Bank of Scotland (RBS) <br/> <strong>Role:</strong> Analytics Manager, Individual Contributor <br/> <strong>Year:</strong> 2011 <br/> <strong>Toolset:</strong> SAS, SQL"},
    { logo: "/assets/icons/sql.png", uCase: 'N/A', tech: "On-Premise", method: "Team/Community", year: '2010-2011', heading: "Teaching SQL", shortDes: "Delivered numerous SQL training sessions for analytics teams at the Royal Bank of Scotland (RBS).", details: "I delivered numerous SQL training sessions for analytics teams at the Royal Bank of Scotland (RBS). This included... <br/><br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Creating the training material <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Developing SQL practice examples and exercises <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Organising and hosting regular training sessions <br/><br/> Over the space of 6 months, I helped 22 colleagues (existing and new joiners) up-skill in SQL programming to make use of RBS’s new Teradata platform. <br/><br/> <strong>Company:</strong> Royal Bank of Scotland (RBS) <br/> <strong>Role:</strong> Training Lead <br/> <strong>Year:</strong> 2011 <br/> <strong>Toolset:</strong> SQL"},

    // Unilever
    { logo: "/assets/icons/iced-coffee.png", uCase: 'FMCG R&D', tech: "SAS", method: "Statistics", year: '2008-2009', heading: "Iced Coffee Drinks", shortDes: "Investigating the influence of environmental factors on the temperatures of Iced Coffee drinks.",  details: "I designed and analysed a study to investigate the influence of certain environmental factors on the temperatures of a new iced coffee drink in the Italian market. The objective was to identify trends (if any) between these environmental factors that could help indicate why problems such as Shrinkage, Separation, and Icing occurred in the iced coffee drink. <br/><br/> The experiment was designed to capture/measure the temperature of iced coffee drinks from retail outlets across Italy. The severity (Green/Red rating) for the 3 issues of Shrinkage, Separation, and Icing was also captured for the iced coffee drinks sampled. The following exploratory variables were considered as part of the study: <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Cabinet Type <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Cabinet Layer <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Cabinet Position <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Cabinet Set Temp <br /><br /> My investigation uncovered a sense of confusion among retail outlets regarding the correct temperature their cabinets should be set to - the cabinets were being set at higher temperatures leading to the iced coffee drinks problems. <br /><br /> Action was taken by the business to rectify the confusion among retail outlets to ensure the iced coffee drinks were stored at an environmentally safe temperature. Follow-up studies were conducted to measure/confirm the reduction in issues faced by the iced coffee drinks. <br/><br/> <strong>Company:</strong> Unilever <br/> <strong>Role:</strong> Statistician, Individual Contributor <br/> <strong>Year:</strong> 2008 <br/> <strong>Toolset:</strong> SAS Base <br/> <strong>Method:</strong> ANOVA based Mixed Model, Logistic regression."},
    { logo: "/assets/icons/cosmetics.png", uCase: 'FMCG R&D', tech: "SAS", method: "Statistics", year: '2008-2009', heading: "Cosmetic Products", shortDes: "Exploring the relationship between the use/exposure of a number of personal care products.", details: "I designed and analysed a study to examine relationships in product exposure between individuals using a number of personal care products (e.g. Face Cream, Body Lotion, Shampoo, Tooth Paste, Lipstick, Aerosol Deodorant,  Non-Aerosol Deodorant, Mouth Rinse, Shower Gel, etc.). <br/><br/> The study required subjects to record the usage of cosmetic products over a two-week period, with the cosmetic products being weighed before/after the trial period. <br/><br/> My study uncovered evidence to suggest a potential positive relationship between the use of face cream and body lotion, and a negative relationship between the use of aerosol and non-aerosol deodorants. <br/><br/> <strong>Company:</strong> Unilever <br/> <strong>Role:</strong> Statistician, Individual Contributor <br/> <strong>Year:</strong> 2008 <br/> <strong>Toolset:</strong> SAS Base <br/> <strong>Method:</strong> Chi-Squared Test, Fishers Exact Test, Spearman’s Rank, ANOVA based Mixed Model." },
    { logo: "/assets/icons/greentea.png", uCase: 'FMCG R&D', tech: "SAS", method: "Statistics", year: '2008-2009', heading: "Green Tea", shortDes: "Investigating the impact of green tea on the human appetite for certain foods.", details: "I designed and analysed a case-control study to investigate the difference between green tea and a placebo on the human appetite for certain foods (e.g. meats, rice/breads/pasta, breakfast cereal, and dairy foods). <br/><br/> The study required subjects to rate (between 1-never and 7-more than once a day) how often they ate a certain food in a questionnaire. The subjects subsequently consumed either green tea or a placebo for a 12 week period before repeating the questionnaire. <br/><br/> For the foods in scope for this study, my investigation found little to no evidence of a  difference between the treatments in terms of tendency to increase/decrease consumption for certain foods. <br/><br/> <strong>Company:</strong> Unilever <br/> <strong>Role:</strong> Statistician, Individual Contributor <br/> <strong>Year:</strong> 2008 <br/> <strong>Toolset:</strong> SAS Base <br/> <strong>Method:</strong> Chi-Squared Test, Fishers Exact Test." },
    { logo: "/assets/icons/candy.png", uCase: 'FMCG R&D', tech: "SAS", method: "Statistics", year: '2008-2009', heading: "Profiling Sweets", shortDes: "Creating a product map of the sensory characteristics of commercial sweet products.", details: "I designed and analysed a study to produce a product map of the sensory characteristics for a set of commercial sweet products. The study required 26 trained sensory panellists to assess 20 sweet products using their own set of attributes/descriptions. <br/><br/> The sensory product map produced indicated that the 20 sweet products could be clustered/represented by three product groups and that the sensory descriptors “shiny”, “oval” and “sugar-coated” were shown to differentiate between the three product groups. <br/><br/> <strong>Company:</strong> Unilever <br/> <strong>Role:</strong> Statistician, Individual Contributor <br/> <strong>Year:</strong> 2008 <br/> <strong>Toolset:</strong> SAS Base <br/> <strong>Method:</strong> Multidimensional scaling (MDS), Ward’s hierarchical clustering."},
    { logo: "/assets/icons/mustard.png", uCase: 'FMCG R&D', tech: "SAS", method: "Statistics", year: '2008-2009', heading: "Mustard Viscosity", shortDes: "Investigating the influence of certain factors on the viscosity levels of manufactured mustard.", details: "I designed and analysed a study to investigate the influence of certain factors on the viscosity levels of manufactured mustard. The factors investigated included: <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Machine (A and B) <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Flour <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Flour age <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Batch order of flour added to the machine <br/> &nbsp;&nbsp;&nbsp;&nbsp; &ndash; Date <br/><br/>  The study found that Machine A produced significantly thicker mustard than Machine B and that there was a moderately negative correlation between the age of flour and mustard viscosity. <br/><br/> <strong>Company:</strong> Unilever <br/> <strong>Role:</strong> Statistician, Individual Contributor <br/> <strong>Year:</strong> 2008 <br/> <strong>Toolset:</strong> SAS Base <br/> <strong>Method:</strong> Kolmogorov-Smirnov test, Two-sample t-test, Chi-Squared Test."},
    { logo: "/assets/icons/icecream.png", uCase: 'FMCG R&D', tech: "SAS", method: "Statistics", year: '2008-2009', heading: "Ice-cream Pannel", shortDes: "Exploring the consensus among panellists regarding the sensory characteristics of six ice creams.", details: "I designed and analysed a study to assess if 12 panellists act in concordance as a panel regarding the sensory characteristics of six ice cream samples with the aim to understand differences (if any) between panellists and products. <br/><br/>  The study required 12 panellist to rate  (1-low, 6-high) the sensory characteristics of 6 ice cream samples using their own set of attributes/descriptions on 3 separate occasions. <br/><br/>  The study found a general consensus among panellists for the attributes “iciness”, “light-yellow colour” and “vanilla flavour”, however, three panellists provided ratings that were overall dissimilar to the rest of the group. A consensus configuration that was produced also indicated that the panellists differentiated well between four of the six ice cream samples. <br/><br/> <strong>Company:</strong> Unilever <br/> <strong> Role: </strong> Statistician, Individual Contributor <br/> <strong>Year:</strong> 2008 <br/> <strong>Toolset:</strong> SAS Base <br/> <strong>Method:</strong> Generalized Procrustes Analysis (GPA), Procrustean Analysis of Variance (PANOVA)." }

  ]

  // Some variables
  year: string = 'All';
  method: string = 'All';
  tech: string = 'All';
  uCase: string = 'All';

  fPortfolio: any;
  heading: string;
  details: string;
  logo: string;

  pEnd: number = 6;


  // Carousel Configuration for article
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20,
    lazyLoad: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  // Carousel Configuration for portfolio
  ptfOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20,
    lazyLoad: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  // Interest Image album
  album: any = [];

  constructor(
    private lightbox: Lightbox,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {

    // Interest Image list creation
    for (let i = 1; i <= 10; i++) {
      const _album = {
        src: "/assets/images/interests" + i + ".jpg",
        caption: this.imgName[i],
        thumb: "/assets/images/interests" + i + ".jpg"
      };

      this.album.push(_album)
    }

    this.pfFilter();
  }

  // Open Image popup on interest section
  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  // Close Image popup on interest section
  close(): void {
    this.lightbox.close();
  }

  // Filter Portfolio  as per Use Case
  uCFilter(uc: string) {
    this.uCase = uc;
    this.pfFilter();
  }

  // Filter Portfolio  as per Technology
  tchFilter(tch: string) {
    this.tech = tch;
    this.pfFilter();
  }

  // Filter Portfolio  as per Methods
  mtdFilter(mtd: string) {
    this.method = mtd;
    this.pfFilter();
  }

  // Filter Portfolio  as per Year
  yrFilter(yr: string) {
    this.year = yr;
    this.pfFilter();
  }

  // Filter Portfolio data as per criteria
  pfFilter() {
    this.pEnd = 6;
    this.fPortfolio = this.portfolio;
    if (this.uCase != 'All')
      this.fPortfolio = this.portfolio.filter(e => e.uCase.toLowerCase().includes(this.uCase.toLowerCase()));
    if (this.tech != 'All')
      this.fPortfolio = this.fPortfolio.filter(e => e.tech.toLowerCase().includes(this.tech.toLowerCase()));
    if (this.method != 'All')
      this.fPortfolio = this.fPortfolio.filter(e => e.method.toLowerCase().includes(this.method.toLowerCase()));
    if (this.year != 'All')
      this.fPortfolio = this.fPortfolio.filter(e => e.year.toLowerCase().includes(this.year.toLowerCase()));
  }

  // See All in portfolio section
  addMore() {
    let max = this.fPortfolio.length;
    if (max > 100)
      this.pEnd = 100;
    else
      this.pEnd = max;
  }

  // See Less in portfolio section
  rmvMore() {
    this.pEnd = 6;
  }

  // Open popup on portfolio section
  openModal(template: TemplateRef<any>, heading: string, details: string, logo: string) {
    this.modalRef = this.modalService.show(template);
    this.heading = heading;
    this.details = details;
    this.logo = logo;
  }

}
