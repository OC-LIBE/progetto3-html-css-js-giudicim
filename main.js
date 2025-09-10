const website = "https://frapollif.github.io/pet-adoption-data";

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`);
    const petsdata = await data.json();
    return petsdata;
}

function ageText(age) {
    if (age > 1) return age + ' years old';
    if (age == 1) return age + ' year old';
    return 'less than a year old';
}


async function displayPets() {
    const pets = await getPetsData();
    const template = document.querySelector('#animal-card-template');
    const main = document.querySelector('main');
    // Rimuovi tutte le card precedenti
    main.querySelectorAll('article').forEach(a => a.remove());

    pets.forEach(pet => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('img').src = pet.photo;
        clone.querySelector('.animal-name').innerText = pet.name;
        const d = new Date();
        let age = d.getFullYear() - pet.birthYear;
        clone.querySelector('.animal-age').innerText = ageText(age);
        clone.querySelector('.species').innerText = pet.species.charAt(0).toUpperCase() + pet.species.slice(1);
        clone.querySelector('.animal-description').innerText = pet.description;
        clone.querySelector('.btn-name').innerText = pet.name;
        clone.querySelector('.adopt-button').href = `${website}/pets/${pet.id}/`;
        main.appendChild(clone);
    });
}

// Funzione filtro
function displayFilteredPets(e) {
    const filter = e.target.dataset.filterAnimal;
    // (opzionale) gestisci classe attiva
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    document.querySelectorAll('article').forEach(card => {
        const species = card.querySelector('.species').innerText.trim().toLowerCase();
        if (filter === "All" || species === filter.toLowerCase()) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// Avvio
displayPets().then(() => {
    // Event listener dopo che le card sono state create
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', displayFilteredPets);
    });
});