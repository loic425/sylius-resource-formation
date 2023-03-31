# Deleting books

```gherkin {all|3-5|7-10|14}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

```

---

```php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
}

```

---

# Deleting books

```gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

```

---
transition: fade
---

```php {7-11}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    // [...]
}

```

---

```php {13-17|13|14|16}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->updatePage->saveChanges();
    }
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->indexPage->deleteResourceOnPage(['name' => $name]);
    }
    
    // [...]
}

```

---

# Deleting books

```gherkin {15|16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

```

---
transition: fade
---

```php {7-14}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

```

---

```php {16-22|16|17|19|21}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('the book :name should appear in the list')
    #[Then('this book with name :name should appear in the list')
    public function theBookShouldAppearInTheList(string $name): void
    {
        $this->indexPage->open();

        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        $this->indexPage->open();

        Assert::false($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
    
    // [...]
}

```
