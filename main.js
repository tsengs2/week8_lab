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
function onLoad () {

  // get the savedAnimal in local storage if one exists
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  //use a boolean to keep track of animal saved 
  var hasSavedAnimal = false;

  if (animal === null) 
  {
    document.getElementById("button-storage").textContent = "Save Animal";
    animal = generateRandomAnimal();
  } 
  else 
  {
    document.getElementById("button-storage").textContent = "Clear Animal";
    hasSavedAnimal = true;
  }

  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);


  document.getElementById("button-storage").addEventListener("click", function() {
    if (hasSavedAnimal) 
    {
      localStorage.removeItem("savedAnimal");

      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Cleared!";
      document.getElementById("button-action-text").style.display = "block";
    }

    else 
    {
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      document.getElementById("button-storage").style.display = "none";
      document.getElementById("button-action-text").textContent = "Saved!";
      document.getElementById("button-action-text").style.display = "block";
    }
  });

};
