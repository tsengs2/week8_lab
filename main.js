function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.image = "dog.png";
    this.image_alt = "A cute dog with large eyes";
  }
  
  function Panda(name, age) {
    this.name = name;
    this.age = age;
    this.image = "panda.png"
    this.image_alt = "An adorable panda with large eyes";
  }
  
  function Koala(name, age) {
    this.name = name;
    this.age = age;
    this.image = "koala.png";
    this.image_alt = "A cute koala hugging a tree branch";
  }

let animals = [new Dog(), new Panda(), new Koala()];
let names = ["Tofu", "Rubble", "Zuma", "Tian Tian", "Tai Shan", "Sleepy", "Coco"];

function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }

function generateRandomAnimal() {
    let randomIndex = getRandomIndex(animals.length);
    let randomAnimal = animals[randomIndex];

    if (randomAnimal instanceof Dog){
        return new Dog(generateRandomName(), generateRandomAge());
    }
    else if (randomAnimal instanceof Panda){
        return new Dog(generateRandomName(), generateRandomAge());
    }
    else if (randomAnimal instanceof Koala){
        return new Koala(generateRandomName(), generateRandomAge());
    }

}

function generateRandomName() {
    let randomIndex = getRandomIndex(animals.length);
    return names[randomIndex];
}

function generateRandomAge(){
    return getRandomIndex(10);
}

/*** Document Load ****/
function onLoad() {

    // generate a random animal when the document opens
    let animal = generateRandomAnimal();
    console.log(animal)
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  
  }