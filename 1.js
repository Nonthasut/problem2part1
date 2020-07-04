let result = []
let checker =0
for (i = 2; i <= 100; i++) {
    for(j=0;j<=100;j++){
    if(i%j==0){
        checker++
    }
    }
    if(checker<3){
        result.push(i)
        checker=0
    }else if(checker>2){
        checker=0
    }
    
} alert(result)
