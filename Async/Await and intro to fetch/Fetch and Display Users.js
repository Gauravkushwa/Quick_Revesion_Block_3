async function FetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log("the name of the users: ", data.name)
}

FetchData();