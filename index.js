function greeter(person) {
    return "Hello " + person.name + " " + person.surname;
}
var user = {
    name: 'Andrei',
    surname: 'Fidelman'
};
document.body.innerHTML = greeter(user);
