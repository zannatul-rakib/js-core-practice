function Laptop(name, cpu, price, model) {
  this.name = name;
  this.cpu = cpu;
  this.price = price;
  this.model = model;
  this.title = function () {
    return this.name + " " + this.model;
  };
}
let hp = new Laptop("HP", "core i7", 84000, "Elitbook");
let leveno = new Laptop("Lenevo", "core i7", 65600, "Thinkpad");
let asus = new Laptop("Asus", "core i7", 94000, "Probook");

console.log(hp);
// console.log(hp.title());
// console.log(leveno);
// console.log(asus);
