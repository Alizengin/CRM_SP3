package com.crm.step_definitions;

import com.crm.pages.LoginPage;
import com.crm.pages.MainPage;
import com.crm.utilities.BrowserUtils;
import com.crm.utilities.ConfigurationReader;
import com.crm.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LogOutStepDefs {
    @Given("the user in on the login page")
    public void the_user_in_on_the_login_page() {
     String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("the user logs in using credentials")
    public void the_user_logs_in_using_credentials() {
        BrowserUtils.waitForPageToLoad(2);
        String username = ConfigurationReader.get("client_username");
        String password = ConfigurationReader.get("client_password");

        new LoginPage().login(username,password);
    }

    @Then("the user should be able to login")
    public void the_user_should_be_able_to_login() {
    BrowserUtils.waitForPageToLoad(2);
    String actualTitle = Driver.get().getTitle();
        Assert.assertEquals("(2) Portal",actualTitle);
    }

    @When("the user click on the logout")
    public void the_user_click_on_the_logout() {
        BrowserUtils.waitForPageToLoad(2);
      new MainPage().userBlock.click();
      new MainPage().logOut.click();
    }

    @Then("the user should be able to land in login page")
    public void the_user_should_be_able_to_land_in_login_page() {
      BrowserUtils.waitForPageToLoad(2);
      String actualTitle = Driver.get().getTitle();
      Assert.assertEquals("Authorization",actualTitle);

    }
}
