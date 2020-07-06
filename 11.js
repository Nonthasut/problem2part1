function sortData(data, howTosort) {
    if (howTosort === true) {

        for (j = 0; j <= data.length - 1; j++) {
            for (i = 0; i <= data.length - 1; i++) {

                if (data[i] >= data[i + 1]) {
                    data.splice(i + 2, 0, data[i])
                    data.splice(i, 1)
                } else if (data[i] < data[i + 1]) {
                    continue
                }
            }
        }

    } else if (howTosort === false) {
   
        for(j=0;j<=data.length-1;j++){
            for (i = 0; i <= data.length - 1; i++) {
              if(data[i]<=data[i+1]){
                data.splice(i+2,0,data[i])
                data.splice(i,1)
              }else if(data[i]>data[i+1]){
                  continue
              }
            }
    }
}
    return data
} sortData([2,5,4,6,8,5,3,2,1,5,48,6], false)