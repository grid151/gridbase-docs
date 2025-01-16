# Connector Upgrades

This guide provides step-by-step instructions on how to upgrade your already installed Resware connector to a newer version. You'll need to have a few pieces of information ready before you begin:

* The `Download URL` - This will be provided to you by the GridBase&reg; team when an upgrade is available for you to install.
* Your `App Connector Directory` will be where you installed the app connector. You'll need to know which server and what directory on that server to use (which is typically something like `C:\inetpub\resware-connector-app`).
* Your `Web Connector Directory` will be where you installed the web connector. You'll need to know which server and what directory on that server to use (which is typically something like `C:\inetpub\resware-connector-web)`.

Once you have all of this information, you are ready to perform the upgrade.

## Update the App Connector Site
- Connect to your app server
- Navigate to the `Download URL` provided by the GridBase team and download the appropriate resware-connector-app.N.N.N.N.zip file.
- Right-click on the zip file, click Properties in the menu, and then unblock the file on the bottom. Then extract the file.
- Stop the application pool for the app connector site.
- Delete the bin folder from `App Connector Directory`.
- Copy the new `resware-connector-app\bin` folder from the extracted zip file to the `App Connector Directory`.
- Start the application pool for the app connector site.
 

## Update the Web Connector Site
- Connect to your web server
- Navigate to the `Download URL` provided by the GridBase team and .download the resware-connector-web.N.N.N.N.zip file.
- Right-click on the zip file, click Properties in the menu, and then unblock the file on the bottom. Then extract the file.
- Stop the application pool for the web connector site.
- Delete the bin folder from the `Web Connector Directory`.
- Copy the new `resware-connector-web\bin` folder from the extracted zip file to the `Web Connector Directory`.
- Copy the new `resware-connector-web\default.htm` folder from the extracted zip file to the `Web Connector Directory`.
- Start the application pool for the web connector site.
 
## Update Stored Procedures
- Navigate to the `Download URL` provided by the GridBase team. If any database-updates.zip file present, connect to your database server (or a computer which can connect to it via SSMS) and download this zip file. Otherwise if this is not present, skip to the Verify section below.
- Right-click on the zip file, click Properties in the menu, and then unblock the file on the bottom. Then extract the file.
- Open SQL Server Management Studio (SSMS), and select the GridBase database in object explorer. This step is *very important* so you do not accidentally overwrite stored procedures on the Resware database!
- Apply then close each script to the GridBase database. If any errors are present, leave the tab open and send the message to the GridBase team for assistance.

## Verify the Upgrade
Open a browser, navigate to your web connector URL (e.g. `https://gridbase.yourdomain.com/`) and make sure everything reports "Up" for the status summary.
