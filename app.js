/*Hamburger Menu Stuff*/
const hamMenu = document.querySelector('.ham-menu');
console.log(hamMenu);
const offScreenMenu = document.querySelector('.off-screen-menu');
console.log(offScreenMenu);

hamMenu.addEventListener('click', () => {
  console.log('clicked');
hamMenu.classList.toggle("active");
offScreenMenu.classList.toggle("active");
})

/*Function for banner image*/
async function getBanner(imageNum, id) {
    try {    
      const response = await fetch(`https://api.artic.edu/api/v1/artworks/${imageNum}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.status);  
      }
    const url = data.data.image_id;
    const imgUrl = `https://www.artic.edu/iiif/2/${url}/full/843,/0/default.jpg`;
    console.log(imgUrl);
    const img = document.getElementById(id);
    img.src = imgUrl;
    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }

  getBanner(4758, "banner-image");


/*Card Galler Functions*/
 

fetch("https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true")
.then(res => {
    if(!res.ok) {
        throw new Error("Invalid Request");
    }
    return res.json();
})
.then((data)=>{
    console.log(data.data);
    const objectIds = [];
    let artistObj = data.data;
    for (let i = 0; i < artistObj.length; i++) {
        objectIds.push(artistObj[i].id);
      }
    return objectIds.forEach((imageNum) => getImages(imageNum));
})
.catch((err)=>{
    console.log(err);
})


async function getImages(idImage) {
    try {    
      const response = await fetch(`https://api.artic.edu/api/v1/artworks/${idImage}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.status);  
      }
    console.log("this is you test data", data);

    /*DOM stuff*/
   
 //HTML element grabbed and add our new div,
let cardHolderId = document.getElementById("card-holder-id");
let cardTwo = document.createElement("div");
cardTwo.classList.add('card-two');
cardHolderId.append(cardTwo);
    let cardInner = document.createElement("div");
    cardInner.classList.add('card__inner');
    cardTwo.append(cardInner);
    //next level front and back added 
    let cardFacefront = document.createElement("div");
    cardFacefront.classList.add("card__face", "card__face--front");
    let cardFaceback = document.createElement("div");
    cardFaceback.classList.add('card__face', 'card__face--back');
    cardInner.append(cardFaceback, cardFacefront);
    //card front details
    let cardFrontcontent = document.createElement("div");
    cardFrontcontent.classList.add('card__frontcontent');
     cardFacefront.append(cardFrontcontent);
    let frontHtwo= document.createElement("h2");
     let frontImage = document.createElement("img");
    let frontHthree = document.createElement("h3");
    frontHthree.classList.add('date');
    cardFrontcontent.append(frontHtwo,frontImage,frontHthree);
    
        //back of card 
        const cardContentBack = document.createElement("div");
        cardContentBack.classList.add('card__content');
        cardFaceback.append(cardContentBack);
    
        const cardHeaderBack = document.createElement("div");
        cardHeaderBack.classList.add("card__header");
    
        const cardBodyBack = document.createElement("div");
        cardBodyBack.classList.add('card__body');
        cardContentBack.append(cardHeaderBack, cardBodyBack);
    
        const cardBackImage = document.createElement("img");
        cardBackImage.classList.add('pp');
        const cardBackHtwo = document.createElement("h2");
        cardHeaderBack.append(cardBackImage,cardBackHtwo);
        //card back details 
        const cardBackHthree = document.createElement("h3");
        const cardBackParagraph = document.createElement("p");
        cardBodyBack.append(cardBackHthree, cardBackParagraph);
    
   


      /*image set*/
    const url = data.data.image_id;
    const imgUrl = `https://www.artic.edu/iiif/2/${url}/full/200,/0/default.jpg`;
    frontImage.src = imgUrl;
    cardBackImage.src = imgUrl;

    /*Set the Date on front of card*/

    const artWorkDate = data.data.date_display;
    if(artWorkDate === null){
      frontHthree.innerHTML = "Date Unknown";
    } else{
      frontHthree.innerHTML = artWorkDate;
    }


    /*Set the back card place of origin*/
    let artOrigin = data.data.place_of_origin;
    cardBackHthree.innerHTML =`Artwork Origin: ${artOrigin}`;

    /*Set the back paragraph information*/
    let mediumDisplay = data.data.medium_display;
    cardBackParagraph.innerHTML = mediumDisplay;

    /*get artist title and set to back*/
    let artistTitle = data.data.artist_title;
    /*Get last name and set to front*/
    function extractLastName(fullName) {
    if(fullName === null){
      frontHtwo.innerHTML = "Artist Unknown";
    } else {
      fullName.toString();
      const words = fullName.split(" ");
      let artistLastNameOnly=  words[words.length - 1];
      frontHtwo.innerHTML = artistLastNameOnly;
    }
  } 
  extractLastName(artistTitle);

  function setFullName(fullName) {
    if(fullName === null){
      cardBackHtwo.innerHTML = "Artist Unknown";
    } else {
      cardBackHtwo.innerHTML = fullName;
    }
  } 
  setFullName(artistTitle);

  cardInner.addEventListener('click', function(){
    cardInner.classList.toggle('is-flipped');
})
    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  } 







 
