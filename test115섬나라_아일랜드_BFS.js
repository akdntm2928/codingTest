// 섬나라 아일랜드(DFS 활용)
// N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다. 각 섬은 1로 표시되어 상하좌
// 우와 대각선으로 연결되어 있으며, 0은 바다입니다. 섬나라 아일랜드에 몇 개의 섬이 있는지
// 구하는 프로그램을 작성하세요.
// 1 1 0 0 0 1 0
// 0 1 1 0 1 1 0
// 0 1 0 0 0 0 0
// 0 0 0 1 0 1 1
// 1 1 0 1 1 0 0
// 1 0 0 0 1 0 0
// 1 0 1 0 1 0 0
// 만약 위와 같다면
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다.
// 두 번째 줄부터 격자판 정보가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 섬의 개수를 출력한다.
// ▣ 입력예제 1
// 7
// 1 1 0 0 0 1 0
// 0 1 1 0 1 1 0
// 0 1 0 0 0 0 0
// 0 0 0 1 0 1 1
// 1 1 0 1 1 0 0
// 1 0 0 0 1 0 0
// 1 0 1 0 1 0 0
// ▣ 출력예제 1
// 5


function solution(board){
    let n = board.length;
    let dx = [-1,-1,0,1,1,1,0,-1];
    let dy = [0,1,1,1,0,-1,-1,-1];
    let answer = 0;
    let queue = [];
    
    function BFS(){
        while(queue.length){
            let nxny =queue.shift();
            for(let k = 0; k<8; k++){
                let nx = nxny[0]+dx[k];
                let ny = nxny[1]+dy[k];

                if(nx>=0 && ny>=0 && nx<n && ny<n && board[nx][ny] ==1){
                    board[nx][ny] =0;
                    queue.push([nx,ny]);
                }
                
            }
        }
    }

    for(let i =0; i<n; i++){
        for(let j=0; j<n ;j++){
            if(board[i][j] ==1){
                queue.push([i,j]);
                BFS();
                queue=[];
                answer++;
            }
        }
    }
    
    return answer;

}

console.log(solution([
    [1 ,1 ,0 ,0 ,0 ,1 ,0],
    [0 ,1 ,1 ,0 ,1 ,1 ,0],
    [0 ,1 ,0 ,0 ,0 ,0 ,0],
    [0 ,0 ,0 ,1 ,0 ,1 ,1],
    [1 ,1 ,0 ,1 ,1 ,0 ,0],
    [1 ,0 ,0 ,0 ,1 ,0 ,0],
    [1 ,0 ,1 ,0 ,1 ,0 ,0],
]

))