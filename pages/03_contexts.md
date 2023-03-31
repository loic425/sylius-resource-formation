# Contexts

<v-clicks>

Un contexte Behat est ce qui va permettre de convertir les phrases Gherkin en tests.

```php
<?php

declare(strict_types=1);

namespace App\Tests\Behat\Context\Ui\Backend;

use Behat\Behat\Context\Context;

final class ManagingBooksContext implements Context
{
    /**
     * @When I want to browse books
     */
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
```

</v-clicks>

---

# Quelques règles

<v-clicks>

* Le contexte Behat doit implémenter l'interface `Behat\Behat\Context\Context`.
* Ce contexte doit être présent dans la suite `ui_managing_books` vu précédement.

On peut également utiliser les attributes PHP 8:

```php {all|10|7,10|12}
<?php

declare(strict_types=1);

namespace App\Tests\Behat\Context\Ui\Backend;

use Behat\Behat\Context\Context;
use Behat\Step\When;

final class ManagingBooksContext implements Context
{
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
```

</v-clicks>
