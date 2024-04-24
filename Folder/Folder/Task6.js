function categories(expenses){
    let sum = 0
    for(let count in expenses){
        sum+= expenses[count] 
    }
    return sum;
}
module.exports = categories