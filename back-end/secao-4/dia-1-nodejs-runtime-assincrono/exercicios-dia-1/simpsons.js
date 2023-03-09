const fs = require('fs').promises;

const readAll = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent)
  const strings = simpsons.map((s) => `${s.id} - ${s.name}`)

  // strings.forEach(s => console.log(s))
  return simpsons;
}

const findSimpson = async (id) => {
  const simpsons = await readAll()
  const chosenSimpson = simpsons.find(s => (+s.id) === (+id));


  if(!chosenSimpson) {
    throw new Error('id não encontrado')
  }
  return chosenSimpson;
}

const filterSimpsons = async () => {
  const simpsons = await readAll()
  const filteredSimpsons = simpsons.filter((s) => s.id !== '10' && s.id !== '6')

  return filteredSimpsons;
}

const simpsonFamily = async () => {
  const simpsons = await readAll()
  const familyIds = [1, 2, 3, 4]
  const simpsonFamily = simpsons.filter(s => familyIds.includes(Number(s.id)))
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonFamily))
}

const addNelson = async () => {
  const simpsons = await readAll()
  const nelson = simpsons.find((s) => s.name === 'Nelson Muntz')
  const family = JSON.parse(await fs.readFile('./simpsonsFamily.json', 'utf-8'))
  fs.writeFile('./simpsonsFamily.json', JSON.stringify([...family, nelson]))
}

const substituteNelson = async () => {
  const simpsons = await readAll()
  const maggie = simpsons.find((s) => s.name === 'Maggie Simpson')
  const family = JSON.parse(await fs.readFile('./simpsonsFamily.json', 'utf-8'))
  const newFamily = [...family.filter(m => m.name !== 'Nelson Muntz'), maggie];
  console.log(newFamily)
  fs.writeFile('./simpsonsFamily.json', JSON.stringify([...newFamily]))
}

const main = async () => {
  const simpson = await findSimpson(1)
  // console.log(simpson);
  fs.writeFile('./simpsons.json', JSON.stringify(await filterSimpsons()))
  simpsonFamily()
  const familywithNelson = await addNelson();
  substituteNelson()
}

main()