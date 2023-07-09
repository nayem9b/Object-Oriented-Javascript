//! Object er vitore function ke method bole
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log(name, email);
    console.log(this);
  }
  changeName(name) {
    this.name = name;
    console.log(name);
  }

  sendEmail(message) {
    console.log("sending message", message);
  }

  print() {
    console.log(this);
  }
}

const p1 = new Person("typed", "based");
const p2 = new Person("Javascript", "Typescript");
p1.changeName("I'm changing name from methods"); //But this method is only accessable inside class
