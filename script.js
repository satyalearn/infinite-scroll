const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

const count = 5;
const apiKey = "YTGHZK4enVlC2JIWvT4gTI8iS60auw2P9Vt4WpFNRUE";

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// function displayPhotos() {
//   photosArray.forEach((photo) => {
//     console.log(photo);
//     const item = document.createElement("a");
//     item.setAttribute("href", photo.links.html);
//     item.setAttribute("target", "_blank");

//     const img = document.createElement("img");
//     img.setAttribute("src", photo.urls.regular);
//     img.setAttribute("alt", photo.alt.description);
//     img.setAttribute("title", photo.alt.description);

//     item.appendChild(img);
//     imageContainer.appendChild(item);
//     console.log(imageContainer);
//   });
// }

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // Create <img> for photo
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    // console.log(photosArray);
    displayPhotos();
  } catch (error) {}
}

// async function getPhotos() {
//     try {
//       const response = await fetch(apiUrl);
//       photosArray = await response.json();
//       displayPhotos();
//     } catch (error) {
//       // Catch Error Here
//     }
//   }

getPhotos();
