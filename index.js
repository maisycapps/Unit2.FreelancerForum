// STATE
const freelancers = [
    {name: "Alice", occupation: "writer", startingPrice: 30},
    {name: "Bob", occupation: "teacher", startingPrice: 50}
];

render();

function render(){
// render names
    const nameList= document.querySelector("#names");
    const nameSrc = freelancers.map((profile) => {
        const spec = document.createElement("td");
        spec.classList.add(profile.name);
        return spec;
    }) 
    nameList.replaceChildren(...nameSrc);
// render occupations

// render starting prices

// update av price
    // const prices = document.querySelector("#startingPrice");
    // const updatedAv = (Math.max(...prices))-(Math.min(...prices))
    // average.replace(`The average starting price is ${updatedAv}`)
}