// 문제 설명
// Finn은 편의점에서 야간 아르바이트를 하고 있습니다. 야간에 손님이 너무 없어 심심한 Finn은 손님들께 거스름돈을 n 원을 줄 때 방법의 경우의 수를 구하기로 하였습니다.

// 예를 들어서 손님께 5원을 거슬러 줘야 하고 1원, 2원, 5원이 있다면 다음과 같이 4가지 방법으로 5원을 거슬러 줄 수 있습니다.

// 1원을 5개 사용해서 거슬러 준다.
// 1원을 3개 사용하고, 2원을 1개 사용해서 거슬러 준다.
// 1원을 1개 사용하고, 2원을 2개 사용해서 거슬러 준다.
// 5원을 1개 사용해서 거슬러 준다.
// 거슬러 줘야 하는 금액 n과 Finn이 현재 보유하고 있는 돈의 종류 money가 매개변수로 주어질 때, Finn이 n 원을 거슬러 줄 방법의 수를 return 하도록 solution 함수를 완성해 주세요.

// 제한 사항
// n은 100,000 이하의 자연수입니다.
// 화폐 단위는 100종류 이하입니다.
// 모든 화폐는 무한하게 있다고 가정합니다.
// 정답이 커질 수 있으니, 1,000,000,007로 나눈 나머지를 return 해주세요.
// 입출력 예
// n	money	result
// 5	[1,2,5]	4
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

function solution(k,arr){
    let n = arr.length;
    let ch = Array.from({length:n},()=>0)
    let tmp =[];
    function DFS(v,sum){
        if(sum>k)  return
        if(k==sum){
            console.log(tmp);
        }else{
            for(let i = 0; i<n; i++){
                if(ch[i] ===0){
                    ch[i] =1
                    tmp.push(arr[i]);
                    DFS(i,sum+arr[i]);
                    tmp.pop();
                    ch[i] =0
                }
            }
        }

    }

    DFS(0,0)

}

console.log(solution(
    5,[1,2,5]
))