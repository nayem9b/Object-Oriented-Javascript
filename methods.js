class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log(name, email);
    console.log(this);

    changeName(){
// These are methods
    }

   sendEmail(){
// These are methods
   }
  }
}

const p1 = new Person("typed", "based");
const p2 = new Person("Javascript", "Typescript");

//! Object er vitore function ke method bole
