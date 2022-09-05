let container = document.getElementById('container');

function addNewTag(tag, classe, parent) {
    let newTag = document.createElement(tag);
    newTag.className = classe;
    let newTagAdd = parent.appendChild(newTag);
    return newTagAdd;
}

function addText (tag, text) {
    tag.innerHTML = text;
}

addText(addNewTag('h1', 'tittle', container), 'Exercício 5.2 - JavaScript DOM')

let main = addNewTag('main','main-content',container);

let sectionCenter =  addNewTag('section','center-content',main);

addNewTag('p','paragraph',sectionCenter,);

addText(addNewTag('p','paragraph',sectionCenter,), "Esse texto é um texto teste, para ser adicionado na tag 'p'!")

let leftContent = addNewTag('section','left-content',main);

addNewTag('img', 'small', container).src = 'https://picsum.photos/200';

let rigthContent = addNewTag('section','rigth-content',main);

let ordenadList = addNewTag('ol', 'ordaned-list', rigthContent);

let numeros = ['um;','dois;','três;','quatro;','cinco;','seis;','sete;','oito;','nove;','dez;'];

for(let index = 0; index < numeros.length; index +=1) {
    let itemList = addNewTag('li', 'item-list', ordenadList)
    addText(itemList, numeros[index ])
}

for(let index = 1; index <=3; index +=1){
addNewTag('h3', 'description',main);
}

main.removeChild(leftContent)

ordenadList.lastElementChild.remove();
ordenadList.lastElementChild.remove();








