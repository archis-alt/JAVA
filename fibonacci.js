// function fibonacci(n){
//     var output = [];
//     if(n === 0){
//         output = [0];
//     } else if(n === 1){
//         output = [0,1];
//     } else{
//         output = [0,1];
//         for(i=2; i<n; i++){
//             output.push(output[output.length - 2] + output[output.length - 1]);
//         }
//     }
//     return output;
// }
// output = fibonacci(10);
// console.log(output);

// function* generator(){
//     yield 10;
//     yield 20;
// }
// const result = generator(); // generator function returns a generator object.
// // console.log(result);
// console.log(result.next().value);
// console.log(result.next().value);

// function* nextNatural(){
//     let naturalNumber = 1;

//     while(true){
//         yield naturalNumber++;
//     }
// }
// const naturalNumbers = nextNatural();
// for(let i =0;i<=10;i++){
//     console.log(naturalNumbers.next().value);
// }

// for(let i =1; i<=10; i++){
//     console.log("Hello");
// }

const person = {
    name: "Archis",
    age: 23,
    city: "Chennai"
};

for(let key in person){
    console.log(key+ " : "+person[key]);
}

const person2 = {
    name: "Deshna",
    getName : function(){
        console.log(`Hi, ${this.name}`);
    }
}
const fn = person2.getName;
console.log(typeof(fn));
fn.call(person2);

// person2.getName();


