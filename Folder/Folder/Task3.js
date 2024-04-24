function square(numbers){
    let answer = []
    answer = numbers.map(num => num *= num)
    return answer;
}
module.exports = square