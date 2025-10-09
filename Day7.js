function generateNum(){
    let num=Math.floor(Math.random()*99999)+1;
    return num;
}

function isPrime(num){
    if(num<=1){
        return "not a prime number";
    }
    else if(num==2){
        return "a prime number";
    }
    else{
        for(let i=2; i<num; i++){
            if(num%i==0){
                return "not a prime number";
            }
            else{
                return "a prime number";
            }
        }
    }
}

function main(){
    let num=generateNum();
    let prime=isPrime(generateNum());
    console.log(num+" is "+prime)
}
main()