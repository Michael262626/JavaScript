function arrays(numbers){
    let answer = []
    answer = numbers.map(num => num += 5)
    return answer;
}
module.exports = arrays