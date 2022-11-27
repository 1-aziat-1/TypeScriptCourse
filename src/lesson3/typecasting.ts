{
  const n = 10;
  const s: string = n.toString();
const s2: string = String(n);

type animal = {
  name: string;
  age: number;
  breed: string;
}

const cat = <animal> {
  name: 'Styals',
  age: 16,
  breed: 'siberia',
} 

type pet = {
  name: string,
  home: string,
  owner: {
    firstname: string,
  };
}

const animalToPet = (animal: animal, home: string, nameOwner: string): pet => ({
  name: animal.name,
  home,
  owner: {
    firstname: nameOwner,
  }
})

const myCat: pet = animalToPet(cat, 'vologda', 'Mask');}