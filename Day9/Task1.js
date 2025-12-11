let sent="__This is a blod text__";

function bold(sent){
    if(sent[1]=="*"){
        let word=sent.split("**");
        return "<b>"+word[1]+"</b>"
    }
    else if(sent[1]=="_"){
        let word=sent.split("__");
        return "<b>"+word[1]+"</b>"
    }
}
console.log(bold(sent))