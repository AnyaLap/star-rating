const info1 = document.querySelector('.info1');
const info2 = document.querySelector('.info2');
const info3 = document.querySelector('.info3');
const info4 = document.querySelector('.info4');

const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');
const price4 = document.querySelector('.price4');

const doorsCount1 = document.querySelector('.doors1');
const doorsCount2 = document.querySelector('.doors2');

const maxSpeed1 = document.querySelector('.speed1');
const maxSpeed2 = document.querySelector('.speed2');


class Transport{
    constructor(type, price, brand){
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo(){
        return `Тип: ${this.type}, Марка: ${this.brand}`;
    }
    getPrice(){
        return `Цена: ${this.price}`;
    }
}

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }
    getDoorsCount(){
        return `Количество дверей: ${this.doors}`;
    }
}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return `Максимальная скорость мотоцикла: ${this.maxSpeed}`;
    }
}
const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
    }
  ];

  const car1 = new Car(data[0].type, data[0].price, data[0].brand, data[0].doors);
  info1.textContent = car1.getInfo();
  price1.textContent = car1.getPrice();
  doorsCount1.textContent = car1.getDoorsCount();

  const car2 = new Car(data[1].type, data[1].price, data[1].brand, data[1].doors);
  info2.textContent = car2.getInfo();
  price2.textContent = car2.getPrice();
  doorsCount2.textContent = car2.getDoorsCount();

  const bike1 = new Bike(data[2].type, data[2].price, data[2].brand, data[2].maxSpeed);
  info3.textContent = bike1.getInfo();
  price3.textContent = bike1.getPrice();
  maxSpeed1.textContent = bike1.getMaxSpeed();

  const bike2 = new Bike(data[3].type, data[3].price, data[3].brand, data[3].maxSpeed);
  info4.textContent = bike2.getInfo();
  price4.textContent = bike2.getPrice();
  maxSpeed2.textContent = bike2.getMaxSpeed();

