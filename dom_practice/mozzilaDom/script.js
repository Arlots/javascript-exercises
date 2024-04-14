/*const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href ="https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);

const text = document.createTextNode(
    "- the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

sect.removeChild(linkPara);

ara.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

para.setAttribute("class", "highlight");

*/

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

let itemNumber = 1;

function makeListItem () {
    let listValue = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");

    listItem.appendChild(span);
    listItem.appendChild(delBtn);

    span.textContent = listValue;
    delBtn.textContent = "Delete";

    list.appendChild(listItem);
    
    delBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    button.addEventListener('click', () => {
        input.focus();
    });
}

button.onclick = () => makeListItem ();