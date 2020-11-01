class Form {

    constructor() {
      this.input = createInput("Enter your email");
      this.password=createInput("Password");
      this.confirmpassword=createInput("Confirm Password");
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.registeration= createButton("Register");
      this.login= createButton("Login");
      this.name= createButton("Name");
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Aspire");
      this.title.position(displayWidth/2 - 50, 0);

  
      this.input.position(displayWidth/2-80, displayHeight/2-20);
      this.password.position(displayWidth/2-80, displayHeight/2+20);
      this.confirmpassword.position(displayWidth/2-80, displayHeight/2+60);
      //this.reset.position(displayWidth-100,20);
      this.registeration.position(displayWidth/2-65,displayHeight/2+90);
      this.login.position(displayWidth/2 + 30, displayHeight/2+90);

      
  
      this.registeration.mousePressed(()=>{
          
        new Regform();
        
      });
  
    }
  }
  