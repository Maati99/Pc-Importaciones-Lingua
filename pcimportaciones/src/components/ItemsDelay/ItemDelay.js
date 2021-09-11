import Productos from "../Items/item";

const DelayProducto = new Promise((resolve) => {
    setTimeout(() => {
    resolve(Productos) ;
    },2000);

});

export default DelayProducto