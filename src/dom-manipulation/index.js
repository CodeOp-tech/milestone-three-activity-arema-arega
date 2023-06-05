/*
* Usa todo lo que has aprendido para manipular el DOM usando sólo JavaScript
* para completar las preguntas debajo cuando hagas "submit" en el formulario:
* 1. Cambia el estilo del elemento <body> para que todo el texto tenga una font-family: "Verdana, sans-serif".
* 2. Asegúrate que todos los elementos <span> muestren el contenido que has introducido en los inputs.
* 3. Haz un loop que cambie la clase de cada <li> a "list-item"
* 5. Crea un nuevo elemento <img>, haz que el atributo src sea una imagen tuya y añádelo a la parte superior
* de la sección "Sobre mi". Si necesitas añadir algún elemento adicional al index.html, puedes hacerlo,
* pero crédito extra si lo logras sin añadir elementos adicionales. 
* 5. Bonus - Modifica y añade estilo al layout para que tu página "Sobre mi" tenga una aspecto más pulido.
 */




function handleSubmit(event) {
  alert("Submit!");
  const restaurantsInput = event.target.elements.restaurantsInput.value;
  const neighborhoodInput = event.target.elements.neighborhoodInput.value;
  const hometownInput = event.target.elements.hometownInput.value;
  console.log(restaurantsInput);
  console.log(neighborhoodInput);
  console.log(hometownInput);
  event.preventDefault();
  console.log("form was submitted!");
  const restaurant = document.getElementById("restaurant");
  const neighborhood = document.getElementById("neighborhood");
  const hometown = document.getElementById("hometown");
  console.log(restaurant);
  console.log(neighborhood);
  console.log(hometown);
  restaurant.textContent = restaurantsInput;
  neighborhood.textContent = neighborhoodInput;
  hometown.textContent = hometownInput;
  let li = document.getElementsByClassName("li");
  console.log(li);
  li.classname = "list-item";
  console.log(li);
  let image = document.createElement("image");
  image.href = "https://static.wixstatic.com/media/c1c014_269fd3e89fd8410b9af2dc270fc9ffd9~mv2_d_3000_1500_s_2.png/v1/fill/w_560,h_250,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1c014_269fd3e89fd8410b9af2dc270fc9ffd9~mv2_d_3000_1500_s_2.png"
  const body = document.getElementById("body");
  body.appendChild(image)

  form.reset()

  













}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
