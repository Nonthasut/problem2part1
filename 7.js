function GCD(number){
let answer=[]
number.sort((a,b)=>{return a-b})
for(i=0;i<=number[number.length-1];i++){
if(number[0]%i==0&&number[1]%i==0&&number[2]%i==0){
    answer.push(i)
}
} 
answer.sort((a,b)=>{return a-b})

return answer[answer.length-1]
}GCD([6,8,16])