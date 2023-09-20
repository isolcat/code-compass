Promise.myAll=function(promise){
    let arr=[]//存储promise的结果
    count=0//计数器
    return new Promise((resolve,reject)=>{
        promise.forEach((item,i)=>{
            Promise.resolve(item).then(res=>{
                arr[i]=res
                count+=1
                if(count===promise.length){
                    resolve(arr)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    })
}