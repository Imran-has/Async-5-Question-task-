//task
function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("Hello! This is your greeting message."); }, 2000);
    });
}
fetchGreeting().then((message) => { console.log(message); });
export {};
