const superman = {
name: 'Superman',
'real name': 'Clark Kent',
height: 75,
weight: 235,
hero: true,
villain: false,
allies: ['Batman','Supergirl','Superboy'],
fly() {
    return 'Up, up and away!';
}
};

const spiderman = {};
const spiderman = new Object();

const name = 'Iron Man';
const realName = 'Tony Stark';

// long way
const ironMan = { name: name, realName: realName };

// short ES6 way
const ironMan = { name, realName };

document.forms.hero.heroName.focus();
const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {

event.preventDefault(); // prevent the form from being submitted

const hero = {}; // create an empty object

hero.name = form.heroName.value;
hero.realName = form.realName.value;
alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
return hero;
}
hero.powers = [];
for (let i=0; i < form.powers.length; i++) {
if (form.powers[i].checked) {
    hero.powers.push(form.powers[i].value);
}
}