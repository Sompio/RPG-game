let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = [ {name: "", type: "", damage: 0}];

// declaring the buttons to the respective id they have in the HTML
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpTest = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

const lootItems = [
    { name: "Sword", type: "Weapon", damage: 10 },
    { name: "Stick", type: "Weapon", damage: 5 },
    { name: "Mace", type: "Weapon", damage: 10 },
    { name: "Pickaxe", type: "Weapon", damage: 8 },
    { name: "Staff", type: "Weapon", damage: 8 },
    { name: "Fistweapons", type: "Weapon", damage: 6 },
    { name: "Health Potion", type: "Consumable", healing: 20 },
    // Add more loot items as needed
];


//put the entire game status in an array of objects to access them through the updateFunction.
const gameStatus = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions" : [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"store.\""
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions" : [buyHealth, buyWeapon, goTown],
        text: "You enter the store"
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions" : [fightSlime, fightFangedBeast, goTown],
        text: "You enter the cave"
    }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(gameStatus) {
    console.log("working?");
    button1.innerText = gameStatus["button text"][0];
    button2.innerText = gameStatus["button text"][1];
    button3.innerText = gameStatus["button text"][2];
    button1.onclick = gameStatus["button functions"][0];
    button2.onclick = gameStatus["button functions"][1];
    button3.onclick = gameStatus["button functions"][2];
    text.innerText = gameStatus.text;
}

function goTown() {
    update(gameStatus[0]);
    /*button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"store\".";*/
}

function goStore() {
    update(gameStatus[1]);
    /*console.log("Going to store...");
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store";*/
}

function goCave() {
  update(gameStatus[2]);
}

function fightDragon() {
  console.log("fighting dragons");
}

function buyHealth(){
    if(gold <10) {
        console.log("Not enought gold");
        return;
    } else {
        gold -= 10;
        goldText.innerHTML = gold;

        health += 10;
        healthText.innerHTML = health;
    }
}

function buyWeapon(){
 gold = gold - 30;
}

function fightSlime() {
    gold = gold + 10;
    goldText.innerHTML = gold;
}

function fightFangedBeast() {
    //loot only 50% of the time if(Math.random() < 0.5)
}

function dropLoot() {
    if(Math.random() < 0.5) {
        const randomIndex = Math.floor(Math.random() * lootItems.length);
        const lootItem = lootItems[randomIndex];
        inventory.push(lootItem);
        console.log(`You found a ${lootItem.name}`);
    }
}

/*
function getRandomLootItem() {
    if(Math.random() < 0.5) {
    const randomIndex = Math.floor(Math.random() * lootItems.length);
        return lootItems[randomIndex];
     }else {
        console.log("No loot found");
        return null;
     }

}*/
