// const getData = async() => {
//     var data = await 'my data'
//     return data
// }

// getData().then(data => console.log(data))

async function getData(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let formatData = await response.json()
        console.log(formatData);
        
    } catch (error) {
        console.log(error);
    }
}
getData()
console.log('1');