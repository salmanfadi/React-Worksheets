// class Car {
//   // variables and funtions and constutor
//   brand;
//   model;
//   year;
//   engine;

//   displayDetails() {
//     console.log(`Brand Name : ${this.brand}  \n Model : ${this.model} 
//        \n Year :  ${this.year} \n Engine : ${this.engine}`);
//   }
// }

// // let honda = new Car();
// // honda.displayDetails();

// let suzuki = new Car();
// suzuki.brand = "Suzuki";
// suzuki.model = "Zeta";
// suzuki.year = 2020;
// suzuki.engine = "1ltr";
// suzuki.displayDetails();
 

// class Car {
//     brand;
//     model;
//     year;
//     engine;
//   constructor(brand,model,year,engine){
//   this.brand =brand;
//   this.model = model ;
//   this.year = year ;
//   this.engine = engine ;
// }

//   displayDetails() {
//     console.log(`Brand Name : ${this.brand}  \n Model : ${this.model} 
//        \n Year :  ${this.year} \n Engine : ${this.engine}`);
//   }
// }

// let obj=new Car("Ford","Endeavour",2015,"4 ltr");
// obj.displayDetails();

// constructor and getters :
 
// and private member :

// class Car {
//   // variables and funtions and constutor
//   brand;
//   model;
//   year;
//   #engine;
//   constructor(brand, model, year, engine) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.#engine = engine;
//   }
//   displayDetails() {
//     console.log(`Brand Name : ${this.brand}  \n Model : ${this.model} 
//        \n Year :  ${this.year} \n `);
//   }

//     getEngine() {
//     return this.#engine;
//   }
// }

// let honda = new Car("HONDA", "Elevate", 2020, "1.5ltr");
// honda.displayDetails();
// console.log("Engine : " + honda.getEngine());
// console.log("==========================================");
// let suzuki = new Car("Suzuki", "DETLA", 2015, "1.5ltr");

// suzuki.displayDetails();
// console.log("Engine : " + suzuki.getEngine());
 
// class Transport{
//     Mode;
//     Price;
//     Size;

//     constructor(Mode,Price,Size){
//         this.mode = Mode;

//     }
// }

// class Car{
//     Brand;
//     Model;
//     Year;

// }

// protected,private and public
// class Parent {
//   name = "John";
//   #salary = 50000;
//   _city = "Hyderabad";
 
//   show() {
//     console.log(this.name);
//     console.log(this.#salary);
//     console.log(this._city);
//   }
// }
 
// class Child {
//   name = "David";
//   #age = 20;
//   _course = "JavaScript";
 
//   show() {
//     console.log(this.name);
//     console.log(this.#age);
//     console.log(this._course);
//   }
// }
 
// const parent = new Parent();
// parent.show();
 
// const child = new Child();
// child.show();

//super class constructor
class Parent {
  fathersName;
  landname;
  documents;
  city;
  constructor(fathersName, landname, documents, city) {
    this.fathersName = fathersName;
    this.landname = landname;
    this.documents = documents;
    this.city = city;
  }
  landDetails() {
    console.log(this.fathersName);
    console.log(this.landnamename);
    console.log(this.documents);
    console.log(this.city);
  }
}

class Child extends Parent {
  childName;
  constructor(childName, fathersName, landname, documents, city) {
    super(fathersName, landname, documents, city);
    this.childName = childName;
  }

  diplayChild() {
    console.log("\nhey I'm child " + this.childName);
  }
}

let child1 = new Child("John", "Ravi", "JV Nagar", 1234987, "Banglore");
child1.landDetails();
child1.diplayChild();
 
const readline = require ("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter child's name " , (name) =>{
    let child2 = new Child(name);

    child2.diplayChild();

    rl.close;
});