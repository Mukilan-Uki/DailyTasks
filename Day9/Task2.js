let arr=["a","g","f","a","f","f","g"];

function mostFre(arr){
    let fre=[];
    let letter
    let num
    for(let i=0; i<arr.length; i++){
        let count = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i]==arr[j]){
                count++
            }
        }
        fre.push(count)
        console.log(fre)
        num=fre[0]
        let ind;
        for(let i=0; i<fre.length; i++){
            if(num<fre[i]){
                num=fre[i]
                ind = fre.indexOf(num)
                letter=arr[ind]
            }
        }
    }
    console.log(letter)
}
mostFre(arr)