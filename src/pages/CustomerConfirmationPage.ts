import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
export class CustomerConfirmationPage extends BasePage {
 constructor(page:Page){super(page);}
 async verifySearchInputVisible(){await expect(this.page.getByPlaceholder("Buscar")).toBeVisible();}
 async enterCustomerId(id:string){const e=this.page.getByPlaceholder("Buscar");await expect(e).toBeVisible();await e.fill(id);}
 async clickSearch(){const b=this.page.getByRole("button",{name:/buscar|search/i});if(await b.count())await b.first().click();else{const i=this.page.locator("svg.cursor-pointer").first();await expect(i).toBeVisible();await i.click();}}
 async searchCustomer(id:string){await this.enterCustomerId(id);await this.clickSearch();}
 async searchEmpty(){const e=this.page.getByPlaceholder("Buscar");await expect(e).toBeVisible();await e.fill("");await this.clickSearch();}
 async verifySearchValue(id:string){await expect(this.page.getByPlaceholder("Buscar")).toHaveValue(id);}
 async verifyModuleAvailable(){await expect(this.page.getByPlaceholder("Buscar")).toBeVisible();}
 async verifyApplicationAvailable(){await expect(this.page.locator("body")).toBeVisible();await expect(this.page).not.toHaveTitle(/500|error|not found/i);}
}