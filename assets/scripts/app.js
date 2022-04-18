class Product {
    title = "Hello Class";
    imageUrl;
    description;
    price;
}


const productList = {
    products : [
        {
        title: 'Pillow',
        imageUrl: 'depositphotos_10404781-stock-photo-bright-pillows-isolated-on-white.jpg',
        price : 20,
        description : 'Beutiful Pillow'
        }, 
        {
        title: 'Carpet',
        imageUrl: 'carpet.jpg',
        price : 203,
        description : 'Beutiful Carpet'
        }
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
                        <h3>/$${prod.price}</h3>
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


