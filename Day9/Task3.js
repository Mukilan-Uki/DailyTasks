let sent="yes yes yes please please word word";

function comprest(sent){
    let word=sent.split(" ");
    let counted=new Set();

    for(let i=0; i<word.length; i++){
        if(counted.has(word[i])) continue;
        counted.add(word[i])

        let count=0;
        for(let j=0; j<word.length; j++){
            if(word[j]==word[i]){
                count++
            }
        }
        if(count>1){
            counted.add("("+count+")"+" ")
        }
    }
    let arr=[...counted].toString()
        console.log(arr)
        console.log([...counted])
}
comprest(sent)