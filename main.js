const website = "https://frapollif.github.io/pet-adoption-data"

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`)
    const petsdata = await data.json()
    return petsdata
}


async function displayPets(){

    const pets = await getPetsData();
    const template = document.querySelector('#animal-card-template')

    const wrapper = document.querySelector('main')

      function ageText(age) {
        if (age > 1) {
            return age + ' years old'
        } else if (age == 1) {
            return age + ' year old'
        } else {
            return 'less than a year old'
        }
    }


    pets.forEach( pet =>{
        const clone = template.content.cloneNode(true)

        //modifichiamo il template

        const name = clone.querySelector('.animal-name')
        name.textContent=pet.name;

        const ageclass = clone.querySelector('.animal-age')
        const d = new Date();
        let age = d.getFullYear() - pet.birthYear;
        ageclass.innerText = ageText(age)

        const species = clone.querySelector('.species');
        species.textContent=pet.species.charAt(0).toUpperCase() + pet.species.slice(1);

        const description = clone.querySelector('.animal-description')
        description.textContent = pet.description;
        clone.querySelector('.btn-name').textContent = pet.name

        const adoptBtn = clone.querySelector('.adopt-button')
        // adoptBtn.action = `${website}/pets/${pet.id}/`
        adoptBtn.href = `${website}/pets/${pet.id}/`
        // aggiorniamo la foto
        const image = clone.querySelector('.animal-card-photo img')
        image.src=pet.photo
      
        wrapper.appendChild(clone)

        }
    )

}



displayPets();

function displayFiltersAnimal(e) {
    let petsArticles = document.querySelectorAll("article")

    petsArticles.forEach(petArticle => {
    console.log(petArticle)
    if (e.target.dataset.filterAnimal == "All") {
       petArticle.style.display = "flex"
}

    else if (small[1]. textContent != e.target.dataset.filterAnimal ) {
            petArticle.style.display = "none"
}
    else  {petArticle.style.display = "flex"
}
})


//     for (let index=0; index <petsArticles.length; index++) {
//         let petArticle = petArticle[index];        
//         const small= petArticle.querySelectorAll("animal-card-text small span")

//         if (e.target.dataset.filterAnimal == "All") {
//             petArticle.style.display = "flex"
//         }
//         else if (small[1]. textContent != e.target.dataset.filterAnimal ) {
//             petArticle.style.display = "none"
//         }
//         else  {
//             petArticle.style.display = "flex"
//         }

// }
};
const filterButtons = document.querySelectorAll("nav button");

filterButtons.forEach(button=> {
    button.addEventListener('click', (e) => {
        displayFiltersAnimal(e);
    })
});
