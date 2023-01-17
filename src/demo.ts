type User={
    name:string;
    surname:string;
}
 const user:User={
     name: "Ismail",
     surname: "Duman"
 }

 console.log(user);

 interface User1{
    name:string;
    surname:string;
    DriverLicenseType:string;
 }
 class carUser implements User1{
     name="Ismail";
     surname= "duman";
     DriverLicenseType= "B"

 }
 
 const caruser= new carUser();
 console.log(caruser);
 

 class Personx{
    name:string;
    email:string;
    greet(){
        return `Hello ${this.name} `;
    }

    constructor(name:string,email:string){
this.email=email;
this.name=name;
    }
}

const personx = new Personx('scott', 'adam');
const person2 = new Personx('scarlet', 'johnson');
console.log(personx);
console.log(person2);
