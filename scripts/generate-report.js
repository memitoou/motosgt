const r=require("multiple-cucumber-html-reporter"),fs=require("fs");
if(!fs.existsSync("reports/cucumber-report.json")) process.exit(0);
r.generate({jsonDir:"reports",reportPath:"reports/html",pageTitle:"CAM Motos Report",reportName:"CAM Motos Playwright + Cucumber",displayDuration:true});
