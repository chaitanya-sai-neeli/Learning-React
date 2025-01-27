const obj = {
    FirstName: "Chaitanya Sai",
    LastName: "Neeli",
    fullName: function(){
        console.log(this.FirstName +" "+ this.LastName);    //here this refers to obj itself
    }
}
const obj2 = {
    FirstName: "Anand Sai",
    LastName: "Neeli",
}
obj.fullName();
obj2.__proto__ = obj;
obj2.fullName();

/*Object creation using classes*/
class corporate{        
    constructor(interest,rating){   //constructor will be directly invoked without explicit invokation
        this.interest = interest;
        this.rating = rating;
    }
    department(){
        console.log("department");
    }
    teamName(){
        console.log("teamName");
    }
    shift(time){
        this.time = time;   //here this.time refers to the property of the object & 2nd time refers to the argument value
        console.log(time);
    }
}
let emp1 = new corporate("Bgmi", 5);;
let emp2 = new corporate();
emp1.shift(10);