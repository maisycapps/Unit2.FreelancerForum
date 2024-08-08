// FREELANCERS
const freelancers = [
    {name: "Alice", occupation: "writer", startingPrice: 30},
    {name: "Bob", occupation: "teacher", startingPrice: 50}
];

// NEWBIES
const newbies = [
    {name: "Dr. Noodle", occupation: "neurologist", startingPrice: 1},
    {name: "Carol", occupation: "plumber", startingPrice: 150},
    {name: "Sharon", occupation: "podiatrist", startingPrice: 20},
    {name: "Terry", occupation: "chiller", startingPrice: 5}
]

// RENDER FREELANCERS
function render(){
const folks = document.querySelector("#folks");
const details = freelancers.map((person) => {
  const stat = document.createElement("tr");
    stat.innerText = `${person.name} ${person.occupation} $${person.startingPrice}`
    return stat;
});
folks.replaceChildren(...details);
}
render();

// RANDOM GENERATOR
function addNewbie() {
    const index = [Math.floor(Math.random() * newbies.length)];
    freelancers.push(newbies[index]);
    render(); 
}

// PRICE RENDER
function priceRen(){
    const prices = freelancers.map((person) => person.startingPrice);
    const av = Math.round((Math.max(...prices) + Math.min(...prices)) / 2);
    const line = document.querySelector("#price");
    const avLine = document.createElement("h3");
    avLine.innerText = `The average starting price is $${av}`;
    line.replaceChildren(avLine);
}
priceRen();

// INTERVAL ADDITIONS
const addNewbieIntervalId = setInterval(addNewbie, 5000);
const updateAverageIntervalId = setInterval(priceRen, 5000)






