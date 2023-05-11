const a = [
    [1,1,0,0,0,0],
    [0,1,1,1,1,0],
    [0,0,1,0,1,0],
    [1,1,0,0,0,0],
    [1,0,1,1,1,0],
    [1,0,0,0,1,1],
    [1,0,1,0,1,1],
    [1,0,1,1,1,1],
    [1,0,0,0,1,1],
    [1,0,1,0,1,1],
    [1,0,1,0,1,1],
]

function removeIslands(matrix){

    let result = []
    for (let i = 0; i < matrix.length; i++) {
        let row = []
        for (let j = 0; j < matrix[0].length; j++) {
            row.push(0)
        } 
        result.push(row)
    }

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            if (y%(matrix.length-1)==0||x%(matrix[0].length-1)==0) {
                result[y][x]=matrix[y][x]
            } 
        }
    }

    const expand=(x,y)=>{
        if(result[y][x]!=1){
            result[y][x]=1
            if(x>0){
                if(matrix[y][x-1]==1){
                    expand(x-1,y)
                }
            }
            if(x<matrix[0].length-1){
                if(matrix[y][x+1]==1){
                    expand(x+1,y)
                }
            }
            if(y>0){
                if(matrix[y-1][x]==1){
                    expand(x,y-1)
                }
            }
            if(y<matrix.length-1){
                if(matrix[y+1][x]==1){
                    expand(x,y+1)
                }
            }
        }
    }

    for (let y = 0; y < result.length; y++) {
        for (let x = 0; x < result[0].length; x++) {
            if (result[y][x]==1) {
                if(x==0){
                    if(matrix[y][x+1]){
                        expand(x+1,y)
                    }
                }
                if(x==result[0].length-1){
                    if(matrix[y][x-1]){
                        expand(x-1,y)
                    }
                }
                if(y==0){
                    if(matrix[y+1][x]){
                    expand(x,y+1)
                    }
                }
                if(y==result.length-1){
                    if(matrix[y-1][x]){
                    expand(x,y-1)
                    }
                }
            } 
        }
    }
    

    return result
}
console.log(removeIslands(a))