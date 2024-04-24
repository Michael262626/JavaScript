const square = require("./Task3.js");
test("Scores of students", () =>{
    let arr = [5, 10, 15,];
    let answer  = square(arr);
    expect(answer).toEqual([25 ,100, 225]);
})