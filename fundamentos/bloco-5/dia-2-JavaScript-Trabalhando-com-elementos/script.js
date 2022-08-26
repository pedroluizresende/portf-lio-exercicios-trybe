let container = document.getElementById('container');

function addNewTag(tag, classe, parent) {
    let newTag = document.createElement(tag);
    newTag.className = classe;
    let newTagAdd = parent.appendChild(newTag);
    return newTagAdd;
}

addNewTag('h1', 'tittle', container)

function addText (tag, text) {
    tag.innerHTML = text;
}

addText(addNewTag('h1', 'tittle', container), 'Exercício 5.2 - JavaScript DOM')

addNewTag('main','main-content',container);

let main = addNewTag('main','main-content',container);

addNewTag('section','center-content',main);

