function interestCalculator(amount, interestRate){
    let interest=(interestRate/100)*amount*12;
    return interest;
}

function main(){
    let interestRate=3;
    let amount=100;
    let interestOfAnnual=interestCalculator(amount,interestRate);
    console.log("Annual interest is "+interestOfAnnual+"LKR");
}
main();