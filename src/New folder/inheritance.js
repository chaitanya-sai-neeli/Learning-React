class parent{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }
    walk(){
        console.log("walk");
    }
    speak(){
        console.log("speak");
    }
}
class child extends parent{
    constructor(name){
        super(name);
        // this.gender = this.gender;
    }
    
    play(){
        super.walk();
        console.log("plays");
    }
}

// let chay = new child("male"); 
let chay = new child("Chaitanya Sai"); 
let chayJr = new parent(); 