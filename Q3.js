function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfuuly");
        }, 1000);
    });
}
fetchData().then((message) => {
    console.log(message);
});
export {};
//chaining 
// function keyword
//creating the promise
//fetchdata function name 
//return for return value
// new promise method
//setTimeout for delay time
//.than direct relation from resolve
//consuming the promise from .then
