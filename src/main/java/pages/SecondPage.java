package pages;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.support.FindBy;

public class SecondPage extends AbstractPage
{

    @NameOfElement("Lite mode")
    @FindBy( xpath = ".//span[@class='mail-App-Footer-Item mail-App-Footer-Item_lite']/a")
    SelenideElement itemLite;

    @NameOfElement("Profile")
    @FindBy( xpath = ".//div[@class='mail-User-Name']")
    SelenideElement profile;

}
