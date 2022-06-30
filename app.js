
//constructor de los articulos del carrito (ver como poner url)
class Articulos {
    constructor (id, nombre, precio, url){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
    sumarIva(){
        this.precio *= 1.21
    }
}

const articulos = [];
//push de los articulos al arry articulos
articulos.push(new Articulos(1,"maceta", 350, url="img/maceta1.png"));
articulos.push(new Articulos(2,"bebedero", 950, url="img/bebedero.jpg"));
articulos.push(new Articulos(3,"ganchitos", 150, url="img/ganchito.jpg"));
articulos.push(new Articulos(4,"palita",850, url="img/palita1.jpg"));
articulos.push(new Articulos(5,"tierra",910, url="img/sustrato.jpg"));
articulos.push(new Articulos(6,"regadera de metal",1500, url="img/regadera.jpg"));
articulos.push(new Articulos(7,"regadera de plastico",1350, url="img/regader2.jpg"));
articulos.push(new Articulos(8,"regadera de zing",2000, url="img/regader3.jpg"));

console.log(articulos)

let contenedor = document.getElementById("contenedor");

for (const articulo of articulos){

    

    let div = document.createElement("div");
    div.className = "card"
    div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="${articulo.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${articulo.nombre}</h5>
          <p class="card-text">Maceta de barro curada al horno.</p>
          <p id="precio">${articulo.precio}</p>
          <button onclick="comprar(${articulo.id})" type="button" class="btn btn-primary">Agregar al Carrito</button>
         
        </div>
      </div>
    </div>
    
    `;


  contenedor.append(div);
}

let carrito = [];
let cantidadCarrito = document.getElementById("cantidadProducto")





function comprar(id){

  
  const articulo = articulos.find(e => e.id === id);
  carrito.push(articulo);

  cantidadCarrito.innerHTML = carrito.length

  console.log(carrito)
  
  agregarAlCarrito(carrito.length -1)
  
}

let carritoDom = document.getElementById("carrito");

function agregarAlCarrito(p){
  let div = document.createElement("div");
  div.id = ` carrito-${carrito[p].id}`;
    div.className = "modificador"
    div.innerHTML = ` <p>Id: ${carrito[p].id}</p>
                      <p>${carrito[p].nombre}</p>
                      <p> Precio:$ ${carrito[p].precio}</p>
                      <button class ="btn-card" onclick = "eliminar(${carrito[p].id})">Quitar</button>`;
                      carritoDom.append(div)

                

}

console.log(carrito.length)

function eliminar(idEliminar){
  const eliminar = document.getElementById(`carrito- ${idEliminar}`);
  eliminar.remove();
  carrito = carrito.filter(e => e.id != idEliminar);
  cantidadCarrito.innerHTML = carrito.length
  localStorage.setItem("carritoVivero", JSON.stringify(carrito));
}
