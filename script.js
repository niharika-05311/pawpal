const pets = [
  {
    name: "Rex",
    type: "dog",
    breed: "Golden Retriever",
    age: "2 years",
    health: "Healthy",
    born: "2023",
    img: "https://placedog.net/400/300?id=1"
  },
  {
    name: "Jenny",
    type: "cat",
    breed: "Orange Tabby",
    age: "1 year",
    health: "Healthy",
    born: "2024",
    img: "https://images.unsplash.com/photo-1583687534963-565854a3d6d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2luZ2VyJTIwY2F0fGVufDB8fDB8fHww"
  },
  {
    name: "Luna",
    type: "cat",
    breed: "British Shorthair",
    age: "3 years",
    health: "Healthy",
    born: "2022",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXc9DbRmmGqZAZ_wQ6ihEw8K7Fmyu3gi-yFw&s"
  },
  {
    name: "Mochi",
    type: "cat",
    breed: "Scottish Fold",
    age: "6 months",
    health: "Healthy",
    born: "2024",
    img: "https://static.wixstatic.com/media/0b1913_428b6bf993ca448a9f380109920db0b7~mv2.jpg/v1/fill/w_980,h_1307,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0b1913_428b6bf993ca448a9f380109920db0b7~mv2.jpg"
  },
  {
    name: "Buddy",
    type: "dog",
    breed: "Labrador",
    age: "4 years",
    health: "Healthy",
    born: "2021",
    img: "https://image.petmd.com/files/styles/863x625/public/2024-11/labrador-retriever.jpg"
  },
  {
    name: "Nolen",
    type: "hamster",
    breed: "Syrian",
    age: "8 months",
    health: "Healthy",
    born: "2024",
    img: "https://www.vetsurgeon.org/cfs-filesystemfile/__key/communityserver-blogs-components-weblogfiles/00-00-00-00-05/hamster.png?_=637913961600069749"
  }
];

const container = document.getElementById("pet-container");
const popup = document.getElementById("pet-popup");
const popupName = document.getElementById("popup-name");
const popupInfo = document.getElementById("popup-info");
const closePopup = document.getElementById("close-popup");
const reserveBtn = document.getElementById("reserve-btn");
const filter = document.getElementById("filter-type");

function displayPets(list) {
  container.innerHTML = "";
  list.forEach(pet => {
    const card = document.createElement("div");
    card.className = "pet-card";
    card.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}" />
      <h3>${pet.name}</h3>
      <p><strong>Breed:</strong> ${pet.breed}</p>
    `;
    card.addEventListener("click", () => showPopup(pet));
    container.appendChild(card);
  });
}

displayPets(pets);

function showPopup(pet) {
  popupName.textContent = pet.name;
  popupInfo.innerHTML = `
    <p><strong>Type:</strong> ${pet.type}</p>
    <p><strong>Breed:</strong> ${pet.breed}</p>
    <p><strong>Age:</strong> ${pet.age}</p>
    <p><strong>Health:</strong> ${pet.health}</p>
    <p><strong>Born:</strong> ${pet.born}</p>
  `;
  popup.classList.remove("hidden");
}

closePopup.onclick = () => {
  popup.classList.add("hidden");
};

reserveBtn.onclick = () => {
  alert("Your pet has been reserved! 🐾");
  popup.classList.add("hidden");
};

filter.onchange = () => {
  const value = filter.value;
  if (value === "all") {
    displayPets(pets);
  } else {
    const filtered = pets.filter(p => p.type === value);
    displayPets(filtered);
  }
};

document.getElementById("contact-form").onsubmit = e => {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
  e.target.reset();
};
