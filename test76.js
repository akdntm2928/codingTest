function solution(target,array){
    let answer = 1000000000000000000000;
    function DFS(n,sum){
        if(sum >target) return;
        if(sum === target){
           
            answer = Math.min(answer,n);
        }else{
            for(let i = 0; i<array.length; i++){
                DFS(n+1, sum+array[i]);
            }
        }
    }
    DFS(0,0)
    return answer
}

console.log(solution(    5,[1,2,5])
    )