// Elemente abrufen
const wrapper = document.querySelector('.wrapper');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

// Funktion, um Pfeile je nach Scrollposition anzuzeigen
function updateArrows() {
  if (wrapper.scrollLeft === 0) {
    leftArrow.style.display = 'none'; // Verstecke den linken Pfeil, wenn am Anfang
    rightArrow.style.display = 'flex'; // Zeige den rechten Pfeil
  } else if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth) {
    leftArrow.style.display = 'flex'; // Zeige den linken Pfeil, wenn am Ende
    rightArrow.style.display = 'none'; // Verstecke den rechten Pfeil, wenn am Ende
  } else {
    leftArrow.style.display = 'flex'; // Zeige den linken Pfeil, wenn nicht am Anfang oder Ende
    rightArrow.style.display = 'flex'; // Zeige den rechten Pfeil
  }
}

// Beim Betreten des Containers: Zeige die Pfeile basierend auf der Scrollposition
wrapper.addEventListener('mouseenter', () => {
  updateArrows(); // Pfeile basierend auf der aktuellen Scrollposition anpassen
});

// Beim Verlassen des Containers: Zeige oder verstecke die Pfeile entsprechend
wrapper.addEventListener('mouseleave', () => {
  leftArrow.style.display = 'none'; // Verstecke den linken Pfeil, wenn den Container verlassen
  rightArrow.style.display = 'none'; // Verstecke den rechten Pfeil, wenn den Container verlassen
});

// Beim Scrollen: Zeige oder verstecke die Pfeile je nach Scrollposition
wrapper.addEventListener('scroll', updateArrows);

// Funktionen für die Pfeile hinzufügen, um das Scrollen zu steuern
rightArrow.addEventListener('click', () => {
  wrapper.scrollBy({ left: 400, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
  wrapper.scrollBy({ left: -400, behavior: 'smooth' });
});
