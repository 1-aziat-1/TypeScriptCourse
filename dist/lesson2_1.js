"use strict";
{
    const persons = [
        {
            name: 'Иван Петров',
            age: 27,
            group: 'SEO-специалист',
        },
        {
            name: 'Марат Aляуддинов',
            age: 20,
            group: 'Музыкант',
        },
        {
            name: 'Иван Абдурохманович',
            age: 50,
            group: 'Друзья',
        },
        {
            name: 'Илья Зайнудинов',
            age: 10,
            group: 'Семья',
        },
        {
            name: 'Марат Алексеевич',
            age: 40,
            group: 'Родственник',
        }
    ];
    const logPerson = (user) => {
        console.log(`${user.name}, ${user.age}`);
    };
    console.log('Users:');
    persons.forEach(logPerson);
}
