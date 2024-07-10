//Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker. Выведите в консоль созданный объект.
class Worker{
    constructor(name, surname){
      this.name = name;
      this.surname = surname;
    }
  }
  let worker = new Worker('Имя', 'Фамилия');
  console.log(worker);

//Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя". Создайте объект worker на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName
class Worker {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    fullName(){
      return "Фамилия, Имя";
    }
  }
  let worker1 = new Worker("Аня","Серышева");
  console.log(worker1.fullName());

  //Создайте класс Car. Класс должен содержать свойства brand, model и year. Создайте на его основе объект car и выведите его свойства в консоль.
  class Car {
    constructor(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}
let car = new Car('Mazda', 'CX-5','2021');
console.log(car);

//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска,текущий год нужно получить через клас Date). Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge. Результат в консоли должен быть типом данных numbers.
class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    getAge(){
      return new Date().getFullYear() - this.year
    }
  }
  const car1 = new Car('BMW','X6',2023);
  console.log(car1.getAge());

  //Cоздайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе объект rectangle и выведите его свойства в консоль.
  class Rectangle{
    constructor(width, height){
       this.width = width;
       this.height = height;
     }
 }
   let rectangle = new Rectangle(300, 300);
   console.log(rectangle);

   //Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника (произведение ширины и высоты). Создайте объект rectangle на основе класса Rectangle и выведите его площадь в консоль с помощью метода getArea.
   class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
      getArea(){
        return this.width * this.height
      }
  }
  const rectangle1 = new Rectangle(100,100);
  console.log(rectangle1.getArea()); 
  
  //Cоздайте класс Circle. Класс должен содержать свойство radius. Создайте на его основе объект circle и выведите его свойство в консоль.
  class Circle{
    constructor(radius){
       this.radius = radius;
     }
   }
   let circle = new Circle(20);
   console.log(circle);
  
   //Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать площадь круга. Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса Circle с радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.
   class Circle {
	constructor(radius){
		this.radius = radius
	}
	calculateArea(){
      return this.radius * this.radius * 3.14
    }
}
const circle1 = new Circle(12)
console.log(circle1.calculateArea());

//Создайте класс Student. Класс должен содержать свойства name, age и grade. Создайте на его основе объект student и выведите его свойства в консоль.
class Student {
    constructor(name, age, grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
let student = new Student('Анна', 21, 5);
console.log(student);

//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade и выведите новую оценку в консоль.
class Student {
    constructor(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
    increaseGrade(){
      return this.grade + 1
    }
  }
  const student1 = new Student("Cat", 29, 2);
  const student2 = student.increaseGrade();
  console.log(student2);

  //Создайте класс Book. Класс должен содержать свойства title, author и year. Создайте на его основе объект book и выведите его свойства в консоль.
  class Book {
    constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
let book = new Book('Унесенные ветром', 'Маргарет Митчелл', 1936);
console.log(book);

//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку в формате "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его название и автора в консоль с помощью метода getTitleAndAuthor.
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
    getTitleAndAuthor(){
    return `${this.title} - ${this.author}`;
    }
  }
  const book1 = new Book("Выразительный Javascript", "Марейн Хавербек", 2018);
  console.log(book1.getTitleAndAuthor());

  //Создайте класс BankAccount. Класс должен содержать свойства accountNumber и balance. Создайте на его основе объект account и выведите его свойства в консоль.
  class BankAccount{
    constructor(accountNumber, balance){
      this.accountNumber = accountNumber;
      this. balance =  balance;
    }
  }
  let account = new BankAccount(20, 305);
  console.log(account);

  //Добавьте в класс BankAccount метод deposit, который будет увеличивать баланс на заданную сумму. Создайте объект account на основе класса BankAccount, пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.
  class BankAccount{
    constructor(accountNumber,balance){
      this.accountNumber = accountNumber
      this.balance = balance
    }
    deposit(){
      return this.balance + 200;
    }
  }
  const account1 = new BankAccount(324234,534554)
  console.log(account1.deposit()); 

  //В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную сумму. Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". Создайте объект account на основе класса BankAccount, попробуйте снять с него сумму, превышающую баланс, и выведите соответствующее сообщение в консоль.
  class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
    deposit(sum) {
      this.balance = sum + this.balance;
    }
    withdraw(amount) {
     if (amount <= this.balance) {
        this.balance = this.balance - amount;
      } else {
        console.log("Недостаточно средств");
      }
    }
  }
  const account2 = new BankAccount(324234, 534554);
  account2.withdraw(555486);

  //Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal и выведите его свойства в консоль.
  class Animal{
    constructor(name,sound){
      this.name = name;
      this.sound = sound;
    }
  }
  const animal = new Animal('Бася','мяу')
  console.log(animal); 

  //Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. Создайте объект animal на основе класса Animal и вызовите метод makeSound.
  class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
    makeSound(){
      return this.sound
    }
  }
  const animal1 = new Animal('Бася','мяу');
  console.log(animal1.makeSound());

  //Создайте класс Point. Класс должен содержать свойства x и y. Создайте на его основе объект point и выведите его свойства в консоль.
  class Point{
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  }
  let point = new Point(5, 10);
  console.log(point);

  //В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0). Создайте объект point на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    // Метод getDistance возвращает расстояние от точки до начала координат (0,0)
    getDistance() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  const point1 = new Point(4,5);
  console.log(point1.getDistance());

  //Создайте класс Calculator. Класс должен содержать методы add, subtract, multiply и divide, которые будут выполнять соответствующие математические операции над двумя числами и возвращать результат. Создайте объект calc на основе класса Calculator и выполните следующее математическое выражение: (((2+2)-1)*4)\2 с помощью методов. Результат вывести в консоль.
  class Calculator{
    constructor(x,y){
      this.x = x;
      this.y = y;
    }
    add(){
      return this.x + this.y
    }
    subtract(){
      return calc.add() - 1
    }
    multiply(){
      return calc.subtract() * 4
    }
    divide(){
      return calc.multiply() / 2
    }
  }
  const calc = new Calculator(2,2)
  console.log(calc.divide());

  //Создайте класс Person. Класс должен содержать свойства name, age и city. Создайте на его основе объект person. Cоздайте переменную personInfo и в нее поместите строчку, в которой будет вся информация из обьекта. Должно получиться: 'Josh, 43, London' и выведите personInfo в консоль
  class Person{
    constructor(name,age,city){
      this.name = name;
      this.age = age;
      this.city = city;
    }
  }
  const person = new Person("Josh", 43, "london");
  const personInfo = `${person.name},${person.age},${person.city}`;
  console.log(personInfo);

  //Добавьте в класс Person метод changeCity, который будет изменять значение свойства city на новое значение. Создайте объект person на основе класса Person, вызовите метод changeCity с аргументом "New York" и выведите новое значение свойства city в консоль.
  class Person {
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
    changeCity(z){
      this.city = z
    }
  }
  const person1 = new Person("Josh", 43, "london");
  person1.changeCity("New York");
  console.log(person1.city);

  //Создайте два класса EmployeeAmazon и EmployeeApple.- EmployeeAmazon, EmployeeApple должны содержать свойства name, position и salary, a EmployeeApple должен содержать еще и метод calculateBonus, который будет увеличивать зарплату на процент, который ты ему передашь аргументом, и менять ее в поле salary.- Создайте обьекты employeeAmazon и employeeApple и заполните их данными:Josh работает в компании Amazon менеджером, и его зарплата составляет 12 000$ в год.Frank работает в компании Apple разработчиком и его зарплата составляет 220 000$ в год.- В этом году Josh получит повышение на 15% процентов, а Frank получит повышение на 25%.- Используя метод calculateBonus из обьекта employeeApple, повысьте зарплаты этим сотрудникам, не создавая метод calculateBonus в классе EmployeeAmazon.- Для изменения зарплаты Josha используйте функцию bind.- После изменений зарплат, создайте переменную salaryInfo, в которой будет лежать строка содержащая информацию о зарплатах вот в таком формате :Frank salary:указать зарплату Franka за год после повышения, Josh salary:указать зарплату Josha за год после повышенияВыведите переменную salaryInfo в консоль.

  class EmployeeAmazon {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  }
  class EmployeeApple {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
    calculateBonus(bonus) {
      this.salary = (this.salary * bonus) / 100 + this.salary;
    }
  }
  const employeeAmazon = new EmployeeAmazon("Josh", "Manager", 12000);
  const employeeApple = new EmployeeApple("Frank", "Developer", 220000);
  //вызов метода calculateBonus c другим контекстом обьекта 
  employeeApple.calculateBonus.bind(employeeAmazon)(15);
  employeeApple.calculateBonus(25);
  const salaryInfo = `Frank salary:${employeeApple.salary}, Josh salary:${employeeAmazon.salary}`;
  console.log(salaryInfo);

  //Создайте класс Product. Класс должен содержать свойства name, price и quantity. Создайте метод displayInfo, который будет выводить все данные в консоль одной строкой :Название продукта:ноутбук, Цена продукта:999, Количество продукта:5
  class Product {
    constructor(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
    displayInfo(){
      console.log(`Название продукта:${this.name},Цена продукта:${this.price},Количество продукта:${this.quantity}`);
    }
}
const product = new Product('Ноутбук', 999, 5);
product.displayInfo();

//Добавьте в класс Product метод calculateTotalPrice, который будет возвращать общую стоимость продукта (произведение цены на количество). Создайте объект product на основе класса Product с ценой 10 и количеством 5. Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.
class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
    displayInfo() {
      console.log(
        `Название продукта:${this.name}, Цена продукта:${this.price}, Количество продукта:${this.quantity}`
      );
    }
    calculateTotalPrice(){
      return this.price * this.quantity
    }
  }
  const product1 = new Product('ок', 10, 5);
  console.log(product1.calculateTotalPrice());

  //




