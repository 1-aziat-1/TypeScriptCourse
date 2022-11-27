"use strict";
{
    ;
    const persons = [
        {
            name: 'Иван Ивановчи',
            age: 23,
            role: 'администратор'
        },
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
    const isUser = (val) => 'group' in val;
    const logPerson = (person) => {
        let information;
        if (isUser(person)) {
            information = person.group;
        }
        else {
            information = person.role;
        }
        console.log(`${person.name}, ${person.age}, ${information}`);
    };
    console.log('Users:');
    persons.forEach(logPerson);
}
