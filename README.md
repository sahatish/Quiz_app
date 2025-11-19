#  Dynamic Quiz Application (HTML + CSS + JavaScript)

A modern, responsive, and interactive **Quiz Application** built using **HTML, CSS, and JavaScript**.  
This project was created as part of the **Frugal Testing Software Engineer Assignment**.

---

##  Features

###  Dynamic Questions  
- Questions are loaded from a JavaScript array.  
- Supports multiple-choice questions.

###  Countdown Timer  
- Each question has a **10-second timer**.  
- If time ends, quiz moves to next question automatically.

###  Attractive UI  
- Modern, glass-morphism based design.  
- Smooth animations and glow effects.  
- Fully responsive for mobile & desktop.

###  Answer Selection  
- Highlight selected answer  
- Lock options after selection

###  Finish Quiz Button  
- Appears automatically on the last question  
- User can submit the quiz manually

###  Score Calculation  
- Shows final score  
- Shows time spent on each question

---

## 📂 Project Structure
and here Selenium Java Automation Script
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class QuizTest {

    public static void main(String[] args) throws InterruptedException {

        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        driver.get("file:///C:/Users/ATISH%20SAH/OneDrive/Desktop/quiz_app_project/index.html");

        System.out.println("Page Title: " + driver.getTitle());
        System.out.println("Page URL: " + driver.getCurrentUrl());

        Thread.sleep(1500);

        for (int i = 1; i <= 10; i++) {

            Thread.sleep(2000);

            WebElement questionText = driver.findElement(By.id("question"));
            System.out.println("Question " + i + ": " + questionText.getText());

            WebElement option = driver.findElement(By.cssSelector(".option"));
            option.click();

            Thread.sleep(1000);

            if (i < 10) {
                driver.findElement(By.id("nextBtn")).click();
            } else {
                driver.findElement(By.id("finishBtn")).click();
            }
        }

        Thread.sleep(2000);

        WebElement resultText = driver.findElement(By.id("score"));
        System.out.println("Final Score Shown: " + resultText.getText());

        Thread.sleep(2000);
        driver.quit();
    }
}

