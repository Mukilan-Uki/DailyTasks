function isPrime(num){
    if(num<=1){
        return "You entered a wrong number";
    }
    else if(num==2){
        return "You entered a prime number";
    }
    else{
        for(let i=2; i<num; i++){
            if(num%i ===0){
                return "You entered a wrong number";
            }
            else{
                return "You entered a prime number";
            }
        }
    }
}
console.log(isPrime(2));