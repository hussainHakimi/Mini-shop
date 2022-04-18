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

const productList = {
    products : [
        new Product('Pillow', 'images/depositphotos_10404781-stock-photo-bright-pillows-isolated-on-white.jpg', 'Beutiful Pillow',20 ),
        new Product('Carpet', 'images/carpet.jpg', 'Beutiful carpet',202 )
    ],

    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}}">
                    <div class="prodcut-item__content">
                        <h2>${prod.title}</h2>
                        <h3>$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};
productList.render();


