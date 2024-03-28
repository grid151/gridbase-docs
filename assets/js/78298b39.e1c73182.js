"use strict";(self.webpackChunkgridbase_docs=self.webpackChunkgridbase_docs||[]).push([[4950],{89575:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=s(85893),t=s(11151);const i={title:"Connector Installation"},d="Resware Connector Installation Guide",l={id:"integration/resware/connector-installation",title:"Connector Installation",description:"GridBase achieves its rich integration with Resware through its connector. This guide steps you through the process of",source:"@site/docs/integration/resware/connector-installation.md",sourceDirName:"integration/resware",slug:"/integration/resware/connector-installation",permalink:"/gridbase-docs/integration/resware/connector-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/grid151/gridbase-docs/tree/main/docs/integration/resware/connector-installation.md",tags:[],version:"current",frontMatter:{title:"Connector Installation"},sidebar:"tutorialSidebar",previous:{title:"Resware",permalink:"/gridbase-docs/integration/resware/"},next:{title:"Connector Upgrades",permalink:"/gridbase-docs/integration/resware/connector-upgrades"}},o={},a=[{value:"Simple",id:"simple",level:2},{value:"High-Availability Configurations",id:"high-availability-configurations",level:2},{value:"Database Login and User",id:"database-login-and-user",level:2},{value:"Stored Procedure Execute Privilege",id:"stored-procedure-execute-privilege",level:3},{value:"Resware Database Table Permissions",id:"resware-database-table-permissions",level:3},{value:"Install Stored Procedures",id:"install-stored-procedures",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"resware-connector-installation-guide",children:"Resware Connector Installation Guide"}),"\n",(0,r.jsx)(n.p,{children:"GridBase achieves its rich integration with Resware through its connector. This guide steps you through the process of\ninstalling this Resware Connector in your organization's Resware environment."}),"\n",(0,r.jsx)(n.h1,{id:"recommended-tools",children:"Recommended Tools"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A source code / text editor, such as Notepad++, Visual Studio Code, etc..."}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"system-requirements",children:"System Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"2 Processor Cores or vCPUs minimum (4 or better recommended)"}),"\n",(0,r.jsx)(n.li,{children:"4GB RAM minimum (8GB or better recommended)"}),"\n",(0,r.jsxs)(n.li,{children:["Windows Server 2019 or later","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Internet Information Systems (IIS)"}),"\n",(0,r.jsxs)(n.li,{children:["Valid TLS/SSL certificates ",(0,r.jsx)(n.strong,{children:"signed by a trusted Certificate Authority (CA)"})," must be present and configured for\nResware servers and each Connector server."]}),"\n",(0,r.jsx)(n.li,{children:"Resware Web Servers must support TLS 1.2, and configured to allow a cipher-chain supported by the version of\nWindows Server being used by the connector servers."}),"\n",(0,r.jsx)(n.li,{children:"Connector servers must support TLS 1.2 and optionally higher versions as well. Earlier versions of TLS and SSL\nhandshake protocols must be disabled."}),"\n",(0,r.jsx)(n.li,{children:"HTTP Strict Transport Security (HSTS) headers must be configured on Connector servers."}),"\n",(0,r.jsx)(n.li,{children:"Any public DNS records created for Connector servers should include CAA records to restrict TLS/SSL certificate\nissuance to approved Certificate Authorities."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Microsoft SQL Server (MSSQL) 2019 or later","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SQL Server Management Studio (SSMS)"}),"\n",(0,r.jsx)(n.li,{children:"On the same MSSQL server and instance where the Resware database resides, a GridBase database must also be created. (Additional configuration steps are below.)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"planning",children:"Planning"}),"\n",(0,r.jsx)(n.p,{children:"The infrastructure used to host Resware and this Connector should be designed to leverage layers of segmentation to\nminimize web-facing attack surface. The required traffic patterns are as follows:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The Connector Web Server must be able to receive inbound https requests from Resware's Web Server and\nGridBase (",(0,r.jsx)(n.a,{href:"https://app.gridbase.io",children:"https://app.gridbase.io"}),"); and it must be able to make outbound https requests to Resware's Web Server,\nGridBase, Grafana, and AWS S3 resources."]}),"\n",(0,r.jsxs)(n.li,{children:["The Connector App Server must ",(0,r.jsx)(n.strong,{children:"only"})," receive inbound https requests from the Connector Web Server; and it must be\nable to make outbound requests to Resware's Web Server (https), the Connector's Web Server (https), and to the Resware\ndatabase server (mssql). The Connector App Server must have access to the SMB/Windows File Share(s) used by Resware."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"simple",children:"Simple"}),"\n",(0,r.jsx)(n.mermaid,{value:'flowchart LR\n    g1["GridBase"] --\x3e n0[Your Network] --\x3e d0[DMZ];\n    lan1["LAN segment A"];\n    lan2["LAN segment B"];\n    rw1["Resware Web Server"] --\x3e lan1 --\x3e rw2["Resware App Server"] --\x3e lan2 --\x3e rw3["Resware Database"];\n    n1["Connector Web Server"] --\x3e lan1 --\x3e n2["Connector App Server"] --\x3e lan2 --\x3e rw3;\n    d0 --\x3e n1;\n    d0 --\x3e rw1;'}),"\n",(0,r.jsx)(n.h2,{id:"high-availability-configurations",children:"High-Availability Configurations"}),"\n",(0,r.jsx)(n.p,{children:"The Resware Connector includes support for load balancers / reverse HTTP proxies, with no requirement for session\npersistence / stickiness. The only recommendation in this setting is to include the original source IP address in the\nX-Forwarded-For HTTP header in the load balancer's configuration. Additionally, it is strongly advised that this\nheader's value is included in web server (IIS) logs."}),"\n",(0,r.jsx)(n.mermaid,{value:'flowchart LR\n    g1[GridBase] --\x3e n0["Your Network"] --\x3e d0[DMZ] --\x3e lb1["Load Balancer"];\n    lan1["LAN segment A"];\n    lan2["LAN segment B"];\n    rw1["Resware Web Server"] --\x3e lan1 --\x3e rw2["Resware App Server"] --\x3e lan2 --\x3e rw3["Resware Database"];\n    n1["Connector Web Servers"] --\x3e lan1 --\x3e lb2["Load Balancer"] --\x3e n2["Connector App Servers"] --\x3e lan2 --\x3e rw3;\n    lb1 --\x3e n1;\n    d0 --\x3e rw1;'}),"\n",(0,r.jsx)(n.h1,{id:"web-server-configuration",children:"Web Server Configuration"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"NOTE: This configuration applies to both the web connector server and the app connector server."})}),"\n",(0,r.jsxs)(n.p,{children:["In Windows Server, open the Server Manager application and click ",(0,r.jsx)(n.strong,{children:"Add roles and features"}),". Click ",(0,r.jsx)(n.strong,{children:"Next"})," until you\nreach the ",(0,r.jsx)(n.strong,{children:"Server Roles"})," screen, expand the ",(0,r.jsx)(n.strong,{children:"Web Server"})," role, and make sure the following options:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Web Server","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Common Http Features","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Default Document"}),"\n",(0,r.jsx)(n.li,{children:"HTTP Errors"}),"\n",(0,r.jsx)(n.li,{children:"Static Content"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Health and Diagnostics","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTP Logging"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Performance","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static Content Compression"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Security","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Request Filtering"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Application Development","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:".NET Extensibility 4.7"}),"\n",(0,r.jsx)(n.li,{children:"Application Initialization"}),"\n",(0,r.jsx)(n.li,{children:"ISAPI Extensions"}),"\n",(0,r.jsx)(n.li,{children:"ISAPI Filters"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Management Tools","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"IIS Management Console"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When done, click ",(0,r.jsx)(n.strong,{children:"Next"})," to progress to the ",(0,r.jsx)(n.strong,{children:"Features"})," screen, and make sure the following options are selected:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[".NET Framework 4.7 Features","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:".NET Framework 4.7"}),"\n",(0,r.jsx)(n.li,{children:"ASP.NET 4.7"}),"\n",(0,r.jsxs)(n.li,{children:["WCF Services","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"HTTP Activation"}),"\n",(0,r.jsx)(n.li,{children:"TCP Port Sharing"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When done updating these selections, finish the wizard steps to apply the changes. Note that this may require Internet\nconnectivity to complete."}),"\n",(0,r.jsx)(n.h1,{id:"database-setup",children:"Database Setup"}),"\n",(0,r.jsx)(n.p,{children:"The Resware Connector for GridBase requires a database residing adjacent to the Resware database. This minimalist\ndatabase includes copies of Resware stored procedures it relies upon and some custom stored procedures as well. Your\norganization's Database Administrators (DBAs) can freely review these stored procedures (and compare many against\nstandard Resware stored procedures) as needed."}),"\n",(0,r.jsx)(n.h2,{id:"database-login-and-user",children:"Database Login and User"}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"BACKUP YOUR DATABASES!"})}),(0,r.jsx)(n.p,{children:"Before you begin installing or upgrading Resware or the Resware Connector, always take a full backup of existing Resware\nand GridBase databases as a precaution before you begin."})]}),"\n",(0,r.jsx)(n.p,{children:"The first step is to determine whether your configuration will use a SQL Login or a Windows Login to log in to the\ndatabase server to perform queries. Once the Login is configured in SQL Server, you will need to create the database and\nadd this login as a database user. This user will need permissions to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Execute stored procedures on the GridBase database ",(0,r.jsx)(n.strong,{children:"and"})," on the Resware database."]}),"\n",(0,r.jsx)(n.li,{children:"Configure Resware database permissions as specified below..."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"stored-procedure-execute-privilege",children:"Stored Procedure Execute Privilege"}),"\n",(0,r.jsx)(n.p,{children:"Ths simplest way to grant GridBase the necessary execute priveleges is to create a role as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE ROLE dbGridBaseExec\nGRANT EXECUTE ON SCHEMA::dbo to dbGridBaseExec\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Once done, you can apply the role to mapped user on each (",(0,r.jsx)(n.code,{children:"Resware"})," and ",(0,r.jsx)(n.code,{children:"GridBase"}),") database."]}),"\n",(0,r.jsx)(n.h3,{id:"resware-database-table-permissions",children:"Resware Database Table Permissions"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Table Name"}),(0,r.jsx)(n.th,{children:"Select"}),(0,r.jsx)(n.th,{children:"Insert"}),(0,r.jsx)(n.th,{children:"Update"}),(0,r.jsx)(n.th,{children:"Delete"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"All Other Tables (*)"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BuyerSeller"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ClosingDisclosureCommonSettlement"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CommonSettlement"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FileActionDocumentRel"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FileActionNoteRel"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FileActions"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FileMain"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FilePartnerRemoteFile"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FinancialInfo"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"GeneralUser"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PolicyCurative"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PolicyCurativeDocumentRel"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PolicyCurativeNoteRel"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Signing"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SigningDocumentRel"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SigningNotaryFeesRel"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SigningPartyRel"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TitleReview"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TitleReviewDocumentRel"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TitleReviewNoteRel"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UserRole"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["You can also apply these more strict permissions using the script below as a template (and replace ",(0,r.jsx)(n.code,{children:"[user]"})," with the actual name of the mapped database user)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"USE GridBase\nGRANT SELECT,INSERT,UPDATE,DELETE ON SCHEMA::dbo TO [user]\nGO\n\nUSE Resware\nGRANT SELECT ON SCHEMA::dbo TO [user]\nGRANT SELECT,INSERT,UPDATE ON dbo.BuyerSeller TO [user]\nGRANT SELECT,INSERT ON dbo.ClosingDisclosureCommonSettlement TO [user]\nGRANT SELECT,INSERT,UPDATE ON dbo.CommonSettlement TO [user]\nGRANT SELECT,INSERT ON dbo.FileActionDocumentRel TO [user]\nGRANT SELECT,INSERT,UPDATE ON dbo.FileActionNoteRel TO [user]\nGRANT SELECT,INSERT,UPDATE ON dbo.FileActions TO [user]\nGRANT SELECT,UPDATE ON dbo.FileMain TO [user]\nGRANT SELECT,INSERT ON dbo.FilePartnerRemoteFile TO [user]\nGRANT SELECT,INSERT,UPDATE ON dbo.FinancialInfo TO [user]\nGRANT SELECT,UPDATE ON dbo.GeneralUser TO [user]\nGRANT SELECT,UPDATE ON dbo.PolicyCurative TO [user]\nGRANT SELECT,INSERT ON dbo.PolicyCurativeDocumentRel TO [user]\nGRANT SELECT,INSERT ON dbo.PolicyCurativeNoteRel TO [user]\nGRANT SELECT,INSERT,UPDATE,DELETE ON dbo.Signing TO [user]\nGRANT SELECT,INSERT ON dbo.SigningDocumentRel TO [user]\nGRANT SELECT,INSERT,UPDATE ON dbo.SigningNotaryFeesRel TO [user]\nGRANT SELECT,INSERT,UPDATE,DELETE ON dbo.SigningPartyRel TO [user]\nGRANT SELECT,UPDATE ON dbo.TitleReview TO [user]\nGRANT SELECT,INSERT ON dbo.TitleReviewDocumentRel TO [user]\nGRANT SELECT,INSERT ON dbo.TitleReviewNoteRel TO [user]\nGRANT SELECT,INSERT ON dbo.UserRole TO [user]\nGO\n"})}),"\n",(0,r.jsx)(n.h2,{id:"install-stored-procedures",children:"Install Stored Procedures"}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"IMPORTANT:"})," Do not apply/execute these scripts in the Resware database!"]}),(0,r.jsxs)(n.p,{children:["Before you begin, make sure any desired review of the stored procedures scripts has been completed by a Database\nAdministrator (DBA). If the Resware database is not named ",(0,r.jsx)(n.code,{children:"Resware"}),", the DBA will need to update the stored procedures\nto reference ",(0,r.jsx)(n.code,{children:"YourReswareDatabaseName.dbo"})," instead of the default ",(0,r.jsx)(n.code,{children:"Resware.dbo"})," resources."]})]}),"\n",(0,r.jsxs)(n.p,{children:["Once review is complete, the DBA will need to apply/execute each of the stored procedure scripts (using a tool like SQL\nServer Management Studio [SSMS]) included with this package in the ",(0,r.jsx)(n.code,{children:"GridBase"})," database."]}),"\n",(0,r.jsx)(n.h1,{id:"app-server-installation",children:"App Server Installation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Extract the contents of the gridbase-app-connector.zip file to the desired directory for the web site that will run on\nthe app server."}),"\n",(0,r.jsxs)(n.li,{children:["Copy the ",(0,r.jsx)(n.code,{children:"AppServer_Web.config"})," file to the web site's root directory, rename it to ",(0,r.jsx)(n.code,{children:"web.config"}),", and update its\ncontents as follows:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Update the ",(0,r.jsx)(n.code,{children:"ConnectorApiLogPath"})," to point to a directory where log files can be created by the IIS_USRS group.\nMake sure this resides in a drive with plenty of spare disk space, and make sure old logs files are periodically\npurged to maintain disk usage."]}),"\n",(0,r.jsxs)(n.li,{children:["Update all instances of ",(0,r.jsx)(n.code,{children:"[web-sever-fqdn]"})," text with the fully-qualified domain name (FQDN) configured for the\nconnector's web server."]}),"\n",(0,r.jsxs)(n.li,{children:["Update all instances of ",(0,r.jsx)(n.code,{children:"[resware-fqdn]"})," text with the fully-qualified domain name (FQDN) of the Resware web\nserver (where the Resware portal, WCF services, and REST APIs reside)."]}),"\n",(0,r.jsxs)(n.li,{children:["Update the remaining, empty values in the ",(0,r.jsx)(n.code,{children:"appSettings"})," section with the values provided the GridBase team."]}),"\n",(0,r.jsxs)(n.li,{children:["Update the ",(0,r.jsx)(n.code,{children:"connectionStrings"})," section to point at your database server for both Resware and GridBase databases."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Open IIS Manager on the app server..."}),"\n",(0,r.jsxs)(n.li,{children:["Expand the server on the left and click ",(0,r.jsx)(n.strong,{children:"Application Pools"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Add Application Pool"})," on the right. Enter a name of your choosing, set the ",(0,r.jsx)(n.strong,{children:".NET CLR Version"})," to ",(0,r.jsx)(n.strong,{children:".NET\nCLR Version 4.0..."})," and set the ",(0,r.jsx)(n.strong,{children:"Managed pipeline mode"})," to ",(0,r.jsx)(n.strong,{children:"Integrated"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If you are using a Windows Login for the database user:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Select the Application Pool you just created, and click ",(0,r.jsx)(n.strong,{children:"Advanced Settings..."})," on the right."]}),"\n",(0,r.jsxs)(n.li,{children:["Under the ",(0,r.jsx)(n.strong,{children:"Process Model"})," section, set the ",(0,r.jsx)(n.strong,{children:"Load User Profile"})," setting to ",(0,r.jsx)(n.strong,{children:"False"}),". Then click the * *[...]** button, select ",(0,r.jsx)(n.strong,{children:"Custom account"}),", click the ",(0,r.jsx)(n.strong,{children:"Set..."})," button, enter the credentials for the\nWindows/Active Directory user, click **OK** on all 3 dialogs to apply the changes."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Expand the ",(0,r.jsx)(n.strong,{children:"Sites"})," folder on the left in IIS Manager","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To add a new web site, right-click the ",(0,r.jsx)(n.strong,{children:"Sites"})," folder on the left and click ",(0,r.jsx)(n.strong,{children:"Add Website"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set the site name as desired (typically the fully qualified domain name / FQDN)."}),"\n",(0,r.jsx)(n.li,{children:"Select the Application Pool created above."}),"\n",(0,r.jsxs)(n.li,{children:["Set the ",(0,r.jsx)(n.strong,{children:"Physical path"})," to the directory where you extracted the gridbase-app-connector.zip files."]}),"\n",(0,r.jsxs)(n.li,{children:["Under binding, set the ",(0,r.jsx)(n.strong,{children:"Type"})," to ",(0,r.jsx)(n.strong,{children:"https"}),", set the IP Address and host name if/as needed (based on whether\nyou wish to use SNI or a dedicated IP address for the SSL certificate)."]}),"\n",(0,r.jsxs)(n.li,{children:["Select the valid SSL certificate, and then click ",(0,r.jsx)(n.strong,{children:"OK"})," to start the site."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["To configure an existing web site (such as the Default Web Site), select the web site on the left...","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Basic Settings..."})," on the right...","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Select the Application Pool created above."}),"\n",(0,r.jsxs)(n.li,{children:["Set the ",(0,r.jsx)(n.strong,{children:"Physical path"})," to the directory where you extracted the gridbase-app-connector.zip files."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Bindings..."})," on the right. If any bindings exist (other than the http binding for any (*) IP Address\nfor the default web site created when IIS is installed), you may want to consider adding a new web site\ninstead, as updating this configuration would replace any existing web site configured here.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Add..."})]}),"\n",(0,r.jsxs)(n.li,{children:["Under binding, set the ",(0,r.jsx)(n.strong,{children:"Type"})," to ",(0,r.jsx)(n.strong,{children:"https"}),", set the IP Address and host name if/as needed (based on\nwhether you wish to use SNI or a dedicated IP address for the SSL certificate)."]}),"\n",(0,r.jsxs)(n.li,{children:["Select the valid SSL certificate, and then click ",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If any ",(0,r.jsx)(n.strong,{children:"http"})," bindings are configured, select and ",(0,r.jsx)(n.strong,{children:"Remove"})," them."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Navigate to the web site you configured in a web browser, and make sure you see the ",(0,r.jsx)(n.strong,{children:"GridBase Resware Connector (\nApp)"})," page."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"web-server-installation",children:"Web Server Installation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Extract the contents of the gridbase-web-connector.zip file to the desired directory for the web site that will run on\nthe app server."}),"\n",(0,r.jsxs)(n.li,{children:["Copy the ",(0,r.jsx)(n.code,{children:"WebServer_Web.config"})," file to the web site's root directory, rename it to ",(0,r.jsx)(n.code,{children:"web.config"}),", and update its\ncontents as follows:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Update the ",(0,r.jsx)(n.code,{children:"ConnectorApiLogPath"})," to point to a directory where log files can be created by the IIS_USRS group.\nMake sure this resides in a drive with plenty of spare disk space, and make sure old logs files are periodically\npurged to maintain disk usage."]}),"\n",(0,r.jsxs)(n.li,{children:["Update the remaining, empty values in the ",(0,r.jsx)(n.code,{children:"appSettings"})," section with the values provided the GridBase team."]}),"\n",(0,r.jsxs)(n.li,{children:["Update all instances of ",(0,r.jsx)(n.code,{children:"[app-sever-fqdn]"})," text with the fully-qualified domain name (FQDN) configured for the\nconnector's app server."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Open IIS Manager on the app server..."}),"\n",(0,r.jsxs)(n.li,{children:["Expand the server on the left and click ",(0,r.jsx)(n.strong,{children:"Application Pools"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Add Application Pool"})," on the right. Enter a name of your choosing, set the ",(0,r.jsx)(n.strong,{children:".NET CLR Version"})," to ",(0,r.jsx)(n.strong,{children:".NET\nCLR Version 4.0..."})," and set the ",(0,r.jsx)(n.strong,{children:"Managed pipeline mode"})," to ",(0,r.jsx)(n.strong,{children:"Integrated"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Note that this application should always be configured to use Application Pool Identity (which is the default for\nIIS), as it should not be able to reach the database server directly."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Expand the ",(0,r.jsx)(n.strong,{children:"Sites"})," folder on the left in IIS Manager","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To add a new web site, right-click the ",(0,r.jsx)(n.strong,{children:"Sites"})," folder on the left and click ",(0,r.jsx)(n.strong,{children:"Add Website"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set the site name as desired (typically the fully qualified domain name / FQDN)."}),"\n",(0,r.jsx)(n.li,{children:"Select the Application Pool created above."}),"\n",(0,r.jsxs)(n.li,{children:["Set the ",(0,r.jsx)(n.strong,{children:"Physical path"})," to the directory where you extracted the gridbase-app-connector.zip files."]}),"\n",(0,r.jsxs)(n.li,{children:["Under binding, set the ",(0,r.jsx)(n.strong,{children:"Type"})," to ",(0,r.jsx)(n.strong,{children:"https"}),", set the IP Address and host name if/as needed (based on whether\nyou wish to use SNI or a dedicated IP address for the SSL certificate)."]}),"\n",(0,r.jsxs)(n.li,{children:["Select the valid SSL certificate, and then click ",(0,r.jsx)(n.strong,{children:"OK"})," to start the site."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["To configure an existing web site (such as the Default Web Site), select the web site on the left...","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Basic Settings..."})," on the right...","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Select the Application Pool created above."}),"\n",(0,r.jsxs)(n.li,{children:["Set the ",(0,r.jsx)(n.strong,{children:"Physical path"})," to the directory where you extracted the gridbase-app-connector.zip files."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Bindings..."})," on the right. If any bindings exist (other than the http binding for any (*) IP Address\nfor the default web site created when IIS is installed), you may want to consider adding a new web site\ninstead, as updating this configuration would replace any existing web site configured here.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Add..."})]}),"\n",(0,r.jsxs)(n.li,{children:["Under binding, set the ",(0,r.jsx)(n.strong,{children:"Type"})," to ",(0,r.jsx)(n.strong,{children:"https"}),", set the IP Address and host name if/as needed (based on\nwhether you wish to use SNI or a dedicated IP address for the SSL certificate)."]}),"\n",(0,r.jsxs)(n.li,{children:["Select the valid SSL certificate, and then click ",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If any ",(0,r.jsx)(n.strong,{children:"http"})," bindings are configured, select and ",(0,r.jsx)(n.strong,{children:"Remove"})," them."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Navigate to the web site you configured in a web browser, and make sure you see the ",(0,r.jsx)(n.strong,{children:"GridBase Resware Connector (\nWeb)"})," page. All services listed here should show a status of ",(0,r.jsx)(n.strong,{children:"Up"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var r=s(67294);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);