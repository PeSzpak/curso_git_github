const firstName = 'Pedro';
const anotherName = 'Szpak';
const x = true; 

function greeting(name: string | boolean) {
    console.log("Óla " + name);
}

greeting(firstName);
greeting(anotherName);
greeting(x);
