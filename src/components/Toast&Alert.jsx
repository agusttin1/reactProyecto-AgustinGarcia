import swal from 'sweetalert';

export const AlertClear = (ClearCart)=>{
  swal({
    title: "Esta seguro que quiere vaciar el carrito?",
    text: "Perdera Todos los productos seleccionados!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Carrito Vacio!", {
        icon: "success",
      });
      ClearCart()
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}


export const AlertOrder = (res)=>{
  swal({
    title: "Compra Con Exito!",
    text: `Su orden de compra ${res.id}`,
    icon: "success",
    button: "OK!",
  });
}
