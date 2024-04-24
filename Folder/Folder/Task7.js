function list(shoppingList){
    let answer = []
    answer = shoppingList.filter(num => num.isHealthy == true);
    answer.forEach(num => console.log(num))
    return answer
}
module.exports = list