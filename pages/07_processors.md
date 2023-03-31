# Processors

<v-clicks>

Processors process data: send an email, persist to storage, add to queue etc.

</v-clicks>

---

# Default processors

<v-clicks>

When your resource is a Doctrine entity, there are default processors which are already configured to your operations.

As it uses the Doctrine repository configured on your resource, it will automatically flush data for you.

| Operation   | Processor                                                        |
|-------------|------------------------------------------------------------------|
| create      | Sylius\Component\Resource\Doctrine\Common\State\PersistProcessor |
| update      | Sylius\Component\Resource\Doctrine\Common\State\PersistProcessor |
| delete      | Sylius\Component\Resource\Doctrine\Common\State\RemoveProcessor  |
| bulk delete | Sylius\Component\Resource\Doctrine\Common\State\RemoveProcessor  |

</v-clicks>

---

# Custom processors

<v-clicks>

Custom processors are useful to customize your logic to send an email, persist data to storage, add to queue and for an advanced usage such as an hexagonal architecture.

</v-clicks>

---

# Example #1: Sending an email after persisting data

As an example, send an email after customer registration

---

```php {all|9|12-13|17|19|21|23-24|26}
// src/Sylius/State/Processor/CreateCustomerProcessor.php

namespace App\Sylius\State\Processor;

use Sylius\Component\Customer\Model\CustomerInterface;
use Sylius\Component\Resource\Doctrine\Common\State\PersistProcessor;
use Sylius\Component\Resource\State\ProcessorInterface;

final class CreateCustomerProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
        private PersistProcessor $decorated,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, Customer::class);
        
        $this->decorated->process($data, $operation, $context);

        // Here your logic to send a registration email.
        $this->commandBus->dispatch(new SendRegistrationEmailCommand(new CustomerId($data->id)));

        return null;
    }
}
```

---

# Use this processor on your operation.

```php {all|8|8,5}
// src/Entity/Customer.php

namespace App\Entity\Customer;

use App\Sylius\State\Processor\CreateCustomerProcessor;

#[Resource]
#[Create(processor: CreateCustomerProcessor::class)]
final class BoardGameResource implements ResourceInterface
```

---

# Example #2: Use a custom delete processor

<v-clicks>

As another example, let's configure a `DeleteBoardGameProcessor` on a `BoardGameResource` which is not a Doctrine entity.

</v-clicks>

---

```php {all|12|14|16}
// src/BoardGameBlog/Infrastructure/Sylius/State/Processor/DeleteBoardGameProcessor.php

namespace App\BoardGameBlog\Infrastructure\Sylius\State\Processor;

final class DeleteBoardGameProcessor implements ProcessorInterface
{
    public function __construct(
        private CommandBusInterface $commandBus,
    ) {
    }

    public function process(mixed $data, Operation $operation, Context $context): mixed
    {
        Assert::isInstanceOf($data, BoardGameResource::class);

        $this->commandBus->dispatch(new DeleteBoardGameCommand(new BoardGameId($data->id)));

        return null;
    }
}
```

---

# Use this processor on your operation.

```php {all|12}
// src/BoardGameBlog/Infrastructure/Sylius/Resource/BoardGameResource.php

namespace App\BoardGameBlog\Infrastructure\Sylius\Resource;

#[Resource(
    alias: 'app.board_game',
    section: 'admin',
    formType: BoardGameType::class,
    templatesDir: 'crud',
    routePrefix: '/admin',
)]
#[Delete(processor: DeleteBoardGameProcessor::class)]
final class BoardGameResource implements ResourceInterface
```
