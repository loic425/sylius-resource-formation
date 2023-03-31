# Redirect

<v-clicks>

After that an action has been performed, the operation can be redirected to another operation.

</v-clicks>

---

# Default redirections

<v-clicks>

Redirections are configured on your operations with these default behaviours.

| Operation   | Redirection                         |
|-------------|-------------------------------------|
| create      | `show` if exists, otherwise `index` |
| update      | `show` if exists, otherwise `index` |  
| delete      | `index`                             |
| bulk_delete | `index`                             |

</v-clicks>

---

# Custom redirection

<v-clicks>

As an example, let's configure a custom redirection fo create & update operations.

```php {all|12-13}

declare(strict_types=1);

namespace App\Entity;

use Sylius\Component\Resource\Metadata\Create;
use Sylius\Component\Resource\Metadata\Resource;
use Sylius\Component\Resource\Metadata\Update;
use Sylius\Component\Resource\Model\ResourceInterface;

#[Resource]
#[Create(redirectToRoute: 'app_book_update')]
#[Update(redirectToRoute: 'app_book_update')]
class Book implements ResourceInterface
{
}
```

After adding or editing a book, it will be redirected to the edition page of a book.

</v-clicks>

---

# Pass arguments to your redirection

<v-clicks>

You can pass arguments to your redirection method.

2 variables are available:

* `resource`: to retrieve data from the instantiated resource
* `{name_of_your_resource}`: If your resource is a book instance, it will be also available as `book` variable

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>

---

# Pass arguments to your redirection

<v-clicks>

As an example, let's redirect a book creation to the author details page of the created book.

```php {all|13|14-15|16-17}

declare(strict_types=1);

namespace App\Entity;

use Sylius\Component\Resource\Metadata\Create;
use Sylius\Component\Resource\Metadata\Resource;
use Sylius\Component\Resource\Metadata\Update;
use Sylius\Component\Resource\Model\ResourceInterface;

#[Resource]
#[Create(
    redirectToRoute: 'app_author_show', 
    # You can use either the generic resource variable
    redirectArguments: ['id' => 'resource.getAuthor().getId()']
    # Or you can use the resource name
    redirectArguments: ['id' => 'book.getAuthor().getId()']
)]
class Book implements ResourceInterface
{
}
```

</v-clicks>
