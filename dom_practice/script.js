const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content")
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");

paragraph.textContent = "Hey, I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";

container.appendChild(header3);

const borderDiv = document.createElement("div");
const divHeader = document.createElement("h1");
const divPara = document.createElement("p");

divHeader.textContent = "I'm in a div!";
divPara.textContent = "ME TOO!";

borderDiv.appendChild(divHeader);
borderDiv.appendChild(divPara);

borderDiv.setAttribute("style", "background-color: pink; border: 1px solid black;")

const body = document.querySelector("body");

body.appendChild(borderDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});