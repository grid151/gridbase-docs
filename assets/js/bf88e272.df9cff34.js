"use strict";(self.webpackChunkgridbase_docs=self.webpackChunkgridbase_docs||[]).push([[2390],{51209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(85893),r=n(11151);const i={},s="Connector Upgrades",c={id:"integration/resware/connector-upgrades",title:"Connector Upgrades",description:"This guide provides step-by-step instructions on how to upgrade your already installed Resware connector to a newer version. You'll need to have a few pieces of information ready before you begin:",source:"@site/docs/integration/resware/connector-upgrades.md",sourceDirName:"integration/resware",slug:"/integration/resware/connector-upgrades",permalink:"/gridbase-docs/integration/resware/connector-upgrades",draft:!1,unlisted:!1,editUrl:"https://github.com/grid151/gridbase-docs/tree/main/docs/integration/resware/connector-upgrades.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connector Installation",permalink:"/gridbase-docs/integration/resware/connector-installation"},next:{title:"SoftPro",permalink:"/gridbase-docs/integration/softpro/"}},a={},d=[{value:"Update the App Connector Site",id:"update-the-app-connector-site",level:2},{value:"Update the Web Connector Site",id:"update-the-web-connector-site",level:2},{value:"Update Stored Procedures",id:"update-stored-procedures",level:2},{value:"Verify the Upgrade",id:"verify-the-upgrade",level:2}];function l(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"connector-upgrades",children:"Connector Upgrades"}),"\n",(0,o.jsx)(t.p,{children:"This guide provides step-by-step instructions on how to upgrade your already installed Resware connector to a newer version. You'll need to have a few pieces of information ready before you begin:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"Download URL"})," - This will be provided to you by the GridBase\xae team when an upgrade is available for you to install."]}),"\n",(0,o.jsxs)(t.li,{children:["Your ",(0,o.jsx)(t.code,{children:"App Connector Directory"})," will be where you installed the app connector. You'll need to know which server and what directory on that server to use (which is typically something like ",(0,o.jsx)(t.code,{children:"C:\\inetpub\\resware-connector-app"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:["Your ",(0,o.jsx)(t.code,{children:"Web Connector Directory"})," will be where you installed the web connector. You'll need to know which server and what directory on that server to use (which is typically something like ",(0,o.jsx)(t.code,{children:"C:\\inetpub\\resware-connector-web)"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Once you have all of this information, you are ready to perform the upgrade."}),"\n",(0,o.jsx)(t.h2,{id:"update-the-app-connector-site",children:"Update the App Connector Site"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Connect to your app server"}),"\n",(0,o.jsxs)(t.li,{children:["Navigate to the ",(0,o.jsx)(t.code,{children:"Download URL"})," provided by the GridBase team and download the appropriate resware-connector-app.N.N.N.N.zip file."]}),"\n",(0,o.jsx)(t.li,{children:"Right-click on the zip file, click Properties in the menu, and then unblock the file on the bottom. Then extract the file."}),"\n",(0,o.jsx)(t.li,{children:"Stop the application pool for the app connector site."}),"\n",(0,o.jsxs)(t.li,{children:["Delete the bin folder from ",(0,o.jsx)(t.code,{children:"App Connector Directory"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Copy the new ",(0,o.jsx)(t.code,{children:"resware-connector-app\\bin"})," folder from the extracted zip file to the ",(0,o.jsx)(t.code,{children:"App Connector Directory"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Start the application pool for the app connector site."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"update-the-web-connector-site",children:"Update the Web Connector Site"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Connect to your web server"}),"\n",(0,o.jsxs)(t.li,{children:["Navigate to the ",(0,o.jsx)(t.code,{children:"Download URL"})," provided by the GridBase team and .download the resware-connector-web.N.N.N.N.zip file."]}),"\n",(0,o.jsx)(t.li,{children:"Right-click on the zip file, click Properties in the menu, and then unblock the file on the bottom. Then extract the file."}),"\n",(0,o.jsx)(t.li,{children:"Stop the application pool for the web connector site."}),"\n",(0,o.jsxs)(t.li,{children:["Delete the bin folder from the ",(0,o.jsx)(t.code,{children:"Web Connector Directory"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Copy the new ",(0,o.jsx)(t.code,{children:"resware-connector-web\\bin"})," folder from the extracted zip file to the ",(0,o.jsx)(t.code,{children:"Web Connector Directory"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Start the application pool for the web connector site."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"update-stored-procedures",children:"Update Stored Procedures"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Navigate to the ",(0,o.jsx)(t.code,{children:"Download URL"})," provided by the GridBase team. If any database-updates.zip file present, connect to your database server (or a computer which can connect to it via SSMS) and download this zip file. Otherwise if this is not present, skip to the Verify section below."]}),"\n",(0,o.jsx)(t.li,{children:"Right-click on the zip file, click Properties in the menu, and then unblock the file on the bottom. Then extract the file."}),"\n",(0,o.jsxs)(t.li,{children:["Open SQL Server Management Studio (SSMS), and select the GridBase database in object explorer. This step is ",(0,o.jsx)(t.em,{children:"very important"})," so you do not accidentally overwrite stored procedures on the Resware database!"]}),"\n",(0,o.jsx)(t.li,{children:"Apply then close each script to the GridBase database. If any errors are present, leave the tab open and send the message to the GridBase team for assistance."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"verify-the-upgrade",children:"Verify the Upgrade"}),"\n",(0,o.jsxs)(t.p,{children:["Open a browser, navigate to your web connector URL (e.g. ",(0,o.jsx)(t.code,{children:"https://gridbase.yourdomain.com/"}),') and make sure everything reports "Up" for the status summary.']})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var o=n(67294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);