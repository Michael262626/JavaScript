function classes(time){
    let answer = []
    let answer1 = []
    let answer2 = []
        answer = time.filter(num => num == "1:00PM");
        answer1 = time.filter(num => num == "3:00PM")
        answer2 = time.filter(num => num == "5:00PM")
        return [answer+", "+answer1+", "+answer2];
    }
    module.exports = classes
    