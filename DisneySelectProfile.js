const profiles = [
  {
    name: "Cliente1",
    image: "./images/perfil0.png",
  },
  {
    name: "Cliente2",
    image: "./images/perfil1.jpg",
  },
  {
    name: "Cliente3",
    image: "./images/perfil2.jpg",
  },
];

const loadProflies = () => {
  const container = document.getElementById("profiles-container");

  profiles.forEach((profile) => {
    const newDiv = document.createElement("div");
    const newImage = document.createElement("img");
    const newP = document.createElement("p");

    newDiv.className = "profile";
    newDiv.id = `user${profiles.indexOf(profile)}`;

    newImage.src = profile.image;
    newImage.alt = profile.name;
    newImage.className = "profile-picture";

    newP.innerText = profile.name;
    newP.className = "font-format";

    newDiv.appendChild(newImage);
    newDiv.appendChild(newP);
    container.appendChild(newDiv);
  });

  createNewProfile(container);
};

const createNewProfile = (container) => {
  const newProfileDiv = document.createElement("div");
  const newProfileImage = document.createElement("img");
  const newProfileP = document.createElement("p");

  newProfileDiv.className = "profile";
  newProfileDiv.id = "newProfile";

  newProfileImage.src = "./images/addprofile.png";
  newProfileImage.alt = "Adicionar Novo Perfil";
  newProfileImage.className = "profile-picture new-profile";

  newProfileP.innerText = "Adicionar perfil";
  newProfileP.className = "font-format";

  newProfileDiv.appendChild(newProfileImage);
  newProfileDiv.appendChild(newProfileP);
  container.appendChild(newProfileDiv);
};
