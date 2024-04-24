const books = require("./Task4.js");
test("Scores of students", () =>{
    let arr = ["javaBooks", "pythonBooks", "jsBook", "cBook"];
    let answer  = books(arr);
    expect(answer).toEqual(
    [
      { name: 'Emily', book: 'javaBooks' },
      { name: 'Jack', book: 'pythonBooks' },
      { name: 'Sophia', book: 'jsBook' },
      { name: 'Daniel', book: 'cBook' }
    ])
})