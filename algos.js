/* const findBrokenKeys = (str1, str2) => {
  const brokenLetters = [];

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i] && !brokenLetters.includes(str1[i])) {
      brokenLetters.push(str1[i]);
    }
  }

  return brokenLetters;
};

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
 */

function ransomNote(noteText, magazineText) {
  const noteWords = noteText.toLowerCase().split(" ");
  const magazineWords = magazineText.toLowerCase().split(" ");

  const magazineWordCounts = {};

  // Compter la fréquence de chaque mot dans magazineText
  for (const word of magazineWords) {
    magazineWordCounts[word] = (magazineWordCounts[word] || 0) + 1;
  }

  // Vérifier si les mots de noteText peuvent être formés à partir de magazineText
  for (const word of noteWords) {
    if (magazineWordCounts[word] && magazineWordCounts[word] > 0) {
      magazineWordCounts[word]--; // Décrémenter le compteur du mot utilisé
    } else {
      return false; // Mot non trouvé ou pas assez fréquent
    }
  }

  return true; // Tous les mots de la note ont été trouvés
}
