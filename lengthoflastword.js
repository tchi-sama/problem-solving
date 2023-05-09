var lengthOfLastWord = function(s) {
    let word = "";
    let is = true ;
    let i = s.length-1;
    let isItNotASpace = false;
    while(is){
        if(s[i]!=" "){
            word= s[i] + word
            isItNotASpace= true
        }else{
            if(isItNotASpace){
            is= false
            }
        }
        if (i==0) {
            is=false
        }
        i--
    }
    return word.length
};

console.log(lengthOfLastWord("hhh"))