const list = require("./Task7.js");
test("Scores of students", () =>{
    let arr =  [
{ name: 'Apples', category: 'Fruits', isHealthy: true },
{ name: 'Potato Chips', category: 'Snacks', isHealthy: false },
{ name: 'Carrots', category: 'Vegetables', isHealthy: true },
{ name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
{ name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
{ name: 'Soda', category: 'Beverages', isHealthy: false }
    ];;
    let answer  = list(arr);
    expect(answer).toEqual([{ name: 'Apples', category: 'Fruits', isHealthy: true },
    { name: 'Carrots', category: 'Vegetables', isHealthy: true },
    { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }]);
})
