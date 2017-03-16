package yandex.steps;

import com.codeborne.selenide.Condition;
import com.codeborne.selenide.Selenide;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.FirstPage;
import pages.SecondPage;

import helpers.ReadPropertiesXmlFile;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.url;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;

public class MyStepdefs
{

    FirstPage firstPage = page(FirstPage.class);
    SecondPage secondPage = page(SecondPage.class);

    @Given("^open yandex\\.ua$")
    public void openRiskmarketRu()
    {
        open("https://www.yandex.ua/");
    }

    @And("^check that element with name \"([^\"]*)\" is displayed on \"([^\"]*)\"$")
    public void checkThatElementWithNameIsDisplayed(String elementName, String page)
    {
        if ("first page".equals(page)) firstPage.get(elementName).shouldBe(Condition.appears);
        else if ("second page".equals(page)) secondPage.get(elementName).shouldBe(Condition.appears);
    }

    @And("^type to input with name \"([^\"]*)\" text: \"([^\"]*)\" on \"([^\"]*)\"$")
    public void typeToInputWithNameText(String nameOfElement, String text, String page)
    {
        sleep(1000);
        if ("first page".equals(page)) firstPage.get(nameOfElement).sendKeys(ReadPropertiesXmlFile.getDataFromXML(text));
        else if ("second page".equals(page)) secondPage.get(nameOfElement).sendKeys(ReadPropertiesXmlFile.getDataFromXML(text));
    }

    @When("^press element with text \"([^\"]*)\" on \"([^\"]*)\"$")
    public void press(String button, String page)
    {
        if ("first page".equals(page)) firstPage.get(button).shouldBe(Condition.appears).click();
        else if ("second page".equals(page)) secondPage.get(button).shouldBe(Condition.appears).click();
    }

    @Then("^verify that page with url \"([^\"]*)\" is opened$")
    public void verifyThatPageWithUrlIsOpened(String verifyUrl)
    {
        sleep(3000);
        String currentUrl = url();
        assertThat(currentUrl, containsString(verifyUrl));
        Selenide.screenshot(verifyUrl);
    }

    @Given("^check profile$")
    public void checkProfile()
    {
        secondPage.get("Profile").shouldBe(Condition.appears);
    }

}
