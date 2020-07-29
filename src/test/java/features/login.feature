Feature: User login functionality

  @login
  Scenario Outline: To verify user able to login successfully

    Given Launch browser and open the website
    When user enters login details '<username>' ,'<password>'
    And click on submit option
    Then user should get success message
    Examples:
      | username               | password         |
      | test@qa-experience.com | Password1        |
      | test@test.com          | 1111111111111111 |
      | test@qa-experience.com | 12345678         |

  @login
  Scenario Outline: To verify error message is displayed for invalid email address and password

    Given Launch browser and open the website
    When user enters login details '<username>' ,'<password>'
    And click on submit option
    Then verify the error message is displayed
    Examples:
      | username           | password          |
      | test@qa-experience | Pass              |
      | test               | password123456789 |
      | a@test.com         | 11111111111111111 |