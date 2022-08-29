

  let info1 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //   Exercicio 1:

  console.log('Bem vinda ' + info1.personagem)


  // Exercicio 2:

  info1.recorrente = 'Sim';
  console.log(info1.recorrente)


  // Exercicio 3:

  for (let key in info1) {
    console.log(key)
  }




  Exericio 4:

  for (let key in info) {
    console.log(info[key])
  }


  // Exercicio 5:

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178 ",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  console.log(info1.personagem + ' e ' + info2.personagem)
  console.log(info1.origem + ' e ' + info2.origem)
  console.log(info1.nota + ' e ' + info2.nota)

  if (info1.recorrente === 'Sim' && info2.recorrente === 'Sim') {
    console.log('Ambos recorrentes')
  }


  // Exercicio 6:

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)


  // Exercicio 7:

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })

  console.log(leitor.livrosFavoritos)


  // Exercicio 8:

  console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos')