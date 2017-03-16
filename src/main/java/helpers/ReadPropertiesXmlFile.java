package helpers;

/**
 * Created by Bolyachin on 16.03.2017.
 */
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Enumeration;
import java.util.Properties;

public class ReadPropertiesXmlFile {

    public static String getDataFromXML(String key)
    {
        Properties properties=null;
        try
        {
            File file = new File("src/main/resources/test.xml");
            FileInputStream fileInput = new FileInputStream(file);
            properties = new Properties();
            properties.loadFromXML(fileInput);
            fileInput.close();
        }
        catch (FileNotFoundException e)
        {
            e.printStackTrace();
        }
        catch (IOException e)
        {

            e.printStackTrace();
        }
        return  properties.getProperty(key);
    }

    public String getDat(String key)
    {
        getDataFromXML(key);
        return null;
    }
}