# Resource factories

<v-clicks>

Resource factories are used on Create operations to instantiate your resource.

</v-clicks>

---

# Default factory for your resource

<v-clicks>

By default, a resource factory is defined to your resource `Sylius\Resource\Factory\Factory`.

It has a `createNew` method with no arguments.

</v-clicks>

---

# Define your custom factory

```php {all|10|10,8|12|14|15|17}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\Factory;

use App\Entity\Book;
use Sylius\Resource\Factory\FactoryInterface;

final class BookFactory implements FactoryInterface
{
    public function createNew(): Book
    {
        $book = new Book();
        $book->setCreatedAt(new \DateTimeImmutable());
        
        return $book;
    }
}
```

---

# Configure your factory

```yaml
# config/services.yaml
services:
    App\Factory\BookFactory:
      decorates: 'app.factory.book'
```

---

# Use your custom method

```php {all|16|18|18,11-14|20|22}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private Security $security) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createWithCreator(): Book
    {
        $book = $this->createNew();
        
        $book->setCreator($this->security->getUser());
        
        return $book;
    }
}
```

---

# Use it on your create operation

```php {all|14}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\Entity\Book;

use Sylius\Resource\Metadata\Create;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createWithCreator',
)]
class Book implements ResourceInterface
{
}
```

---

# Pass arguments to your method

<v-clicks>

You can pass arguments to your factory method.

3 variables are available:

* `request`: to retrieve data from the request via `Symfony\Component\HttpFoundation\Request`
* `token`: to retrieve data from the authentication token via `Symfony\Component\Security\Core\Authentication\Token\TokenInterface`
* `user`: to retrieve data from the logged-in user via `Symfony\Component\Security\Core\User\UserInterface`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>

---

```php {all|16|18|20|20,7|22|24}
// src/Factory/BookRepository.php

// [...]

final class BookFactory implements FactoryInterface
{
    public function __construct(private RepositoryInterface $authorRepository) 
    {
    }

    public function createNew(): Book
    {
        return new Book();
    }
    
    public function createForAuthor(string $authorId): Book
    {
        $book = $this->createNew();
        
        $author = $this->authorRepository->find($authorId);
        
        $book->setAuthor($author);
        
        return $book;
    }
}
```

---

# Use it on your create operation

```php {all|14|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\Entity\Book;

use Sylius\Resource\Metadata\Create;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[Create(
    path: 'authors/{authorId}/books',
    factoryMethod: 'createForAuthor',
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
```

---

# Use a factory without declaring it

<v-clicks>

You can use a factory without declaring it on `services.yaml`.

```php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\Entity\Book;

use App\Factory\BookFactory;use Sylius\Component\Resource\Metadata\Create;
use Sylius\Component\Resource\Metadata\Resource;
use Sylius\Component\Resource\Model\ResourceInterface;

#[Resource]
#[Create(
    path: 'authors/{authorId}/books',
    # Here we declared the factory to use with its fully classified class name
    factory: BookFactory::class,
    factoryMethod: 'createForAuthor', 
    factoryArguments: ['authorId' => "request.attributes.get('authorId')"],
)]
class Book implements ResourceInterface
{
}
```

</v-clicks>

---

# Use a callable for your custom factory

```php {all|9|11|13}
// src/Factory/BookRepository.php

declare(strict_types=1);

namespace App\Factory;

use App\Entity\Book;

final class BookFactory
{    
    public static function create(): Book
    {
        return new Book();
    }
}
```

---

# Use it on your operation

```php {all|15}
// src/Entity/Book.php

declare(strict_types=1);

namespace App\Entity\Book;

use App\Entity\Book;
use App\Factory\BookFactory;
use Sylius\Component\Resource\Metadata\Create;
use Sylius\Component\Resource\Metadata\Resource;
use Sylius\Component\Resource\Model\ResourceInterface;

#[Resource]
#[Create(
    factory: [BookFactory::class, 'create'], 
)]
class Book implements \Sylius\Component\Resource\Model\ResourceInterface
{
}
```
