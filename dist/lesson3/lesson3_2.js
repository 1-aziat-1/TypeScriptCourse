"use strict";
{
    const persons = [
        {
            type: 'admin',
            name: 'Иван Петров',
            age: 27,
            role: 'Administrator',
        },
        {
            type: 'user',
            name: 'Марат Aляуддинов',
            age: 20,
            group: 'музыкант',
        }
    ];
    const isAdmin = (person) => person.type === 'admin';
    const isUser = (person) => person.type === 'user';
    const logPerson = (person) => {
        let information = '';
        if (isAdmin(person)) {
            information = person.role;
        }
        if (isUser(person)) {
            information = person.group;
        }
        console.log(` - ${person.name}, ${person.age}, ${information}`);
    };
    console.log('Admins:');
    persons.filter(isAdmin).forEach(logPerson);
    console.log();
    console.log('Users:');
    persons.filter(isUser).forEach(logPerson);
}
