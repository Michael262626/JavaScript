function numbers(taskScores){
let answer = []
    if(taskScores.length > 10|| taskScores.length < 10){
        return "Invalid numbers";
    }else{
        answer = taskScores.filter(num => num >= 70);
    }
    return answer;
}
module.exports = numbers
