function books(listOfBooks){
    let result1 = []
    let counter  =0 
    let members = ["Emily","Jack", "Sophia", "Daniel"]
    for (value of members){
            let obj = {name:value,book:listOfBooks[counter++]}
            result1.push(obj);
    }
        return result1;
    }

module.exports = books

