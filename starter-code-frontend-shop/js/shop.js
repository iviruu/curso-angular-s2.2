// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

const listaCompra = document.getElementById('cart_list');
// Exercise 1 añado el descuento para usar en mas adelante 
function buy(id) {
    let objeto = products.find(elemento => elemento.id === id)
    let objetoInCart = cart.find(elementoCart => elementoCart.id === id)
    if(objetoInCart){
        objetoInCart.cantidad++;
    }
    else {
        cart.push({...objeto, cantidad : 1, conDescuento : 0});
    }
    applyPromotionsCart(cart)
}


// Exercise 2
function cleanCart() {
    cart.length = 0;
    listaCompra.innerHTML= ''
}

// Exercise 3 añado la promo de exercici 4 a calculacion total 
function calculateTotal(cart) {
    total = 0;
    applyPromotionsCart(cart);
    cart.forEach(objetoInCart => {
        total += objetoInCart.cantidad * objetoInCart.conDescuento
    });
    return total;
}

// Exercise 4
function applyPromotionsCart(cart) {
    cart.forEach(elemento => {
        if (elemento.offer && elemento.cantidad >= elemento.offer.number){
            conDescuento1= elemento.price - (elemento.price * elemento.offer.percent/100)
            elemento.conDescuento= parseFloat(conDescuento1.toFixed(2))
        }
        else {
            elemento.conDescuento = elemento.price
        };
    });
}

// Exercise 5
function printCart() {
    listaCompra.innerHTML= ''
    cart.forEach(producto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${producto.name}</th>
		<td>${producto.price}</td>
		<td>${producto.cantidad}</td>
		<td>${producto.conDescuento*producto.cantidad}</td>
        `;
        listaCompra.appendChild(tr)
    })
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    let indiceEnCarrito = cart.findIndex(elementoCart => elementoCart.id === id);
    
    if (indiceEnCarrito !== -1){
        if (cart[indiceEnCarrito].cantidad > 1) {
            cart[indiceEnCarrito].cantidad--;
    }
        else {
        cart.splice(indiceEnCarrito,1);
        }
    }
}

function open_modal() {
    printCart();
}