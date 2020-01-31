let form = document.querySelector('.toDoForm');
let button = document.querySelector('.button');
let text = document.querySelector('.text');


form.addEventListener('click', function(e) {
    // console.log(e.target.checked);
    if(e.target === button) {
        let span = document.createElement("span");
        let closeItem = document.createElement("b");
        let p = document.createElement("p");
        let inputCheck = document.createElement("input");
        inputCheck.type = "checkbox";

        p.appendChild(inputCheck);
        p.appendChild(span);
        p.appendChild(closeItem);

        closeItem.textContent = "  x";
        closeItem.style.color = "red";

        span.textContent = text.value;

        form.appendChild(p);
    };

    if(e.target.textContent === "  x") {
        e.target.closest('p').style.display = "none";
    };

    if(e.target.checked) {
        console.log(e.target.checked);
        console.log(e.target.nextSibling.style.textDecorationLineThrough);
        e.target.nextSibling.style.textDecoration = "line-through";
    } else if (e.target.checked === false) {
        e.target.nextSibling.style.textDecoration = "none";
    };
    
});
