
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
      div.innerHTML = ` <div>
      <div class="cards-container">
        <div>
          <img src="${producto.url}" alt="">
          <h2>${producto.title}</h2>
          <p></p>
          <p id="precio">$${producto.precio}</p>
          <button onclick="comprar(${producto.id})" type="button" class="btn btn-primary">Agregar al Carrito</button>
        
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

                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title:`Agregaste ${carrito[parametro].title }` ,
                    showConfirmButton: false,
                    timer: 1500
                  })

 }

 //eliminar productos 

 function eliminar(idEliminar) {
  const eliminar = document.getElementById(`carrito-${idEliminar}`);
  eliminar.remove();
  carrito = carrito.filter(el => el.id !==idEliminar)
  numeroCarrito.innerHTML = carrito.length
  localStorage.setItem("carritoLocal", JSON.stringify(carrito));

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Seguro quieres borrar este articulo?',
    text: "No vas a recibirlo en tu compra :(",
    icon: 'warning',
    
    confirmButtonText: 'Si! Quitalo!',
    
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Eliminado',
        'Su articulo fue eliminado',
        ''
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })

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
const lista = document.getElementById("lista")

 fetch(`./prod.json`)
 .then(response => response.json())
 .then(res=> {
    res.forEach(post => {   
      const li = document.createElement("li");
      li.innerHTML = `
                  <h2>${post.title}</h2>
                  <p>${post.descripcion}</p>`;

                  lista.append(li);

             })     
 })


























