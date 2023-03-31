# Browsing books

```gherkin {all|8-9}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
```

---

```php {all|3|6|10|11|13|14|16-17}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    #[Given('there is (also) a book with name :name']
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}

```

---

```gherkin {8-9|14}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
```

---

# Contexte de la gestion de books

```php {all|6|10|13}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private IndexPage $indexPage,
    ) {
    }

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
```

---

# Page d'index des books

```php {all|7|5,7|9|11}
// tests/Behat/Page/Backend/Book/Index.php

namespace App\Tests\Behat\Page\Backend\Book;

use Monofony\Bridge\Behat\Crud\AbstractIndexPage;

final class IndexPage extends AbstractIndexPage
{
    public function getRouteName(): string
    {
        return 'app_backend_book_index';
    }
}

```

---

```gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
```

---
transition: fade
---

```php {10}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }
```

---

```php {13-19|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->indexPage->open();
    }

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
```

---

```gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
```

---
transition: fade
---

```php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }
}    
```

---

```php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::eq($this->indexPage->countItems(), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true($this->indexPage->isSingleResourceOnPage(['name' => $name]));
    }
}
```
