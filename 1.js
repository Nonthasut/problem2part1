let result = []
let check = []
for (i = 2; i <= 500; i++) {
    for (j = 0; j <= 100; j++) {
        if (i % j == 0) {
            check.push(i)
        }
    }
    if(check.length>2){
    check=[]
    continue
    }else if(check.length===2){
    result.push(i)
    check=[]
    }
} alert(result)
