import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import toast from "react-hot-toast";
import { createOrderFireBase } from "../utils/fetchFromFirebase";

const MySwal = withReactContent(Swal);

export const AlertClear = (setCartList) => {
  MySwal.fire({
    title: "Estas seguro que quiere vaciar el carrito?",
    text: "Perderas todos los productos seleccionados!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si,Vaciar Carrito!",
  }).then((result) => {
    if (result.isConfirmed) {
      setCartList([]);
      Swal.fire(
        "Carrito vacio!",
        "Vuelve al inicio para poder agregar productos.",
        "success"
      );
    }
  });
};
export const NotifyDelete = () => {
  toast.error("Producto eliminado", {
    duration: 1000,
    position: "bottom-right",
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
};

export const NotifyOrder = (order, updateStock, ClearCart) => {
  toast.promise(
    createOrderFireBase(order),
    {
      loading: "Creando Orden",
      success: (data) =>
        `orden ${data.id} creada. Muchas gracias por su compra`,
      error: "error when fetching",
    },
    {
      position: "top-center",
    },
    {
      success: {
        uStock: updateStock(),
        cCart: ClearCart(),
        duration: 1500,
      },
    },
    {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    }
  );
};
