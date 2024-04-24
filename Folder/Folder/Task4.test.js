const books = require("./Task4.js");
test("Scores of students", () =>{
    let arr = ["javaBooks", "pythonBooks", "jsBook", "cBook"];
    let answer  = books(arr);
    expect(answer).toEqual(["javaBooks: Jack javaBooks: Emily javaBooks: Sophia javaBooks: Daniel pythonBooks: Jack pythonBooks: Emily pythonBooks: Sophia pythonBooks: Daniel jsBook: Jack jsBook: Emily jsBook: Sophia jsBook: Daniel cBook: Jack cBook: Emily cBook: Sophia cBook: Daniel"]);
})