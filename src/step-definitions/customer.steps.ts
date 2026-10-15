import { Given,Then,When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
const URL=process.env.BASE_URL??"https://cam-motos-ui-ams.stage.walmart.com/";
Given("que el usuario abre CAM Motos",async function(this:CustomWorld){await this.homePage.open(URL);});
When("abre el menú {string}",async function(this:CustomWorld,m:string){if(m!=="Clientes")throw new Error(`Menú no soportado: ${m}`);await this.homePage.openCustomersMenu();});
When("selecciona {string}",async function(this:CustomWorld,o:string){if(o!=="Confirmación de Clientes")throw new Error(`Opción no soportada: ${o}`);await this.homePage.openCustomerConfirmation();});
When("busca al cliente con identificación {string}",async function(this:CustomWorld,id:string){await this.customerConfirmationPage.searchCustomer(id);});
Then("la búsqueda del cliente debe ejecutarse correctamente",async function(this:CustomWorld){await this.customerConfirmationPage.verifySearchWasExecuted("2996346470102");});
