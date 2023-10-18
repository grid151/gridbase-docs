"use strict";(self.webpackChunkgridbase_docs=self.webpackChunkgridbase_docs||[]).push([[386],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>p});var l=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,l,r=function(n,e){if(null==n)return{};var t,l,r={},a=Object.keys(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(l=0;l<a.length;l++)t=a[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=l.createContext({}),u=function(n){var e=l.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},d=function(n){var e=u(n.components);return l.createElement(s.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,s=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),c=u(t),y=r,p=c["".concat(s,".").concat(y)]||c[y]||m[y]||a;return t?l.createElement(p,o(o({ref:e},d),{},{components:t})):l.createElement(p,o({ref:e},d))}));function p(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,o=new Array(a);o[0]=y;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i[c]="string"==typeof n?n:r,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2165:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=t(7462),r=(t(7294),t(3905));const a={title:"Order"},o=void 0,i={unversionedId:"integration/softpro/order",id:"integration/softpro/order",title:"Order",description:"",source:"@site/docs/integration/softpro/order.md",sourceDirName:"integration/softpro",slug:"/integration/softpro/order",permalink:"/integration/softpro/order",draft:!1,editUrl:"https://github.com/grid151/gridbase-samples/tree/main/docs/docs/integration/softpro/order.md",tags:[],version:"current",frontMatter:{title:"Order"},sidebar:"tutorialSidebar",previous:{title:"Document",permalink:"/integration/softpro/document"},next:{title:"Sample Requests",permalink:"/sample-requests/"}},s={},u=[],d={toc:u},c="wrapper";function m(n){let{components:e,...t}=n;return(0,r.kt)(c,(0,l.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='document.json'",title:"'document.json'"},'{\n  "DestinationIntegrationId": "63da-------------------4df",\n  "SourceIntegrationId": "63d---------------------74df",\n  "Note": "March 3rd Loan Data Another One",\n  "Notes": [],\n  "Documents": [],\n  "OrderDetails": {\n    "ClientFileNumber": "imamu-test-03032023_04",\n    "EstimatedSettlementDate": "2023-11-17T05:00:00.000Z",\n    "NewLoanAmount": "850000.00",\n    "ProductTypeDesc": "Escrow only",\n    "SalesPrice": "75000.0",\n    "TransactionTypeDesc": "Escrow only"\n  },\n  "Parties": {\n    "Buyers": [\n      {\n        "Address": {\n          "FullAddress": null,\n          "CityDesc": "Clarks Summit",\n          "CityId": null,\n          "CountyDesc": null,\n          "CountyId": null,\n          "Direction": null,\n          "IsPropertyAddress": false,\n          "LandAcreage": null,\n          "Number": null,\n          "StateId": "PA",\n          "Street": "2 Cheryl lane",\n          "StreetLine2": null,\n          "StreetName": null,\n          "Suffix": null,\n          "Unit": null,\n          "Zip": "18411"\n        },\n        "BusinessName": "Dennis Macheska",\n        "BuyerSellerType": null,\n        "BuyerSellerTypeID": 1,\n        "Email": "test@gmail.com",\n        "FirstName": "Dennis",\n        "IsPrimary": false,\n        "IsSameAsPropertyAddress": null,\n        "IsValidated": false,\n        "LastName": "Macheska",\n        "MaritalStatus": null,\n        "MiddleName": null,\n        "Phone": "123-456-7890",\n        "Prefix": null,\n        "SocialSecurityNumber": "444-44-4444",\n        "SourceBuyerSellerID": null,\n        "Spouse": {\n          "FirstName": "Angel",\n          "LastName": "Perez",\n          "MiddleName": null,\n          "Prefix": null,\n          "SocialSecurityNumber": "111-11-1111",\n          "Suffix": null\n        },\n        "Suffix": null,\n        "TaxId": null\n      },\n      {\n        "Address": {\n          "FullAddress": null,\n          "CityDesc": "Clarks Summit",\n          "CityId": null,\n          "CountyDesc": null,\n          "CountyId": null,\n          "Direction": null,\n          "IsPropertyAddress": false,\n          "LandAcreage": null,\n          "Number": null,\n          "StateId": "PA",\n          "Street": "2 Cheryl lane",\n          "StreetLine2": null,\n          "StreetName": null,\n          "Suffix": null,\n          "Unit": null,\n          "Zip": "18411"\n        },\n        "BusinessName": "Cheryl Macheska",\n        "BuyerSellerType": null,\n        "BuyerSellerTypeID": 1,\n        "Email": "test1@gmail.com",\n        "FirstName": "Cheryl",\n        "IsPrimary": false,\n        "IsSameAsPropertyAddress": null,\n        "IsValidated": false,\n        "LastName": "Macheska",\n        "MaritalStatus": null,\n        "MiddleName": null,\n        "Phone": "123-456-7890",\n        "Prefix": null,\n        "SocialSecurityNumber": "111-11-1111",\n        "SourceBuyerSellerID": null,\n        "Spouse": {\n          "FirstName": "Mike",\n          "LastName": "Dean",\n          "MiddleName": null,\n          "Prefix": null,\n          "SocialSecurityNumber": "111-11-2222",\n          "Suffix": null\n        },\n        "Suffix": null,\n        "TaxId": null\n      }\n    ],\n    "IsSectionStarted": false,\n    "IsValidated": false,\n    "Lender": {\n      "PartyTypeId": 3,\n      "Address": {\n        "FullAddress": null,\n        "CityDesc": "Charlotte",\n        "CityId": null,\n        "CountyDesc": null,\n        "CountyId": null,\n        "Direction": null,\n        "IsPropertyAddress": false,\n        "LandAcreage": null,\n        "Number": null,\n        "StateId": "NC",\n        "Street": "4064 Colony Rd. Morrocroft 2",\n        "StreetLine2": null,\n        "StreetName": null,\n        "Suffix": null,\n        "Unit": "Floor 2",\n        "Zip": "28211"\n      },\n      "CompanyName": "Some lender company",\n      "ContactName": "Jay Mmkay",\n      "Email": "jmmkay@somelender.com",\n      "IsValidated": false,\n      "Phone": "980-399-6605"\n    },\n    "ListingAgent": {\n      "PartyTypeId": 15,\n      "Address": null,\n      "CompanyName": null,\n      "ContactName": null,\n      "Email": null,\n      "IsValidated": false,\n      "Phone": null\n    },\n    "SettlementAgent": {\n      "PartyTypeId": 23,\n      "Address": {\n        "FullAddress": null,\n        "CityDesc": "Charlotte",\n        "CityId": null,\n        "CountyDesc": null,\n        "CountyId": null,\n        "Direction": null,\n        "IsPropertyAddress": false,\n        "LandAcreage": null,\n        "Number": null,\n        "StateId": "NC",\n        "Street": "4064 Colony Rd. Morrocroft 2",\n        "StreetLine2": null,\n        "StreetName": null,\n        "Suffix": null,\n        "Unit": "Floor 2",\n        "Zip": "28211"\n      },\n      "CompanyName": null,\n      "ContactName": "Mansa Musa",\n      "Email": null,\n      "IsValidated": false,\n      "Phone": null\n    },\n    "MortgageBroker": null,\n    "SecondLender": null,\n    "Sellers": [],\n    "SellingAgent": {\n      "PartyTypeId": 14,\n      "Address": {\n        "FullAddress": null,\n        "CityDesc": "Orlando",\n        "CityId": null,\n        "CountyDesc": null,\n        "CountyId": null,\n        "Direction": null,\n        "IsPropertyAddress": false,\n        "LandAcreage": null,\n        "Number": null,\n        "StateId": "FL",\n        "Street": "6433 Haughton Lane",\n        "StreetLine2": null,\n        "StreetName": null,\n        "Suffix": null,\n        "Unit": null,\n        "Zip": "32835"\n      },\n      "CompanyName": null,\n      "ContactName": "Walt Disney",\n      "Email": null,\n      "IsValidated": false,\n      "Phone": null\n    }\n  },\n  "Partners": null,\n  "Property": {\n    "Address": {\n      "FullAddress": "2 Cheryl Lane, Clarks Summit, PA",\n      "CityDesc": "Clarks Summit",\n      "CityId": null,\n      "CountyDesc": "Lackawanna",\n      "CountyId": null,\n      "Direction": null,\n      "IsPropertyAddress": true,\n      "LandAcreage": "Lot 42, Block 3, of North Lakes Subdivision #1, according to map or plat thereof as recorded in Plat Book 62, Page 9, of the Public Records of Philadelphia, Pennsylvania",\n      "Number": "2",\n      "StateId": "PA",\n      "Street": "2 Cheryl Lane",\n      "StreetLine2": null,\n      "StreetName": "Cheryl Ln",\n      "Suffix": null,\n      "Unit": "",\n      "Zip": "18411",\n      "Parcel": "Test Box",\n      "Lot": "Lot 42",\n      "Block": "3",\n      "Subdivision": "North Lakes"\n    },\n    "IsKeyboxInfo": false,\n    "IsSectionStarted": false,\n    "IsUnincorporated": false,\n    "IsValidated": false,\n    "KeyboxInfo": null,\n    "PropertyType": "Single Family",\n    "PropertyUse": "Residential"\n  },\n  "ModifiedBy": "",\n  "System": "Softpro",\n  "Product": "order",\n  "Milestones": null\n}\n')))}m.isMDXComponent=!0}}]);