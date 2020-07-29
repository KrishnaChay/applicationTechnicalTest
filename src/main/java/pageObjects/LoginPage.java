package pageObjects;

import basePage.Base;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class LoginPage extends Base {

    public WebElement userName() {
        return driver.findElement(By.xpath("//input[@name='loginUsername']"));

    }

    public WebElement passwordValue() {
        return driver.findElement(By.xpath("//input[@name='loginPassword']"));

    }

    public WebElement submitButton() {
        return driver.findElement(By.xpath("//button[@type='submit']"));

    }

    public WebElement successText() {
        return driver.findElement(By.xpath("//div[@class='logged-in__success']"));

    }
    public WebElement errorText() {
        return driver.findElement(By.xpath("//div[@class='form-field__error']"));

    }


}
