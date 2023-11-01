console.log("Hello there!"); console.log("GENERAL KENOBI!");

//let name = prompt("What's your name sir?");

//console.log(name);

//alert("This is annoying");

let generalKenobi = document.getElementById("generalKenobi");

generalKenobi.style.backgroundColor = 'blue';

let blueThings = document.getElementsByClassName("blueBackground");

for(let i = 0; i < blueThings.length; i++){
    blueThings[i].style.backgroundColor = 'green';
}

let clickMeButton = document.getElementById("clickMe");

//event listener
clickMeButton.addEventListener('click', (e) => {alert('You clicked me!')});

