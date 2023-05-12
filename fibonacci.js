function fibonacci(n){
    var output = [];
    if(n === 0){
        output = [0];
    } else if(n === 1){
        output = [0,1];
    } else{
        output = [0,1];
        for(i=2; i<n; i++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}
output = fibonacci(10);
console.log(output);