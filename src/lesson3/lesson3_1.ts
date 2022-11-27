{
  interface User  {
    name: string;
    age: number;
    group?: string;
  };

  interface Admin  {
    name: string;
    age: number;
    role?: string;
  }

  type Person = User | Admin;



  const persons: Person[] = [
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

  const isUser = (val : User | Admin): val is User => 'group' in val; 

  const logPerson = (person : Person) => {
    let information: string | undefined;
    if (isUser(person)) {
      information = person.group;
    } else {
      information = person.role
    }

    console.log(`${person.name}, ${person.age}, ${information}`);
  }

  console.log('Users:');
  persons.forEach(logPerson);
}