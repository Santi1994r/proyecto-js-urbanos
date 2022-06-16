//Array con objetos
const remeras = [{
        id: 1,
        producto: "remera",
        precio: 2000,
        talle: ["S", "M", "L", "XL"],
        modelo: "con estampa",
        color: "rojo"
    },
    {
        id: 2,
        producto: "remera",
        precio: 1800,
        talle: "L",
        modelo: "algodon elastizado",
        color: ["roja", "negra", "blanca", "azul"]
    },
    {
        id: 3,
        producto: "remera",
        precio: 1600,
        talle: ["S", "M", "L", "XL"],
        modelo: "algodon",
        color: ["roja", "negra", "blanca", "azul"]
    },
    {
        id: 4,
        producto: "remera",
        precio: 1600,
        talle: ["M", "L", "XL"],
        modelo: "algodon",
        color: ["roja", "negra", "blanca", "azul"]
    },
    {
        id: 5,
        producto: "remera",
        precio: 1600,
        talle: ["S", "M", "L", "XL"],
        modelo: "lisa",
        color: ["roja", "negra", "blanca", "azul"]
    },
    {
        id: 6,
        producto: "remera",
        precio: 2200,
        talle: ["S", "M", "L", "XL"],
        modelo: "manga larga",
        color: ["roja", "negra", "blanca", "azul"]
    }
];

const camperas = [{
        id: 001,
        producto: "campera",
        precio: 6000,
        talle: "XL",
        modelo: "con plumas",
        color: "negro"
    },
    {
        id: 002,
        producto: "campera",
        precio: 6000,
        talle: ["S", "M", "L", "XL"],
        modelo: "con plumas",
        color: "verde"
    },
    {
        id: 003,
        producto: "campera",
        precio: 8000,
        talle: ["S", "M", "L", "XL"],
        modelo: "parka",
        color: ["negra", "azul"]
    },
    {
        id: 004,
        producto: "campera",
        precio: 7500,
        talle: ["M", "L", "XL"],
        modelo: "con peluche",
        color: ["negra", "azul"]
    }
];

const camisas = [{
        id: 101,
        producto: "camisa",
        precio: 4000,
        talle: "L",
        modelo: "lisa",
        color: "negro"
    },
    {
        id: 102,
        producto: "camisa",
        precio: 4500,
        talle: ["S", "M", "L", "XL"],
        modelo: "rallada",
        color: ["negra", "blanca"]
    },
    {
        id: 103,
        producto: "camisa",
        precio: 4200,
        talle: ["S", "M", "L", "XL"],
        modelo: "lisa",
        color: ["negra", "blanca"]
    }
];

const buzos = [{
        id: 21,
        producto: "buzo",
        precio: 4300,
        talle: "S",
        modelo: "con capucha",
        color: "negro"
    },
    {
        id: 22,
        producto: "buzo",
        precio: 4500,
        talle: "S",
        modelo: "con estampa",
        color: "verde"
    },
    {
        id: 23,
        producto: "buzo",
        precio: 4000,
        talle: "L",
        modelo: "liso",
        color: "negro"
    }
]





let preguntaBienvenida = "";
//funcion con la primera pregunta
function preguntaUno() {
     preguntaBienvenida = prompt("Bienvenidos a Urbanos Clothing \n Estos son los productos que tenemos por el momento: \n -buzos \n -camperas \n -remeras \n -camisas \n ¿Que producto desea ver? \n -salir");
}


//COMIENZA EL PROGRAMA
let carrito = [];
let agregarProducto = (id, cantidad, nombreArray) => {
    let productoEncontrado = nombreArray.find(el => el.id === id);
    let productoCarrito = carrito.find(el => el.id === id);
    let productoAAgregar = new nuevoObjeto(productoEncontrado.id,productoEncontrado.producto,productoEncontrado.precio,productoEncontrado.talle,productoEncontrado.modelo,productoEncontrado.color);
    
    if (productoCarrito === undefined) {
        let productoNuevo = {
            ...productoAAgregar,
            cantidad: cantidad,
            precioTotal: productoAAgregar.precio * cantidad
        }
        carrito.push(productoNuevo);
    } else {
        let indice = carrito.findIndex(elem => elem.id === id);
        carrito[indice].cantidad = carrito[indice].cantidad + cantidad
        carrito[indice].precioTotal = carrito[indice].precioTotal + productoEncontrado.precio * cantidad
    }
}

function nuevoObjeto(id,producto,precio,talle,modelo,color){
    this.id = id,
    this.producto = producto,
    this.precio = precio,
    this.talle = talle,
    this.modelo = modelo,
    this.color = color
}

while (preguntaBienvenida !== "salir" || preguntaBienvenida !== "SALIR") {
    preguntaUno();
    if (preguntaBienvenida === "remeras" || preguntaBienvenida === "REMERAS" || preguntaBienvenida === "remera" || preguntaBienvenida === "REMERA") {
        let idRemeras = Number(prompt("Ingrese el codigo de la remera a comprar: " + "\n" + remeras.map(el => `\n codigo: ${el.id} - modelo: ${el.modelo}`)));
        let cantidadRemeras = Number(prompt("Cuantas remeras quiere comprar?"));
        agregarProducto(idRemeras, cantidadRemeras, remeras);
    } else if (preguntaBienvenida === "buzos" || preguntaBienvenida === "BUZOS" ||
        preguntaBienvenida === "buzo" || preguntaBienvenida === "BUZO") {

        let idBuzos = Number(prompt("Ingrese el codigo del buzo a comprar: " + "\n" + buzos.map(el => `\n codigo: ${el.id} - modelo: ${el.modelo}`)));
        let cantidadBuzos = Number(prompt("Cuantos buzos quiere comprar?"));
        agregarProducto(idBuzos, cantidadBuzos, buzos);

    } else if (preguntaBienvenida === "camisas" || preguntaBienvenida === "CAMISAS" || preguntaBienvenida === "camisa" || preguntaBienvenida === "CAMISA") {
        let idCamisa = Number(prompt("Ingrese el codigo de la camisa a comprar: " + "\n" + camisas.map(el => `\n codigo: ${el.id} - modelo: ${el.modelo}`)));
        let cantidadCamisas = Number(prompt("Cuantos camisas quiere comprar?"));
        agregarProducto(idCamisa, cantidadCamisas, camisas);
    } else if (preguntaBienvenida === "camperas" || preguntaBienvenida === "CAMPERAS" || preguntaBienvenida === "campera" || preguntaBienvenida === "CAMPERA") {
        let idcampera = Number(prompt("Ingrese el codigo de la campera a comprar: " + "\n" + camperas.map(el => `\n codigo: ${el.id} - modelo: ${el.modelo}`)));
        let cantidadCamperas = Number(prompt("Cuantas camperas quiere comprar?"));
        agregarProducto(idcampera, cantidadCamperas, camperas);
    } else if (preguntaBienvenida === "salir" || preguntaBienvenida === "SALIR") {

        alert("gracias por su compra. Su recibo es: " +
            "Productos :" + "\n" +
            "\n" + carrito.map((el) =>  ` \n Cantidad: ${el.cantidad} - Nombre: ${el.producto} ${el.modelo} - Precio x unidad: $${el.precio} - Precio total: $${el.precioTotal}`)
            + "\n" +
            "Costo Total de la compra: " + "$" + carrito.reduce((acc, { precioTotal }) => acc + precioTotal,0))
            break;
    } else {
        alert("Opcion incorrecta");

    }
}

console.log(carrito);