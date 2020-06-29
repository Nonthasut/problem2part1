let result = [2,3,5,7];
for(i=2;i<=100;i++){
    if(i%2!=0&&i%3!=0&&i%5!=0&&i%7!=0){
    result.push(i)
    }else{
    continue;
    }
}alert(result)
