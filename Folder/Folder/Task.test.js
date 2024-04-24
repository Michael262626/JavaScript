const numbers = require("./Task.js");
test("Scores of students", () =>{
    let arr = [50, 90, 65, 70, 45, 55, 68, 35, 80, 75];
    let answer  = numbers(arr);
    expect(answer).toEqual([90, 70, 80, 75]);
})