package stepDefinitions;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features",
        glue = "stepDefinitions",
        tags = "@login",
        monochrome = true,
        strict = true,
        plugin = {"pretty", "html:target/cucumber", "junit:target/cucumber.xml", "json:target/cucumber.json",
        }
)
public class RunCucumberTest {

}