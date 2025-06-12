// Définition de VARIABLES

let options;
const todos = [];

// Définitions de FONCTIONS

function demanderOptions() {
  options = prompt(
    "Choisissez ce que vous voulez faire : new | list | delete | quit"
  );
  if (
    options !== "new" &&
    options !== "list" &&
    options !== "delete" &&
    options !== "quit"
  ) {
    alert("Merci de respecter la consigne");
    demanderOptions();
  }
}

function ajouterTodo() {
  const newTodo = prompt("Inserez une todo");
  todos.push(newTodo);
  alert(`La todo ${newTodo} a été ajoutée`);
}

function listerTodos() {
  if (!todos.length) {
    alert("La todo list est vide");
    return;
  }

  console.clear();
  console.log("====== TODOS ======");
  todos.forEach((element, index) => {
    console.log(`${index + 1} : ${element}`);
  });
  console.log("================");
}

function deleteTodo() {
  if (!todos.length) {
    alert("La liste est vide");
    return;
  }

  const deletedNumber = parseInt(prompt("Quel est le numéro à supprimer ?"));

  while (
    deletedNumber < 1 ||
    deletedNumber > todos.length ||
    isNaN(deletedNumber)
  ) {
    alert("Cette todo n'existe pas");
    deleteTodo();
  }

  alert(`La todo ${todos[deletedNumber - 1]} a été supprimée`);
  todos.splice(deletedNumber - 1, 1);
}

// Boucle principale

while (options !== "quit") {
  demanderOptions();

  if (options === "new") {
    ajouterTodo();
  } else if (options === "list") {
    listerTodos();
  } else {
    deleteTodo();
  }
}
