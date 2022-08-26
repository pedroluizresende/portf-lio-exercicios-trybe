function alteraCor(elementos, cor) {
    document.querySelector(elementos).style.backgroundColor = cor;
};

alteraCor('#header-container', '#2fc18c')
alteraCor('.emergency-tasks', 'lightsalmon')
alteraCor('.no-emergency-tasks', 'khaki')

document.getElementsByTagName('h3')[0].style.backgroundColor = 'blueViolet';
document.getElementsByTagName('h3')[1].style.backgroundColor = 'blueViolet';
document.getElementsByTagName('h3')[2].style.backgroundColor = 'black';
document.getElementsByTagName('h3')[3].style.backgroundColor = 'black';

alteraCor('#footer-container','#023031')


