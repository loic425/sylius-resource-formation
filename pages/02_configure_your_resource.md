# Configure your resource

<v-clicks>

Implements the Resource interface

```php {all|10|10,7}
// src/Entity/Book.php

namespace App\Entity;

use App\Repository\BookRepository;
use Doctrine\ORM\Mapping as ORM;
use Sylius\Resource\Model\ResourceInterface;

#[ORM\Entity(repositoryClass: BookRepository::class)]
class Book implements ResourceInterface
{
    public function getId(): int
    {
        return $this->id;
    }
}

```

This interface requires you to implement a `getId()` method.

This one is already generated 🎉

</v-clicks>

---

# Use the AsResource attribute

PHP attribute ```#[AsResource]``` configures your entity as a Sylius resource.

```php {all|9|9,5}
namespace App\Entity;

use App\Repository\BookRepository;
use Doctrine\ORM\Mapping as ORM;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Model\ResourceInterface;

#[ORM\Entity(repositoryClass: BookRepository::class)]
#[AsResource]
class Book implements ResourceInterface
{
}

```

---

# Debug the resource

<v-clicks>

```shell
$ bin/console sylius:debug:resource 'App\Entity\book'
```

#

```
+--------------------+------------------------------------------------------------+
| name               | book                                                       |
| application        | app                                                        |
| driver             | doctrine/orm                                               |
| classes.model      | App\Entity\Book                                            |
| classes.controller | Sylius\Bundle\ResourceBundle\Controller\ResourceController |
| classes.factory    | Sylius\Component\Resource\Factory\Factory                  |
| classes.form       | Sylius\Bundle\ResourceBundle\Form\Type\DefaultResourceType |
+--------------------+------------------------------------------------------------+
```

By default, it will have the `app.book` alias in Sylius resource which is a concatenation of the application name and the resource name `{application}.{name}`.

</v-clicks>
