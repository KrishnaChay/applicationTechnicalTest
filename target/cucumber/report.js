$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "User login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify user able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "Launch browser and open the website",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters login details \u0027\u003cusername\u003e\u0027 ,\u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "click on submit option",
  "keyword": "And "
});
formatter.step({
  "name": "user should get success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "test@qa-experience.com",
        "Password1"
      ]
    },
    {
      "cells": [
        "test@test.com",
        "1111111111111111"
      ]
    },
    {
      "cells": [
        "test@qa-experience.com",
        "12345678"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify user able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser and open the website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.launchBrowserAndOpenTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters login details \u0027test@qa-experience.com\u0027 ,\u0027Password1\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.userEntersLoginDetailsUsernamePassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.click_on_submit_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get success message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.user_should_get_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", "Screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify user able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser and open the website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.launchBrowserAndOpenTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters login details \u0027test@test.com\u0027 ,\u00271111111111111111\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.userEntersLoginDetailsUsernamePassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.click_on_submit_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get success message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.user_should_get_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", "Screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify user able to login successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser and open the website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.launchBrowserAndOpenTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters login details \u0027test@qa-experience.com\u0027 ,\u002712345678\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.userEntersLoginDetailsUsernamePassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.click_on_submit_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should get success message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.user_should_get_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", "Screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify error message is displayed for invalid email address and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "Launch browser and open the website",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters login details \u0027\u003cusername\u003e\u0027 ,\u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "click on submit option",
  "keyword": "And "
});
formatter.step({
  "name": "verify the error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "test@qa-experience",
        "Pass"
      ]
    },
    {
      "cells": [
        "test",
        "password123456789"
      ]
    },
    {
      "cells": [
        "a@test.com",
        "11111111111111111"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify error message is displayed for invalid email address and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser and open the website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.launchBrowserAndOpenTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters login details \u0027test@qa-experience\u0027 ,\u0027Pass\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.userEntersLoginDetailsUsernamePassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.click_on_submit_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.verifyTheErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", "Screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify error message is displayed for invalid email address and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser and open the website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.launchBrowserAndOpenTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters login details \u0027test\u0027 ,\u0027password123456789\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.userEntersLoginDetailsUsernamePassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.click_on_submit_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.verifyTheErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", "Screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify error message is displayed for invalid email address and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch browser and open the website",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.launchBrowserAndOpenTheWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters login details \u0027a@test.com\u0027 ,\u002711111111111111111\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.userEntersLoginDetailsUsernamePassword(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit option",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.click_on_submit_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginPageSteps.verifyTheErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", "Screenshot");
formatter.after({
  "status": "passed"
});
});