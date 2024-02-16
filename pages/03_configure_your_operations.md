# Configure your operations

<v-clicks>

Now, with your fresh new resource, you have to define the operations that you need to implement.
There are some basic CRUD operations and more.

</v-clicks>

---

# Index operation

<v-clicks>

`Index` operation allows to browse all items of your resource.

```php {all|8|8,3}
namespace App\Entity;

use Sylius\Resource\Metadata\Index;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[Index]
class Book implements ResourceInterface
{
}

```

</v-clicks>

---

# Index operation

<v-clicks>

It will configure this route for your `index` operation.

| Name           | Method | Path   |
|----------------|--------|--------|
| app_book_index | GET    | /books |

</v-clicks>

---

# Index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resources         | Pagerfanta\Pagerfanta                     |
| books             | Pagerfanta\Pagerfanta                     |
| operation         | Sylius\Resource\Metadata\Index            |
| resource_metadata | Sylius\Resource\Metadata\ResourceMetadata |
| app               | Symfony\Bridge\Twig\AppVariable           |

</v-clicks>

---

# Use a grid for your index operation

<v-clicks>

To use a grid for you operation, you need to install
the [Sylius grid package](https://github.com/Sylius/SyliusGridBundle/)

```php {all|9-10|9-10,3|11-12|11-12}
namespace App\Entity;

use App\Grid\BookGrid;
use Sylius\Resource\Metadata\Index;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
// You can use either the FQCN of your grid
#[Index(grid: BookGrid::class)]
// Or you can use the grid name
#[Index(grid: 'app_book')]
class Book implements ResourceInterface
{
}

```

</v-clicks>

---

# Use a grid for your index operation

<v-clicks>

On your Twig template, these variables are available

| Name              | Type                                                    |
|-------------------|---------------------------------------------------------|
| resources         | Sylius\Bundle\ResourceBundle\Grid\View\ResourceGridView |
| books             | Sylius\Bundle\ResourceBundle\Grid\View\ResourceGridView |
| operation         | Sylius\Resource\Metadata\Index                          |
| resource_metadata | Sylius\Resource\Metadata\ResourceMetadata               |
| app               | Symfony\Bridge\Twig\AppVariable                         |

The iterator for your books will be available as `books.data` or `resources.data`.

</v-clicks>

---

# Create operation

<v-clicks>

`Create` operation allows to add a new item of your resource.

```php {all|8|8,3}
namespace App\Entity;

use Sylius\Resource\Metadata\Create;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[Create]
class Book implements ResourceInterface
{
}

```

</v-clicks>

---

# Create operation

It will configure this route for your `create` operation.

| Name            | Method    | Path       |
|-----------------|-----------|------------|
| app_book_create | GET, POST | /books/new |

---

# Create operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\Form\BookType                         |
| resource          | App\Entity\Book                           |
| book              | App\Entity\Book                           |
| operation         | Sylius\Resource\Metadata\Create           |
| resource_metadata | Sylius\Resource\Metadata\ResourceMetadata |
| app               | Symfony\Bridge\Twig\AppVariable           |

---

# Update operation

`Update` operation allows to edit an existing item of your resource.

```php {all|8|8,3}
namespace App\Entity;

use Sylius\Resource\Metadata\Update;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[Update]
class Book implements ResourceInterface
{
}

```

---

# Update operation

It will configure this route for your `update` operation.

| Name            | Method          | Path             |
|-----------------|-----------------|------------------|
| app_book_update | GET, PUT, PATCH | /books/{id}/edit |

---

# Update operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| form              | App\Form\BookType                         |
| resource          | App\Entity\Book                           |
| book              | App\Entity\Book                           |
| operation         | Sylius\Resource\Metadata\Update           |
| resource_metadata | Sylius\Resource\Metadata\ResourceMetadata |
| app               | Symfony\Bridge\Twig\AppVariable           |

---

# Delete operation

`Delete` operation allows to remove an existing item of your resource.

```php {all|8|8,3}
namespace App\Entity;

use Sylius\Resource\Metadata\Delete;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[Delete]
class Book implements ResourceInterface
{
}

```

---

# Delete operation

It will configure this route for your `delete` operation.

| Name            | Method | Path        |
|-----------------|--------|-------------|
| app_book_delete | DELETE | /books/{id} |

---

# Bulk delete operation

`Bulk delete` operation allows to remove several items of your resource at the same time.

```php {all|8|8,3}
namespace App\Entity;

use Sylius\Resource\Metadata\BulkDelete;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[BulkDelete]
class Book implements ResourceInterface
{
}

```

---

# Bulk delete operation

It will configure this route for your `bulk_delete` operation.

| Name                 | Method | Path               |
|----------------------|--------|--------------------|
| app_book_bulk_delete | DELETE | /books/bulk_delete |    

---

# Show operation

`Show` operation allows to view details of an item.

```php {all|8|8,3}
namespace App\Entity;

use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Metadata\Show;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[Show]
class Book implements ResourceInterface
{
}

```

---

# Show operation

It will configure this route for your `show` operation.

| Name          | Method | Path        |
|---------------|--------|-------------|
| app_book_show | GET    | /books/{id} |    

---

# Show operation

On your Twig template, these variables are available

| Name              | Type                                      |
|-------------------|-------------------------------------------|
| resource          | App\Entity\Book                           |
| book              | App\Entity\Book                           |
| operation         | Sylius\Resource\Metadata\Show             |
| resource_metadata | Sylius\Resource\Metadata\ResourceMetadata |
| app               | Symfony\Bridge\Twig\AppVariable           |

---

# State machine operation

`State machine` operation allows to apply a transition to an item of your resource.

As an example, we add a `publish` operation to our book resource.

```php {all|8|8,3}
namespace App\Entity;

use Sylius\Resource\Metadata\ApplyStateMachineTransition;
use Sylius\Resource\Metadata\AsResource;
use Sylius\Resource\Metadata\Show;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource]
#[ApplyStateMachineTransition(stateMachineTransition: 'publish')]
class Book implements ResourceInterface
{
}

```

---

# State machine operation

It will configure this route for your `apply_state_machine_transition` operation.

| Name             | Method | Path                |
|------------------|--------|---------------------|
| app_book_publish | GET    | /books/{id}/publish |    

---

# Configure the templates' dir

<v-clicks>

It defines the templates directory for your operations.

As an example, we defines `index`, `create`, `update` and `show` operations to our book resource.

```php {all|10}
namespace App\Entity;

use Sylius\Resource\Metadata\Create;
use Sylius\Resource\Metadata\Index;
use Sylius\Resource\Metadata\Resource;
use Sylius\Resource\Metadata\Show;
use Sylius\Resource\Metadata\Update;
use Sylius\Resource\Model\ResourceInterface;

#[AsResource(templatesDir: 'book')]
#[Index]
#[Create]
#[Update]
#[Show]
class Book implements ResourceInterface
{
}

```

</v-clicks>

---

# Configure the templates' dir

| Operation | Template Path                    |
|-----------|----------------------------------|
| index     | templates/books/index.html.twig  |  
| create    | templates/books/create.html.twig |   
| update    | templates/books/update.html.twig |   
| show      | templates/books/show.html.twig   |

---

# Configure the routes' prefix

<v-clicks>

It adds a prefix to the path for each operation.

```php {all|5}
namespace App\Entity;

// [...]

#[AsResource(routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]
#[Show]
class Book implements ResourceInterface
{
}

```

</v-clicks>


---

# Configure the routes' prefix

| Name                 | Method          | Path                     |
|----------------------|-----------------|--------------------------|
| app_book_index       | GET             | /admin/books/            |
| app_book_create      | GET, POST       | /admin/books/new         |                     
| app_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_book_delete      | DELETE          | /admin/books/{id}        |
| app_book_bulk_delete | DELETE          | /admin/books/bulk_delete |               
| app_book_show        | GET             | /admin/books/{id}        |

---

# Configure the section

It changes the route name for each operation.

```php {all|5|5,12}
namespace App\Entity;

// [...]

#[AsResource(section: 'admin', routePrefix: 'admin')]
#[Index]
#[Create]
#[Update]
#[Delete]
#[BulkDelete]

#[AsResource(section: 'shop')]
#[Index]
#[Show]
class Book implements ResourceInterface
{
}

```

---

# Configure the section

| Name                       | Method          | Path                     |
|----------------------------|-----------------|--------------------------|
| app_admin_book_index       | GET             | /admin/books/            |
| app_admin_book_create      | GET, POST       | /admin/books/new         |                     
| app_admin_book_update      | GET, PUT, PATCH | /admin/books/{id}/edit   |        
| app_admin_book_delete      | DELETE          | /admin/books/{id}        |
| app_admin_book_bulk_delete | DELETE          | /admin/books/bulk_delete |    
| app_shop_book_index        | GET             | /books/                  |
| app_shop_book_show         | GET             | /books/{id}              |
