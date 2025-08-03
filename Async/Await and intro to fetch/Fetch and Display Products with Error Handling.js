async function FetchData(){
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = await res.json();
        console.log("product list is following", result)
    } catch (error) {
        console.log("error in fetch data please try after some time", error)
    }
}
FetchData();