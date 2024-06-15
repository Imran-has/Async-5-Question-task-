//task
function fetchGreeting(): Promise<string> 

 { return new Promise((resolve) => { setTimeout(() => 

    { resolve("Hello! This is your greeting message."); }, 2000); }); } 

 fetchGreeting().then((message) => { console.log(message); });

 //chaining 
 // function keyword
 //fetchgreeting
 //return for return value
 // new promise method
 //setTimeout for delay time
 //.than direct relation from resolve