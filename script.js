const premier = document.getElementById('premier');
const deuxieme = document.getElementById('deuxieme');
const button = document.getElementById('test-btn');
const resultat = document.getElementById('resultat');

/*premier.addEventListener("change", function($event) {
    if ($event.target.value.length > 0 && deuxieme.value.length > 0) {
        button.disabled = false;
    }
    if (!resultat.classList.contains('hidden')) {
        resultat.classList.add('hidden');
    }
});

deuxieme.addEventListener("change", function($event) {
    if (premier.value.length > 0 && $event.target.value.length > 0) {
        button.disabled = false;
    }
    if (!resultat.classList.contains('hidden')) {
        resultat.classList.add('hidden');
    }
});*/

document.addEventListener('keyup', function() {
    if (premier.value.length > 0 && deuxieme.value.length > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
    resultat.classList.add('hidden');
})

button.addEventListener("click", function() {
    const compatibilite = Math.floor(Math.random() * 101);

    resultat.textContent = compatibilite + "%";
    resultat.classList.remove('hidden');  

    button.disabled = true;
});