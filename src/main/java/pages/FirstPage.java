package pages;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.support.FindBy;

import static org.openqa.selenium.By.xpath;

public class FirstPage extends AbstractPage
{
    @NameOfElement("Log_In form")
    @FindBy(xpath = "//div[contains(@class,'dropdown-form-wrapper')]")
    public SelenideElement enterToCabinet;

    @NameOfElement("Login")
    @FindBy(xpath = "//input[@name='login']")
    public SelenideElement login;

    @NameOfElement("Password")
    @FindBy(xpath = "//input[@name='passwd']")
    public SelenideElement password;

    @NameOfElement("Button log_In")
    @FindBy(xpath = "//button[contains(@tabindex,'106')]")
    public SelenideElement enter;
}
