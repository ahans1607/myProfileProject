window.addEventListener("DOMContentLoaded", (event) => {
    console.log("I got Loaded")

const h1 = document.createElement('h1')
h1.setAttribute("id", "name")
h1.setAttribute("class", "my-name")
document.body.appendChild(h1)

const myName = document.querySelector("#name")
myName.innerHTML = "Ananya Hans"


const ul = document.createElement('ul')
    ul.setAttribute('id', 'list')
    ul.setAttribute('class', "my-details")
    document.body.appendChild(ul)

    let item1 = document.createElement('li')
    item1.innerText = "I love listening to music"
    let item2 = document.createElement('li')
    item2.innerText = "I enjoy winter sports"
    let item3 = document.createElement('li')
    item3.innerText = "I enjoy playing the drums"
    let item4 = document.createElement('li')
    item4.innerText = "I like to spend my free time with my dogs"

    ul.appendChild(item1)
    ul.appendChild(item2)
    ul.appendChild(item3)
    ul.appendChild(item4)

    const anotherDetailsList = document.createElement('ul');
    anotherDetailsList.setAttribute("class", "my-details");
    document.body.appendChild(anotherDetailsList);

    const detailsArr = [
        "<li>I love Long Island Ice Tea. </li>",
        "<li>I love my dogs </li>",
        "<li>I love my family </li>",
        "<li>I love my girlfriend</li>"
    ]

    const singleString = detailsArr.join("");
    anotherDetailsList.innerHTML = singleString;





});