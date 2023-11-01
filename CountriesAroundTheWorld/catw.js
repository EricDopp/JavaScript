class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    displayColors() {
        document.body.style.backgroundColor = 'white';
        document.getElementById("countryName").innerText = `Country: ${this.name}`;
        document.getElementById("countryName").style.color = this.colors[0] || 'white';
        document.getElementById("officialLanguage").innerText = `Official Language: ${this.lang}`;
        document.getElementById("officialLanguage").style.color = this.colors[1] || 'white';
        document.getElementById("helloWorld").innerText = `${this.greeting}`;
        document.getElementById("helloWorld").style.color = this.colors[2] || 'white';
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let canada = new Country("Canada", "English", "Hello World!", ["red", "white", "red"]);
let germany = new Country("Germany", "German", "Hallo Welt", ["black", "red", "yellow"]);


function SwitchCountry() {
    let input = prompt("Enter the country you'd like to display: ");
    let country;
    if (input.toLowerCase() === "usa") {
        country = usa;
    }
    else if (input.toLowerCase() === "mexico") {
        country = mexico;
        }
    else if (input.toLowerCase() === "algeria") {
        country = algeria;
        }
    else if (input.toLowerCase() === "canada") {
        country = canada;
        }
    else if (input.toLowerCase() === "germany") {
        country = germany;
        }
    else {
        alert("Country not found in the list.");
    }
    country.displayColors();
}