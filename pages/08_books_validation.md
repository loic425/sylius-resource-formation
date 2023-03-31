# Books validation

```gherkin {all|3-5|7-8|11|12}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

```

---

```php {all|7}
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

# Books validation

```gherkin {12|13}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

```

---
transition: fade
---

```php {7|8|9}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
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

```php {9|11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
```

---

```php {11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        $this->createPage->nameIt($name ?? '');
    }
    
    // [...]
}
```

---

# Books validation

```gherkin {13|14}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

```

---
transition: fade
---

```php {7}
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

```php {7}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I (try to) add it')]
    public function iAddIt(): void
    {
        $this->createPage->create();
    }
    
    // [...]
}
```

---

# Books validation

```gherkin {14|15}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

```

---

```php {all|7|8|10|11|12}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('I should be notified that :element is required')] 
    public function iShouldBeNotifiedThatElementIsRequired(string $element): void
    {
        Assert::eq($this->createPage->getValidationMessage(
            StringInflector::nameToCode($element)), 
            'This value should not be blank.',
        );
    }
    
    // [...]
}
```
