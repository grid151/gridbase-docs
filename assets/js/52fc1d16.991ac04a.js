"use strict";(self.webpackChunkgridbase_docs=self.webpackChunkgridbase_docs||[]).push([[64],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(n),k=a,N=u["".concat(o,".").concat(k)]||u[k]||s[k]||l;return n?r.createElement(N,i(i({ref:e},m),{},{components:n})):r.createElement(N,i({ref:e},m))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5672:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={title:"Instant Decision Reports"},i="Instant Decision Reports",p={unversionedId:"integration/decision-reports/index",id:"integration/decision-reports/index",title:"Instant Decision Reports",description:'GridBase Instant Decision Reports (powered by X1 Analytics) allows lenders to close more quickly and determine the title condition (including "Clear to Close").',source:"@site/docs/integration/decision-reports/index.md",sourceDirName:"integration/decision-reports",slug:"/integration/decision-reports/",permalink:"/integration/decision-reports/",draft:!1,editUrl:"https://github.com/grid151/gridbase-samples/tree/main/docs/docs/integration/decision-reports/index.md",tags:[],version:"current",frontMatter:{title:"Instant Decision Reports"},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/integration/"},next:{title:"Postman Collection",permalink:"/integration/decision-reports/postman-collection"}},o={},d=[{value:"Step 1: Stage and Place an Order",id:"step-1-stage-and-place-an-order",level:2},{value:"Step 2: Retrieve the Report",id:"step-2-retrieve-the-report",level:2},{value:"Report Ids",id:"report-ids",level:3},{value:"Report Formats",id:"report-formats",level:3},{value:"Step 3 (optional): Order Updates or Corrections",id:"step-3-optional-order-updates-or-corrections",level:2}],m={toc:d},u="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"instant-decision-reports"},"Instant Decision Reports"),(0,a.kt)("p",null,'GridBase Instant Decision Reports (powered by X1 Analytics) allows lenders to close more quickly and determine the title condition (including "Clear to Close").'),(0,a.kt)("h1",{id:"api-guide"},"API Guide"),(0,a.kt)("p",null,"Before you begin, make sure you already have a GridBase sandbox account for development and testing purposes. You'll need to log in and acquire your access token as ",(0,a.kt)("a",{parentName:"p",href:"/"},"described in the introduction"),"."),(0,a.kt)("h2",{id:"step-1-stage-and-place-an-order"},"Step 1: Stage and Place an Order"),(0,a.kt)("p",null,"To stage a new order, submit an HTTP POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/orders/stage")," using the ",(0,a.kt)("a",{parentName:"p",href:"stage"},"stage example"),". This will return a 201 (created) response with the order object you submitted, with the order ID in the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property. Fields include:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IntegrationId")),(0,a.kt)("td",{parentName:"tr",align:null},"Integration ID"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"orderDetails.clientFileNumber")),(0,a.kt)("td",{parentName:"tr",align:null},"The client's file number (must be unique)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"orderDetails.newLoanAmount")),(0,a.kt)("td",{parentName:"tr",align:null},"The loan amount"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"orderDetails.newLoanNumber")),(0,a.kt)("td",{parentName:"tr",align:null},"A unique identifier for the new loan"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"orderDetails.cashoutAmount")),(0,a.kt)("td",{parentName:"tr",align:null},"Cashout Amount"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"orderDetails.transactionTypeDesc")),(0,a.kt)("td",{parentName:"tr",align:null},"Description of the type of transaction"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"parties.buyers[].buyerSellerTypeID")),(0,a.kt)("td",{parentName:"tr",align:null},"Type ID for buyer or seller"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"parties.buyers[].firstName")),(0,a.kt)("td",{parentName:"tr",align:null},"Buyer's First Name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"parties.buyers[].lastName")),(0,a.kt)("td",{parentName:"tr",align:null},"Buyer's Last Name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"parties.buyers[].address.street")),(0,a.kt)("td",{parentName:"tr",align:null},"Street Address of Buyer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"parties.buyers[].address.cityDesc")),(0,a.kt)("td",{parentName:"tr",align:null},"City of Buyer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"parties.buyers[].address.stateId")),(0,a.kt)("td",{parentName:"tr",align:null},"State of Buyer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"parties.buyers[].address.zip")),(0,a.kt)("td",{parentName:"tr",align:null},"Zip code of Buyer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"parties.lender.lenderId")),(0,a.kt)("td",{parentName:"tr",align:null},"ID for the lender"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"parties.lender.companyName")),(0,a.kt)("td",{parentName:"tr",align:null},"Lender Company Name"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"property.address.street")),(0,a.kt)("td",{parentName:"tr",align:null},"Property Address 1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"property.address.cityDesc")),(0,a.kt)("td",{parentName:"tr",align:null},"Property City/Locality Description"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"property.address.stateId")),(0,a.kt)("td",{parentName:"tr",align:null},"Property State"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"property.address.zip")),(0,a.kt)("td",{parentName:"tr",align:null},"Property Zip/Postal Code"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"property.propertyType")),(0,a.kt)("td",{parentName:"tr",align:null},"Type of Property"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"system")),(0,a.kt)("td",{parentName:"tr",align:null},"System being used (e.g., X1)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"product")),(0,a.kt)("td",{parentName:"tr",align:null},"Type of product (e.g., order)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,a.kt)("p",null,"Once the order is staged, you may then submit a PUT request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/orders/place/{id}")," (where ",(0,a.kt)("inlineCode",{parentName:"p"},"{id}")," is replaced with the order ID returned from the previous request). Note that order placement may take some time to complete"),(0,a.kt)("p",null,"Product Types:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"decision-report"),(0,a.kt)("td",{parentName:"tr",align:null},"For submitting a decision report")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"decision-report-resubmit"),(0,a.kt)("td",{parentName:"tr",align:null},"For resubmitting a decision report")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"decision-report-update"),(0,a.kt)("td",{parentName:"tr",align:null},"For updating a decision report")))),(0,a.kt)("p",null,"Transaction Types Supported:\n| Transaction Type | Description |\n| --- | --- |\n| 'EquityNC' | Equity - ",(0,a.kt)("strong",{parentName:"p"},"N"),"o ",(0,a.kt)("strong",{parentName:"p"},"C"),"redit pull |\n| 'EquityLV' | Equity - ",(0,a.kt)("strong",{parentName:"p"},"L"),"egal and ",(0,a.kt)("strong",{parentName:"p"},"V"),"esting |\n| 'Refinance' | Refinance |\n| 'Equity' | Equity |\n| 'EquityPR' | Equity - Property Report |"),(0,a.kt)("p",null,"Buyer/Borrower Type Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Buyer/Borrower Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Individual"),(0,a.kt)("td",{parentName:"tr",align:null},"An individual person")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Corporation"),(0,a.kt)("td",{parentName:"tr",align:null},"A corporate entity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Partnership"),(0,a.kt)("td",{parentName:"tr",align:null},"A business partnership")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LLC"),(0,a.kt)("td",{parentName:"tr",align:null},"Limited Liability Company")))),(0,a.kt)("p",null,"Property Type Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Single Family"),(0,a.kt)("td",{parentName:"tr",align:null},"Single-family home")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SFR"),(0,a.kt)("td",{parentName:"tr",align:null},"Single-family residence")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PUD"),(0,a.kt)("td",{parentName:"tr",align:null},"Planned Unit Development")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Condominium"),(0,a.kt)("td",{parentName:"tr",align:null},"Condominium")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Condo"),(0,a.kt)("td",{parentName:"tr",align:null},"Condominium (short form)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2-4 Plex"),(0,a.kt)("td",{parentName:"tr",align:null},"Property with 2-4 units")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cooperative"),(0,a.kt)("td",{parentName:"tr",align:null},"Co-op housing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unimproved"),(0,a.kt)("td",{parentName:"tr",align:null},"Unimproved land")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Vacant Land"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty land")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Multiple Family Residence"),(0,a.kt)("td",{parentName:"tr",align:null},"Property with multiple families")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Commercial"),(0,a.kt)("td",{parentName:"tr",align:null},"Commercial property")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mobile Homes"),(0,a.kt)("td",{parentName:"tr",align:null},"Mobile homes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Apartment"),(0,a.kt)("td",{parentName:"tr",align:null},"Apartment building")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Agriculture"),(0,a.kt)("td",{parentName:"tr",align:null},"Agricultural land")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Indian Land"),(0,a.kt)("td",{parentName:"tr",align:null},"Land designated as Indian land")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Leased Land"),(0,a.kt)("td",{parentName:"tr",align:null},"Land that is leased")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gov't Land"),(0,a.kt)("td",{parentName:"tr",align:null},"Government-owned land")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Other"),(0,a.kt)("td",{parentName:"tr",align:null},"Other types of property")))),(0,a.kt)("h2",{id:"step-2-retrieve-the-report"},"Step 2: Retrieve the Report"),(0,a.kt)("p",null,"Once order placement has completed, you may submit a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/core/reports/generate")," with the following request body to generate a report:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "orderId": "{id}",\n  "reportId": "6324d73af55f885d0d71b6a4",\n  "reportFormat": "pdf"\n}\n')),(0,a.kt)("h3",{id:"report-ids"},"Report Ids"),(0,a.kt)("p",null,"Different types of reports may be generated by passing the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"ReportId")," value, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"6324d73af55f885d0d71b6a4")," - Lender Decision Report"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"6324d851f55f885d0d71b6a9")," - Title Decision Report")),(0,a.kt)("h3",{id:"report-formats"},"Report Formats"),(0,a.kt)("p",null,"Supported formats include ",(0,a.kt)("inlineCode",{parentName:"p"},"pdf")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"xml"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xml")," - provides raw report data as an XML document, which may be used to implement process automation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pdf")," - provides a pre-formatted, print-friendly PDF document.")),(0,a.kt)("h2",{id:"step-3-optional-order-updates-or-corrections"},"Step 3 (optional): Order Updates or Corrections"),(0,a.kt)("p",null,"To update an existing order, submit an HTTP POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/orders/update")," using the ",(0,a.kt)("a",{parentName:"p",href:"update"},"example request")," where the main difference between the stage is the ID field is populated. This will return a 200 (successful) response with the order object you submitted."),(0,a.kt)("p",null,"Once the order has been updated, you may then submit a PUT request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/v1/orders/place/{id}")," (where ",(0,a.kt)("inlineCode",{parentName:"p"},"{id}")," is the order ID). Note that order placement may take some time to complete"),(0,a.kt)("p",null,"Finally step 2 can be repeated for an updated report."))}s.isMDXComponent=!0}}]);