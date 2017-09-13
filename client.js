function Client(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var person = new Client("Gerlou", "Shyy");

function updateClient(clientName, number, contact) {
    clientName[contact] = number;
}

updateClient(person, "408-828-0693", "Mobile");
updateClient(person, "612-356-8872", "Home");
updateClient(person, "730-598-2276", "Work");

for (property in person)
{
    console.log(property, ":", person[property]);
}
