# Suites

<v-clicks>

Les suites définissent un ensemble de scénarios à lancer.
Ils définissent les contextes associés et se basent sur les tags.

Sur nos exemples précédents, nous avons le tag "@managing_books" ainsi que le tag "@ui".

Nous pouvons ainsi créer une suite `ui_managing_books` qui est utilisée pour ces deux tags:

```yaml {all|3|4|5|7-8|10|12-13|15}
default:
    suites:
        ui_managing_books:
            contexts:
                - App\Tests\Behat\Context\Hook\DoctrineORMContext

                - App\Tests\Behat\Context\Setup\AdminSecurityContext
                - App\Tests\Behat\Context\Setup\BookContext

                - App\Tests\Behat\Context\Transform\SharedStorageContext

                - App\Tests\Behat\Context\Ui\Backend\ManagingBooksContext
                - App\Tests\Behat\Context\Ui\Backend\NotificationContext
            filters:
                tags: "@managing_books&&@ui"
```

</v-clicks>
