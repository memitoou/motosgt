@customers
Feature: Confirmación de Clientes
  @positive @smoke
  Scenario: TC-01 Buscar cliente con identificación válida
    Given que el usuario abre CAM Motos
    When abre el menú "Clientes"
    And selecciona "Confirmación de Clientes"
    And busca al cliente con identificación "2996346470102"
    Then la búsqueda debe mantener la identificación "2996346470102"
  @positive
  Scenario: TC-02 Abrir el menú Clientes
    Given que el usuario abre CAM Motos
    When abre el menú "Clientes"
    Then debe mostrarse la opción "Confirmación de Clientes"
  @positive
  Scenario: TC-03 Acceder a Confirmación de Clientes
    Given que el usuario abre CAM Motos
    When abre el menú "Clientes"
    And selecciona "Confirmación de Clientes"
    Then debe visualizarse el campo de búsqueda de clientes
  @positive
  Scenario: TC-04 Realizar búsqueda válida desde Confirmación de Clientes
    Given que el usuario abre CAM Motos
    When abre el menú "Clientes"
    And selecciona "Confirmación de Clientes"
    And busca al cliente con identificación "2996346470102"
    Then la búsqueda debe mantener la identificación "2996346470102"
  @negative
  Scenario: TC-05 Buscar cliente con identificación inexistente
    Given que el usuario abre CAM Motos
    When abre el menú "Clientes"
    And selecciona "Confirmación de Clientes"
    And busca al cliente con identificación "9999999999999"
    Then la aplicación debe permanecer disponible
  @negative
  Scenario: TC-06 Buscar utilizando caracteres alfabéticos
    Given que el usuario abre CAM Motos
    When abre el menú "Clientes"
    And selecciona "Confirmación de Clientes"
    And intenta ingresar "ABCDEFGHIJKLM" en la búsqueda
    Then el módulo de Confirmación de Clientes debe permanecer disponible
  @negative
  Scenario: TC-07 Buscar utilizando una identificación incompleta
    Given que el usuario abre CAM Motos
    When abre el menú "Clientes"
    And selecciona "Confirmación de Clientes"
    And busca al cliente con identificación "299634"
    Then la aplicación debe permanecer disponible
  @negative
  Scenario: TC-08 Intentar realizar una búsqueda vacía
    Given que el usuario abre CAM Motos
    When abre el menú "Clientes"
    And selecciona "Confirmación de Clientes"
    And intenta realizar una búsqueda vacía
    Then el módulo de Confirmación de Clientes debe permanecer disponible
