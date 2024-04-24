const arrays = require("./Task2.js");
test("Scores of students", () =>{
    let arr = [5, 10, 15,];
    let answer  = arrays(arr);
    expect(answer).toEqual([10 ,15, 20]);
})