import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
export class HomePage extends BasePage {
  constructor(page: Page){ super(page); }
  async open(url:string){ await this.page.goto(url,{waitUntil:"domcontentloaded"}); }
  async openCustomersMenu(){
    const el=this.page.getByRole("button",{name:/clientes/i});
    await expect(el).toBeVisible(); await el.click();
  }
  async openCustomerConfirmation(){
    const el=this.page.getByRole("link",{name:"Confirmación de Clientes",exact:true});
    await expect(el).toBeVisible(); await el.click(); await this.waitForPageReady();
  }
}
