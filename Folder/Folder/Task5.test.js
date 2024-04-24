const classes = require("./Task5.js");
test("Scores of students", () =>{
    let arr = ["11:AM", "1:00PM", "9:00AM", "3:00PM", "5:00PM"];
    let answer  = classes(arr);
    expect(answer).toEqual(['1:00PM, 3:00PM, 5:00PM']);
})