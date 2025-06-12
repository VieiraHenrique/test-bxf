// Commentaire

/*
Commentaire
Multi ligne
*/

//////////// VARIABLES ////////////

let hello;
const goodbye = 17 + 59;

//////////// Types de données ////////////

// Booléens --> true false
// Numbers --> integer float
// String --> texte
// null, undefined, NaN --> inexistantes
// Array, Objets --> Collections de données

console.log();
alert();
prompt();

//////////// STRINGS ////////////

const str1 = "double guillemets";
const str2 = "simple guillemets";
const str3 = `backticks ${str1}`;

// Concatenation
str1 + str2; // double guillementsimple guillemets

str1[2]; // u

// Méthodes string

str1.toUpperCase().endsWith("S"); // DOUBLE GUILLEMETS

"henrique".length; // Expression qui résulte en une valeur : number 8

//////////// Numbers ////////////

// int et le float (pas de virgule et virgule)

typeof 5.37; // float
typeof 3; // integer

const num = 5;

num.toString(); // méthode --> devient un string

// Opération mathématique

(5 + 3) / 17; // Expressios mathématiques

let numero = 5;
numero = numero + 5; // La même chose que numero += 5 --> numero += 5
numero = numero + 1; // La même chose que numero ++

//////////// Booléen ////////////

true;
false;

// Toute valeur a un équivalent booléen

// Truthy
Boolean(5); // true

// Falsy
- NaN - "" - 0 - undefined - false - null;

//////////// CONDITIONS ////////////

if (valeur1) {
  // Code sera exécuté si valeur1 est truthy
} else if (valeur2) {
  // Code sera exécuté si valeur1 est falsy et valeur2 est truthy
} else {
  // Si rien n'est truthy avant
}

// Opérations ternaires

valeur1 ? "hello" : 5;

console.log(age < 18 ? "mineur" : "majeur") // majeur

// Opérations logiques (retournent toujours un booléen)

true && true; // true --> Exige que tout soit true
true && false; // false
true || false; // true --> Exige que un au moins soit true
false || false; // false

'hello'

!true(
  // false --> Négation. Retourne un booléen inversé

  true && false
) || true; // true

// Opérations de comparaison

> < == === != !== >= <=

//////////// BOUCLES ////////////

// Va répéter le même morceau de code tant que sa condition est truthy

// for loops

// (valeur initiale ; condition ; itération--> changement de la valeur au long de la boucle)

for (let index = 0; index < str1.length; index++) {
  // Tant que condition est truthy, on exécute le code
  console.log("henrique"[index]);
}

// while loops

// tant que la condition est truthy, le bloc de code est exécuté

// IL FAUT TOUJOURS PREVOIR UNE POSSIBILITE QUE CA DEVIENNE FALSE

let chiffre = 8;

while (chiffre > 7) {
  chiffre++;
}

//////////// ARRAY ////////////

// Collections de valeurs (données) ordonées

const arr = [1, true, "hello", null];

arr[2] // "hello"

// Méthodes d'array simples

arr.push(10); // Ajouter 10 à la fin
arr.slice(2, 4); // Retourner une array ["hello", null] (ce qui a été pioché)

// Méthodes d'array avec callback --> Looper sur l'array et vont exécuter une fonction pour chaque élément.

function callBack(elementDeLArray, index) {
  console.log(index);
  console.log(elementDeLArray);
}

arr.forEach(callBack);

//////////// OBJETS ////////////

// Collection de valeurs identifiées par une clé.
// Non ordonnées

const obj = {
  prenom: "Henrique",
  nom: "Vieira",
  age: 37,
  hasChildren: true,
  hobbies: ["foot", "cinema"],
};

Object.keys();
Object.values();

obj.prenom // "Henrique"
obj["prenom"] // "Henrique"

obj.prenom = "Nouveau prénom"
obj.nouvellePropriete = "Je ne sais quoi"
obj["une nouvelle propriete"] = "autre chose"

//////////// FONCTIONS ////////////

// Bout de code réutilisable
// Intéressant pour dynamiser ce bout de code avec des arguments différents
// Une fonction équivaut toujours à une valeur (même si elle est undefined car aucun return)

function myFunc(param1, param2) {
  console.log(
    "Dans le bloc de la fonction on fait ce qu'on veut pour arriver à la valeur retournée"
  );

  param1 = parseFloat(param1);
  param2 = parseFloat(param2);

  return param1 + param2;
}

const resultat = myFunc(5, 3);

//////////// PROGRAMMATION ORIENTEE OBJET ////////////

// Paradigme de programmation --> Façon de faire (de programmer) Une philosophie de comment faire.

class Personnage {
  constructor(prenom, nom, age, profession) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.profession = profession;
  }

  salutations() {
    console.log("Hello les amis !");
  }
}

const henrique = new Personnage("Henrique", "Vieira", 37, "formateur");

/*

L'objet Henrique est :

{
  prenom: "Henrique",
  nom: "Vieira",
  age: 37,
  profession: "formateur",
  salutation: function (){
    return "Hello les amis !"
  }
}

*/

console.log(henrique.salutations());

const giacomo = new Personnage("Giacomo", "Chamourtziadis", 28, "étudiant");

console.log(giacomo.salutations());
