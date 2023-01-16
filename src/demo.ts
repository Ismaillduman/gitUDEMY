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
 
