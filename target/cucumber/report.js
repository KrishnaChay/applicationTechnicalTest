$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "User login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify user able to login successfully",
  "description": "",
  "keyword": "Scenario Outline"
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
    }
  ]
});
formatter.scenario({
  "name": "To verify user able to login successfully",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.embedding("image/png", "embedded0.png", "name");
formatter.after({
  "status": "passed"
});
});