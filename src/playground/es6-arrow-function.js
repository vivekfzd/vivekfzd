const square = function(x){
    return x*x;
};
console.log(square(8));

const squareArrow= (x)=> x*x;
console.log(squareArrow(8));


//retun firstName

const firstName = (fullname) => fullname.split(' ')[0]; 

console.log(firstName('Vivek Kashyap'));