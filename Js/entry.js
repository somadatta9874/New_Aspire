class Entry{
constructor(){
    this.Email=null;
    this.Name=null;
    this.Surname=null;
    this.Number=null;
    this.Password=null;
    this.grade=null;
}
getEmail(){
    var Emailref=database.ref('Email');
    Emailref.on("value",(data)=>{
        Email=data.val();
    })
}

getName(){
    var Nameref=database.ref('Name');
    Nameref.on("value",(data)=>{
        Name=data.val();
    })
}

getSurname(){
    var Surnameref=database.ref('Surname');
    Surnameref.on("value",(data)=>{
        Surname=data.val();
    })
}

getNumber(){
    var Numberref=database.ref('Number');
    Numberref.on("value",(data)=>{
        Number=data.val();
    })
}

getPassword(){
    var Passwordref=database.ref('Password');
   Passwordref.on("value",(data)=>{
        Password=data.val();
    })
}

getGrade(){
    var Graderef=database.ref('Grade');
    Graderef.on("value",(data)=>{
        Grade=data.val();
    })
}





 static update(){
    database.ref('/').set({
        Email:this.Email
    })
}

}