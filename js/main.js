
class Producto
    {
        constructor(articulo, marca, descripcion, precio, stock, vendedor)
            {
                this.articulo = articulo
                this.marca = marca
                this.descripcion = descripcion
                this.precio = precio
                this.stock = stock
                this.vendedor =  vendedor
                this.fecha = new Date()
           }
    }
 
const productos = JSON.parse(localStorage.getItem("productos")) || [];

const crearProducto = () =>
    {
        const crearProducto = document.querySelector("#crearProducto");
        crearProducto.addEventListener("submit",(e) => 
        {
            e.preventDefault();
            const articulo = e.target.children["articulo"].value.toUpperCase();
            const marca = e.target.children["marca"].value.toUpperCase();
            const descripcion = e.target.children["descripcion"].value.toUpperCase();
            const precio = parseFloat(e.target.children["precio"].value); //Input type="text" para poder trabajarlo como parseFloat
            const stock = parseInt(e.target.children["stock"].value);
            const vendedor = e.target.children["vendedor"].value;
            const producto = new Producto(articulo, marca, descripcion, precio, stock, vendedor);
            productos.push(producto);
            localStorage.setItem("productos",JSON.stringify(productos));
            crearProducto.reset();//Permite resetear el input del .html luego de la carga de un articulo
    })
}

const crearTarjeta = () =>
    {
    const divTarjetasMain = document.querySelector("#divTarjetasMain");    
    productos.forEach((producto) =>
        {
            if(producto.stock!=0)
                {    
                    const tarjeta = document.createElement("div");
                    tarjeta.className = "tarjetaProducto";
                    tarjeta.innerHTML = `
                                    <img src="https://i.ibb.co/KwbMVLm/cartuchera.jpg" alt="Imagen de cartuchera">
                                    <h3>Artículo: ${producto.articulo}</h3>
                                    <span>Marca: ${producto.marca}</span>
                                    <textarea rows="2">Descripción: ${producto.descripcion}</textarea>
                                    <span>Precio: $ ${producto.precio}.-</span>
                                    <span>Stock: ${producto.stock}</span>
                                    <button id="agregarProducto" class="boton">Agregar</button>
                                    `;
                    divTarjetasMain.append(tarjeta);
                }    
        })
    }

const agregarCarrito = () =>
    {
        const botonAgregarCarrito = document.querySelector("#agregarCarrito");
        botonAgregarCarrito.addEventListener("click",(e) =>
        {
            e.preventDefault();
        })
    }

const verProducto = () =>
    {
        const tabla = document.querySelector("#tabla");
        productos.forEach(producto =>
            {
                    const tr = document.createElement("tr");
                    tr.innerHTML =  `
                                <td>${producto.articulo}</td>
                                <td>${producto.marca}</td>
                                <td>${producto.descripcion}</td>
                                <td>${producto.precio}</td>
                                <td>${producto.stock}</td>
                                `; 
                    tabla.append(tr);
            })
    }

verProducto();
crearProducto();
crearTarjeta();
agregarCarrito();

const buscarProducto = document.querySelector("#buscarProducto");
buscarProducto.addEventListener("submit",(e) => 
        {
            e.preventDefault();
            const articulo = e.target.children["articulo"].value.toUpperCase();
            const producto = {articulo};
            console.log(producto);
            console.log("El producto " + articulo + " tiene el índice " + buscarItem(articulo));
            buscarProducto.reset();//Permite resetear el input del .html luego de la carga de un articulo
        })
