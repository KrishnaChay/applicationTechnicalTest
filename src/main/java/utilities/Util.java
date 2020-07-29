package utilities;

import basePage.Base;

public class Util extends Base {
    public void openWebsite() {
        driver.get(prop.getProperty("url"));
    }
}
