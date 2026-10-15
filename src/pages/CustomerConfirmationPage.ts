import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
export class CustomerConfirmationPage extends BasePage {
  constructor(page: Page){ super(page); }
  async searchCustomer(id:string){
    const input=this.page.getByPlaceholder("Buscar");
    await expect(input).toBeVisible(); await input.fill(id);
    const button=this.page.getByRole("button",{name:/buscar|search/i});
    if(await button.count()){ await button.first().click(); }
    else {
      const icon=this.page.locator("svg.cursor-pointer").first();
      await expect(icon).toBeVisible(); await icon.click();
    }
  }
  async verifySearchWasExecuted(id:string){
    await expect(this.page.getByPlaceholder("Buscar")).toHaveValue(id);
    await this.page.waitForLoadState("networkidle").catch(()=>undefined);
  }
}
