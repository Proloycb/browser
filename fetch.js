console.log(11111);
console.log(22222);
setTimeout(() => console.log('aaaaaa'),4000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json));
console.log(33333);
console.log(44444);