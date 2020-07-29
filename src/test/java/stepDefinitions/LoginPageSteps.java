package stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import pageObjects.LoginPage;
import utilities.Util;

import java.io.IOException;

public class LoginPageSteps {
    LoginPage loginpage = new LoginPage();
    Util util = new Util();
    private static Logger log = LogManager.getLogger(LoginPageSteps.class.getName());


    @Given("Launch browser and open the website")
    public void launchBrowserAndOpenTheWebsite() throws IOException {
        util.openWebsite();
    }

    @When("user enters login details {string} ,{string}")
    public void userEntersLoginDetailsUsernamePassword(String username, String password) {
        loginpage.userName().sendKeys(username);
        loginpage.passwordValue().sendKeys(password);
        log.info("Username::" + username);
        log.info("Password::" + password);
    }

    @When("click on submit option")
    public void click_on_submit_option() {
        loginpage.submitButton().click();
        log.info("Clicked on Submit button");
    }

    @Then("user should get success message")
    public void user_should_get_success_message() {
        log.info("Text::" + loginpage.successText().getText());
        Assert.assertEquals("Successfully logged in!", loginpage.successText().getText());
    }

}

