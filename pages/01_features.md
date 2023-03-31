# Features

<v-clicks>

Les features contiennent des scénarii qui décrivent les fonctionnalités de l'application.

Exemple 1 : Browsing books

```gherkin {all|1,12|2-5|7-10|12-16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also an book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
```

</v-clicks>

---

# Features

Les features contiennent des scénarii qui décrivent les fonctionnalités de l'application.

Exemple 2 : Adding books

```gherkin {all|1,10|2-5|7-8|10-16}
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
