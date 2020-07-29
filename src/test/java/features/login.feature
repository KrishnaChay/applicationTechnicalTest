Feature: User login functionality

  @login
  Scenario Outline: To verify user able to login successfully

    Given Launch browser and open the website
    When user enters login details '<username>' ,'<password>'
    And click on submit option
    Then user should get success message
    Examples:
      | username               | password  |
      | test@qa-experience.com | Password1 |
