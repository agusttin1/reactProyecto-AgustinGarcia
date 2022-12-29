
const RndomElements = (arr) =>{
let nwRes
    let y = arr.splice(Math.floor(Math.random() * arr.length), 1);
    let x = arr.splice(Math.floor(Math.random() * arr.length), 1);
    let z = arr.splice(Math.floor(Math.random() * arr.length), 1);
    let xy = arr.splice(Math.floor(Math.random() * arr.length), 1);

    return  nwRes = y.concat(x, z, xy);
}


export default RndomElements
