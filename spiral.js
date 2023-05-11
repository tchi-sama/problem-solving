var removeDuplicates = function(nums) {
    let array = [];
    for(let i = 0; i<nums.length ; i++){
        let is = false;
        for(let j=0;j<array.length;j++){
            if(nums[i]==array[j]){
                is=true
            }
        }
        if( !is){
            array.push(nums[i])
        }
    }
    nums=array
    return nums;
};
console.log(removeDuplicates([1,2,3,3]))















loop(4,(i)=>{
    console.log("hello world");
})



console.log( and(true,false,true))
console.log( or(true,false,false))