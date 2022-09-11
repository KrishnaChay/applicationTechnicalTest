package stepDefinitions;


import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import model.ProductDetails;
import pageObjects.MiniCartPage;
import pageObjects.ProductDetailPage;
import utilities.Util;

import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class AddProducts {

    Util util = new Util();
    ProductDetailPage pdp = new ProductDetailPage();
    MiniCartPage miniCartPage = new MiniCartPage();
    ProductDetails productDetails = new ProductDetails();


    @Given("customer has added below items to the basket")
    public void customerHasAddedBelowItemsToTheBasket(DataTable dt) {
        util.openWebsite();
        List<Map<String, String>> rows = dt.asMaps(String.class, String.class);
        for (Map<String, String> columns : rows) {
            productDetails.setDetails(rows);
            pdp.openProduct(columns.get("product_name"));
            pdp.selectSize(columns.get("size"));
            pdp.addToCartBtn().click();
        }

    }

    @When("customer clicks on the mini basket and validate")
    public void customerClicksOnTheMiniBasketAndValidate() throws InterruptedException {
        Thread.sleep(2000);
        util.reloadPage();
        Thread.sleep(2000);
        pdp.showCartBtn().click();
        Thread.sleep(2000);
        int totalItems = miniCartPage.countOfItems().size();
        for (int i = totalItems; i > 0; i--) {
            assertEquals(productDetails.getDetails().get(totalItems - i).get("product_name").replace("-", " ").toUpperCase(), miniCartPage.productName(i).getText());
            assertEquals(productDetails.getDetails().get(totalItems - i).get("size"), miniCartPage.productOptions(i).getText().split("\n")[1].split(":")[1].trim());
            assertEquals(productDetails.getDetails().get(totalItems - i).get("price"), miniCartPage.productItemPricing(i).getText().trim());
            assertEquals(productDetails.getDetails().get(totalItems - i).get("qty"), miniCartPage.productQty(i).getAttribute("value").trim());

        }
        assertTrue("View Basket button is displayed", miniCartPage.viewBasket().isDisplayed());
        assertTrue("Checkout button is displayed", miniCartPage.checkoutBtn().isDisplayed());
        assertTrue("Paypal actions is displayed", miniCartPage.extraActions().isDisplayed());

    }

    @And("customer update Qty and remove {int} item from the mini basket")
    public void customerUpdateQtyAndRemoveItemFromTheMiniBasket(int itemNumber) throws InterruptedException {
        miniCartPage.updateQty(itemNumber, "3");
        miniCartPage.removeItem(itemNumber);
    }

    @Then("item should be removed from the mini basket and the subtotal amount {string} is updated accordingly")
    public void itemShouldBeRemovedFromTheMiniBasketAndTheSubtotalAmountIsUpdatedAccordingly(String amount) throws InterruptedException {
        Thread.sleep(3000);
        assertEquals(amount, miniCartPage.subTotal().getText());
    }
}
