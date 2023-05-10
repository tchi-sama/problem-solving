var addTwoNumbers = function(l1, l2) {
    let number1 = 0;
    let number2 = 0;
    for (let i = 0; i < l1.length; i++) {
       number1+= l1[i] * (10 **(l1.length-(l1.length-i))) 
    }
    for (let i = 0; i < l2.length; i++) {
       number2+= l2[i] * (10 **(l2.length-(l2.length-i))) 
    }
    let result = number1 + number2;

    let resultArray = []


    return {number1,number2}
};


console.log(addTwoNumbers([2,4,3], [5,6,4]))