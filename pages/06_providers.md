# Providers

<v-clicks>

Providers retrieve data from your persistence layer.

</v-clicks>

---

# Default providers

<v-clicks>

When your resource is a Doctrine entity, there's a default provider `Sylius\Component\Resource\Symfony\Request\State\Provider` which is already configured to your operations.

As it uses the Doctrine repository configured on your resource, some default repository methods are used.

| Operation   | Repository method |
|-------------|-------------------|
| index       | createPaginator   |
| show        | findOneBy         |
| update      | findOneBy         |
| delete      | findOneBy         |
| bulk delete | findById          |

</v-clicks>

---

# Custom repository method

<v-clicks>

You can customize the method to use.

```php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\Entity;

#[Resource]
#[Show(repositoryMethod: 'findOneByEmail')]
final class Customer implements ResourceInterface
{
    // [...]
}
```

</v-clicks>

---

# Custom repository arguments

<v-clicks>

You can pass arguments to your repository method.

3 variables are available:

* `request`: to retrieve data from the request via `Symfony\Component\HttpFoundation\Request`
* `token`: to retrieve data from the authentication token via `Symfony\Component\Security\Core\Authentication\Token\TokenInterface`
* `user`: to retrieve data from the logged-in user via `Symfony\Component\Security\Core\User\UserInterface`

It uses the [Symfony expression language](https://symfony.com/doc/current/components/expression_language.html) component.

</v-clicks>

---

# Custom repository arguments

```php {all|8}
// src/Entity/Customer.php

declare(strict_types=1);

namespace App\Entity;

#[Resource]
#[Show(repositoryMethod: 'findOneByEmail', repositoryArguments: ['email' => "request.attributes.get('email')"])]
final class Customer implements ResourceInterface
{
    // [...]
}
```

---

# Custom providers

<v-clicks>

Custom providers are useful to customize your logic to retrieve data and for an advanced usage such as an hexagonal architecture.

As an example, let's configure a `BoardGameItemProvider` on a `BoardGameResource` which is not a Doctrine entity.

</v-clicks>

---

```php {all|7|7,5|10|14|16-17|19|21|23}
// src/BoardGameBlog/Infrastructure/Sylius/State/Provider/BoardGameItemProvider.php

declare(strict_types=1);

namespace App\BoardGameBlog\Infrastructure\Sylius\State\Provider;

final class BoardGameItemProvider implements ProviderInterface
{
    public function __construct(
        private QueryBusInterface $queryBus,
    ) {
    }

    public function provide(Operation $operation, Context $context): object|iterable|null
    {
        $request = $context->get(RequestOption::class)?->request();
        Assert::notNull($request);

        $id = (string) $request->attributes->get('id');

        $model = $this->queryBus->ask(new FindBoardGameQuery(new BoardGameId(Uuid::fromString($id))));

        return null !== $model ? BoardGameResource::fromModel($model) : null;
    }
}
```

---

# Use this provider on your operation.

```php {all|10|10,7}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

declare(strict_types=1);

namespace App\BoardGameBlog\Infrastructure\Sylius\Resource;

use App\BoardGameBlog\Infrastructure\Sylius\State\Provider\BoardGameItemProvider;

#[Resource]
#[Show(provider: BoardGameItemProvider::class)]
final class BoardGameResource implements ResourceInterface
{
    // [...]
}
```
