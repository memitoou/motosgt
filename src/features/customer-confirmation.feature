@customers @smoke
Feature: Confirmación de Clientes
  Scenario: Buscar cliente por identificación
    Given que el usuario abre CAM Motos
    When abre el menú "Clientes"
    And selecciona "Confirmación de Clientes"
    And busca al cliente con identificación "2996346470102"
    Then la búsqueda del cliente debe ejecutarse correctamente
