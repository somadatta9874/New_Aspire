class Regform{

constructor(){
this.title=createElement("h2");
this.name=createInput("Name");
this.surname=createInput("Surname");
this.grade=createButton("Grade")
this.number=createInput("Phone number");
this.register=createButton("Register");


}
display(){
    this.title.html("Aspire");
    this.title.position(displayWidth/2 - 50, 0);

    
    this.name.position(displayWidth/2-80, displayHeight/2+20);
    this.surname.position(displayWidth/2-80, displayHeight/2+60);
    this.number.position(displayWidth/2-80, displayHeight/2+100);
    this.grade.position(displayWidth/2+9, displayHeight/2+140);
    this.register.position(displayWidth/2+30,displayHeight/2+200);
}
}