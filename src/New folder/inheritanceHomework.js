var data = "Information" 
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
        // console.log(this.name, this.email);
    }
    viewData(){
        console.log(data);
    }
}
let obj = new user("Chaitanya Sai","chaitanyasaichaitu123@gmail.com");
// obj.viewData();
 

class Admin extends user{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "New data";
    }   
}
let dtpOperator = new Admin("harish","harsih@gmail.com");
// dtpOperator.editData();