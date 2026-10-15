import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
export class HomePage extends BasePage {
 constructor(page:Page){super(page);}
 async open(url:string){await this.page.goto(url,{waitUntil:"domcontentloaded"});}
 async openCustomersMenu(){const e=this.page.getByRole("button",{name:/clientes/i});await expect(e).toBeVisible();await e.click();}
 async verifyCustomerConfirmationOption(){await expect(this.page.getByRole("link",{name:"Confirmación de Clientes",exact:true})).toBeVisible();}
 async openCustomerConfirmation(){const e=this.page.getByRole("link",{name:"Confirmación de Clientes",exact:true});await expect(e).toBeVisible();await e.click();await this.waitForPageReady();}
}