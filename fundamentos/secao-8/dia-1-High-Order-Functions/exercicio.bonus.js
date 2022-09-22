const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
console.log(battleMembers)

const dragonDamage = () => {
  const damage = Math.floor(Math.random()  * ((dragon.strength -15) + 1) + 15);
    return damage;
}

const warriorDamage = () => {
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const minDamage = warrior.strength;
  const damage = Math.floor(Math.random()  * ((maxDamage - minDamage) +1) + minDamage);
    return damage;
}

const mageDamageAndMana = () => {
  const maxIntelligence = mage.intelligence * 2;
  const minIntelligence = mage.intelligence;
  const mageAtributtes = {
    dano: Math.floor(Math.random()  * ((maxIntelligence - minIntelligence) +1) + minIntelligence),
    mana: mage.mana - 15,
  }
  if (mageAtributtes.mana < 15) {
    mageAtributtes.mana = 0 ,'Não possui mana suficiente';
  }
return mageAtributtes;
}

const warriorTurn = (callback) => {
  const damage = callback();
  warrior.damage = damage;
  dragon.healthPoints = dragon.healthPoints - warrior.damage;
}

const mageTurn = (callback) => {
  const damage = callback();
  mage.damage = damage.dano;
  mage.mana = mage.mana - damage.mana;
  dragon.healthPoints = dragon.healthPoints - mage.damage;
}


const dragonTurn =(callback) => {
  dragon.damage = callback();
  mage.healthPoints -= dragon.damage;
  warrior.healthPoints =- dragon.damage
}

const result = () => battleMembers;

const gameActions = {
  guerreiro: warriorTurn(warriorDamage),
  mago: mageTurn(mageDamageAndMana),
  dragao: dragonTurn(dragonDamage),
  result: result(),
};