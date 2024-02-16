# Responders

<v-clicks>

Responders respond data: transform data to a Symfony response, return a success in a CLI operation.

</v-clicks>

---

# Default responders

<v-clicks>

When your operation is an instance of `Sylius\Resource\Metadata\HttpOperation` two responders are configured
by default.

The responder will automatically choose the responder depending on the request format:

| Request format | Responder                                           |
|----------------|-----------------------------------------------------|
| html           | Sylius\Resource\Symfony\Request\State\TwigResponder |
| json           | Sylius\Resource\Symfony\Request\State\ApiResponder  |
| xml            | Sylius\Resource\Doctrine\Common\State\ApiResponder  |

</v-clicks>

---

# Twig Responder

<v-clicks>

The Twig responder is used to render data into a Symfony response.
It's used for HTML responses.

The variables that are passed to the Twig templates depends on the operation.

</v-clicks>

---

# Customize Twig template variables

<v-clicks>

Some variables are already available on your operations, but you can add more variables easily.

</v-clicks>

---

As an example, we add a `foo` variable to the Twig template with `bar` as value.

<v-clicks>

```php {all|17|18}
// src/Twig/Context/Factory/ShowSubscriptionContextFactory.php

namespace App\Twig\Context\Factory;

use phpDocumentor\Reflection\Types\Context;
use Sylius\Resource\Metadata\Operation;
use Sylius\Resource\Twig\Context\Factory\ContextFactoryInterface;

final class ShowSubscriptionContextFactory implements ContextFactoryInterface
{
    public function __construct(private ContextFactoryInterface $decorated)
    {
    }

    public function create(mixed $data, Operation $operation, Context $context): array
    {
        return array_merge($this->decorated->create($data, $operation, $context), [
            'foo' => 'bar',
        ]);
    }
}
```

</v-clicks>

---

# Use it on your operation.

```php {all|12}
// src/Entity/Subscription.php

namespace App\Entity;

use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Metadata\Show;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[Show(
    template: 'subscription/show.html.twig',
    twigContextFactory: ShowSubscriptionContextFactory::class,
)]
class Subscription implements ResourceInterface
{
}
```

---

# API Responder

<v-clicks>

The API responder is used to render serialized data into a Symfony response.
It's used for JSON/XML responses.

</v-clicks>
