//Fetch the itmes from the JSON file

function loadItems(){
    return fetch('data/data.json')
    .then (response => console.log(response))
}