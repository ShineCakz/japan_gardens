// <!-------------------------------------API DE UNSPLASH----------------------->
const requestUrl =
'https://api.unsplash.com/search/photos?collections=27158825&query=japan-garden&client_id=5Gvyl0t2K-7UkLrRrvfmPMn3buRExhe7G6nQEEDIJj4';
 const getImagesButton = document.querySelector('.getImagesButton');
 const imageToDisplay = document.querySelector('.imageToDisplay');

 getImagesButton.addEventListener('click', async () => {
   let randomImage = await getNewImage();
   imageToDisplay.src = randomImage;
 });

 async function getNewImage() {
   let randomNumber = Math.floor(Math.random() * 10);
   return fetch(requestUrl)
     .then((response) => response.json())
     .then((data) => {
       let allImages = data.results[randomNumber];
       return allImages.urls.regular;
     });
 }
// <!----------------------------------------------------------->

