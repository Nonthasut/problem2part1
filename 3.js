let n = +prompt('Add n')
let result = []
let checker =0
for (i = 2; i<=n*100; i++) {
    for(j=0;j<=n*100;j++){
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
    
} alert(result.slice(0,n))