async function FetchData(){
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = await res.json();
        console.log("product list is following", result)
        getTotalPrice(result);
    } catch (error) {
        console.log("error in fetch data please try after some time", error)
    }
}
FetchData();

async function getTotalPrice(products){
   let totalPrice = products.reduce((curr, product) => product.price + curr, 0)
    console.log('TotalPrice of products', totalPrice)
}