const categories = require("./Task6.js");
test("Scores of students", () =>{
    let arr = {groceries: 150, dinningOut: 100, transportation: 50};
    let answer  = categories(arr);
    expect(answer).toEqual(300);
})
