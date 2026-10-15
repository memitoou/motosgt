import { IWorldOptions,setWorldConstructor,World } from "@cucumber/cucumber";
import { Browser,BrowserContext,Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { CustomerConfirmationPage } from "../pages/CustomerConfirmationPage";
export class CustomWorld extends World {
  browser!:Browser; context!:BrowserContext; page!:Page;
  homePage!:HomePage; customerConfirmationPage!:CustomerConfirmationPage;
  constructor(o:IWorldOptions){super(o);}
  initializePages(){this.homePage=new HomePage(this.page);this.customerConfirmationPage=new CustomerConfirmationPage(this.page);}
}
setWorldConstructor(CustomWorld);
