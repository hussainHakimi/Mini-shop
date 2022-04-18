class Product {
    title = "DEFAULT";
    imageUrl;
    description;
    price;


constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
    }
}

class ShoppingCart {
    items = [];


    render(){
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        return cartEl;
    }
}

class ProductItme {
    constructor(product){
        this.product = product;
    }

    addtoCart(){
        console.log('Product added to cart');
        console.log(this.product);
    }

    render(){
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}}">
                <div class="prodcut-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addtoCart.bind(this));
        return prodEl;
    }
}


class ProductList {
    products = [
        new Product('Pillow', 'images/depositphotos_10404781-stock-photo-bright-pillows-isolated-on-white.jpg', 'Beutiful Pillow',20 ),
        new Product('Carpet', 'images/carpet.jpg', 'Beutiful carpet',202 )
    ];

    constructor(){}
        render(){
            const prodList = document.createElement('ul');
            prodList.className = 'product-list';
            for(const prod of this.products){
                const productItem = new ProductItme(prod);
                const prodEl = productItem.render();
                prodList.append(prodEl);
            }
            return prodList;
        }
}

class Shop{
    
    render(){
        const renderHook = document.getElementById('app');

        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

const shop = new Shop();
shop.render();


