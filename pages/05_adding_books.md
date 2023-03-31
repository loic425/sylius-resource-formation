# Adding books

```gherkin {all|1,10|2-5|7-8|11|12}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---
transition: fade
---

```php {15}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
```

---
transition: fade
---

```php {all}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    // [...]
}
```

---

```php {all|7|13|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
        private CreatePage $createPage,
    ) {
    }
    
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
```

---

# Create book page

```php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\Tests\Behat\Page\Backend\Book;

use Monofony\Bridge\Behat\Crud\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

```

---

```gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---
transition: fade
---

```php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
```

---

```php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
```

---
transition: fade
---

```php {11}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\Tests\Behat\Page\Backend\Book;

use Monofony\Bridge\Behat\Crud\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
}

```

---
transition: fade
---

```php {14-17|14|16}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\Tests\Behat\Page\Backend\Book;

use Monofony\Bridge\Behat\Crud\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
}

```

---

```php {19-24|19|22}
// tests/Behat/Page/Backend/Book/CreatePage.php

namespace App\Tests\Behat\Page\Backend\Book;

use Monofony\Bridge\Behat\Crud\AbstractCreatePage;

final class CreatePage extends AbstractCreatePage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_create';
    }
    
    public function nameIt(string $name): void
    {
        $this->getElement('name')->setValue($name);
    }
    
    protected function getDefinedElements(): array
    {
        return [
            'name' => '#book_name',
        ];
    }
}

```

---

```gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---
transition: fade
---

```php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
```

---

```php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
```

---

```gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---

```php {all|10|12|14}
// tests/Behat/Context/Ui/Backend/NotificationContext.php

final class NotificationContext implements Context
{
    public function __construct(private NotificationCheckerInterface $notificationChecker)
    {
    }

    /**
     * @Then I should be notified that it has been successfully created
     */
    public function iShouldBeNotifiedItHasBeenSuccessfullyCreated(): void
    {
        $this->notificationChecker->checkNotification('has been successfully created.', NotificationType::success());
    }
    
    // [...]
}
```

---

```gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

```

---
transition: fade
---

```php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
```

---

```php {13-19|13|14|16|18}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    #[Then('the book :name should appear in the list')] 
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}
```
