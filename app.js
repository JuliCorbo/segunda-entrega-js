
class Productos {
constructor(id, title, precio, url) {
  this.id = id;
  this.title = title;
  this.precio = precio;
  this.url = url;
}
  sumarIva() {
    this.precio *=1.21

  }
}

//array de productos para hacer el push de los productos

const productos = [];

productos.push(new Productos(1,"maceta", 350, url="img/maceta1.png"));
productos.push(new Productos(2,"bebedero", 950, url="img/bebedero.jpg"));
productos.push(new Productos(3,"ganchitos", 150, url="img/ganchito.jpg"));
productos.push(new Productos(4,"palita",850, url="img/palita1.jpg"));
productos.push(new Productos(5,"tierra",910, url="img/sustrato.jpg"));
productos.push(new Productos(6,"regadera de metal",1500, url="img/regadera.jpg"));
 productos.push(new Productos(7,"regadera de plastico",1350, url="img/regader2.jpg"));
 productos.push(new Productos(8,"regadera de zing",2000, url="img/regader3.jpg"));


 //variables

 let container = document.getElementById("container");

 //for of para sumar iva y agregar al dom

  for(const producto of productos) {
      producto.sumarIva();
      let div = document.createElement("div");
      div.className = "card"
      div.innerHTML = ` <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
            <img src="${producto.url}" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">${producto.title}</h5>
             <p class="card-text">Maceta de barro curada al horno.</p>
             <p id="precio">$${producto.precio}</p>
             <button onclick="comprar(${producto.id})" type="button" class="btn btn-primary">Agregar al Carrito</button>
           
           </div>
         </div>
       </div>

                    `;

                    container.append(div)

 }

 //variables
 let carrito = [];
 let carritoDom = document.getElementById("carrito");
 let numeroCarrito = document.getElementById("numeroCarrito");

 //trae los productos del localStorage y lo renderiza
 carrito = JSON.parse(localStorage.getItem("carritoLocal")) || [];
 carritoLocalStorage()

//funcion compra y agrega al carrito
 function comprar (param){
  const producto = productos.find(el => el.id ===param);
  carrito.push(producto);
  numeroCarrito.innerHTML = carrito.length
  agregarCarrito(carrito.length -1)
  localStorage.setItem("carritoLocal", JSON.stringify(carrito));
 }

 //funcion agrega carrito al dom

 function agregarCarrito(parametro){
  let div = document.createElement("div");
  div.id = `carrito-${carrito[parametro].id}`;

  div.className = "carritoStyle"
  div.innerHTML = `
                  <p> Id: ${carrito[parametro].id}</p>
                  <p>${carrito[parametro].title}</p>
                  <p> $ ${carrito[parametro].precio}</p>
                  <button class="btn-card" onclick = "eliminar(${carrito[parametro].id})">Eliminar</button>
                  `;

                  carritoDom.append(div)

 }

 //eliminar productos 

 function eliminar(idEliminar) {
  const eliminar = document.getElementById(`carrito-${idEliminar}`);
  eliminar.remove();
  carrito = carrito.filter(el => el.id !==idEliminar)
  numeroCarrito.innerHTML = carrito.length
  localStorage.setItem("carritoLocal", JSON.stringify(carrito));
 }

 //renderizar el carrito en el dom

 function carritoLocalStorage(){
  numeroCarrito.innerHTML = carrito.length
        for(const prod of carrito) {
          let div = document.createElement("div");
      div.id = `carrito-${prod.id}`;
      div.innerHTML = `
                      <p> Id: ${prod.id}</p>
                      <p> Usted agrego :${prod.title}</p>
                      <p>$${prod.precio}</p>
                      <button class="btn-card" onclick = "eliminar(${prod.id})"Eliminar</button>
                      `; 
                    carritoDom.append(div)
                    }

      
 }



























































//constructor de los articulos del carrito (ver como poner url)
// class Articulos {
//     constructor (id, nombre, precio, url){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.url = url;
//     }
//     sumarIva(){
//         this.precio *= 1.21
//     }
// }

// const articulos = [];
//push de los articulos al arry articulos
// articulos.push(new Articulos(1,"maceta", 350, url="img/maceta1.png"));
// articulos.push(new Articulos(2,"bebedero", 950, url="img/bebedero.jpg"));
// articulos.push(new Articulos(3,"ganchitos", 150, url="img/ganchito.jpg"));
// articulos.push(new Articulos(4,"palita",850, url="img/palita1.jpg"));
// articulos.push(new Articulos(5,"tierra",910, url="img/sustrato.jpg"));
// articulos.push(new Articulos(6,"regadera de metal",1500, url="img/regadera.jpg"));
// articulos.push(new Articulos(7,"regadera de plastico",1350, url="img/regader2.jpg"));
// articulos.push(new Articulos(8,"regadera de zing",2000, url="img/regader3.jpg"));

// console.log(articulos)

// let contenedor = document.getElementById("contenedor");

// for (const articulo of articulos){

    

//     let div = document.createElement("div");
//     div.className = "card"
//     div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-4">
//     <div class="col">
//       <div class="card h-100">
//         <img src="${articulo.url}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${articulo.nombre}</h5>
//           <p class="card-text">Maceta de barro curada al horno.</p>
//           <p id="precio">${articulo.precio}</p>
//           <button onclick="comprar(${articulo.id})" type="button" class="btn btn-primary">Agregar al Carrito</button>
         
//         </div>
//       </div>
//     </div>
    
//     `;


//   contenedor.append(div);
// }

// let carrito = [];
// let cantidadCarrito = document.getElementById("cantidadProducto")





// function comprar(id){

  
//   const articulo = articulos.find(e => e.id === id);
//   carrito.push(articulo);

//   cantidadCarrito.innerHTML = carrito.length

//   console.log(carrito)
  
//   agregarAlCarrito(carrito.length -1)
  
// }

// let carritoDom = document.getElementById("carrito");

// function agregarAlCarrito(p){
//   let div = document.createElement("div");
//   div.id = ` carrito-${carrito[p].id}`;
//     div.className = "modificador"
//     div.innerHTML = ` <p>Id: ${carrito[p].id}</p>
//                       <p>${carrito[p].nombre}</p>
//                       <p> Precio:$ ${carrito[p].precio}</p>
//                       <button id="btnChau class ="btn-card" "eliminar(${carrito[p].id})">Quitar</button>`;
//                       carritoDom.append(div)

                

// }

// console.log(carrito.length)








  // const btnEliminar = document.getElementById("btnChau");
  // btnEliminar.addEventListener("click", ()=>{
  //   carrito = [];

      

  // })



    // const botonSumar = document.getElementById("btnSumar")
    // botonSumar.addEventListener("click", sumarTodo)

    // function sumarTodo(e){

    //   for (const articulo of carrito){

    //     articulo.precio
    //     console.log(carrito)


    //   }
    // }


 




//  function eliminar(idEliminar){
//    const eliminar = document.getElementById(`carrito- ${idEliminar}`);
//    eliminar.remove();
//    carrito = carrito.filter(e => e.id != idEliminar);
//    cantidadCarrito.innerHTML = carrito.length
//    localStorage.setItem("carritoVivero", JSON.stringify(carrito));
//  }




