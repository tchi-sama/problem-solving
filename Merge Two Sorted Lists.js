var mergeTwoLists = function(list1, list2) {
    let arr = [...list1,...list2] ;

    for (let i = arr.length; i > 0 ; i--) {
        for(let j = 0; j<i ; j++){
            if(arr[j]>arr[j+1]){
                let min = arr[j+1]
                let max = arr[j]
                arr[j]= min ;
                arr[j+1]= max ;
            }
        }
    }

    return arr
};

console.log(mergeTwoLists([0],[]))