"use strict";
{
    const n = 10;
    const s = n.toString();
    const s2 = String(n);
    const cat = {
        name: 'Styals',
        age: 16,
        breed: 'siberia',
    };
    const animalToPet = (animal, home, nameOwner) => ({
        name: animal.name,
        home,
        owner: {
            firstname: nameOwner,
        }
    });
    const myCat = animalToPet(cat, 'vologda', 'Mask');
}
