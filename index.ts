interface Person {
  name: string,
  surname: string,
}

function greeter(person: Person) {
  return `Hello ${person.name} ${person.surname}`;
}

const user = {
  name: 'Andrei',
  surname: 'Fidelman',
};

document.body.innerHTML = greeter(user);