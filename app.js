alert("HEY working!");

/*/full/843,/0/default.jpg

https://www.artic.edu/iiif/2/{identifier}/full/200,/0/default.jpg
https://www.artic.edu/iiif/2/{identifier}/full/400,/0/default.jpg
https://www.artic.edu/iiif/2/{identifier}/full/600,/0/default.jpg
https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg

https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=0
*/

/*The Watermill with the Great Red Roof id 869*/

/*THE RED ARMCHAIR ID  5357*/

/*THE SEATED NUDE ID 7124*/



/*async function getArtById(imageNum, id, artist) {
    try {    
      const response = await fetch(`https://api.artic.edu/api/v1/artworks/${imageNum}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.status);  
      }
      console.log(data);
      console.log(data.data);
    const url = data.data.image_id;
   const date = data.data.date_end;
  const artistTitle = data.data.artist_title;
  console.log(artistTitle);
  console.log(date);
  console.log(url);
  
  const imgUrl = `https://www.artic.edu/iiif/2/${url}/full/200,/0/default.jpg`
  console.log(imgUrl);
  const testImg = document.getElementById(id);
  console.log(testImg);
  testImg.src = imgUrl;
  const imgArtist = document.getElementById(artist);
  imgArtist.innerHTML = artistTitle;
    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }*/

  async function getTest(imageNum, id, artist) {
    try {    
      const response = await fetch(`https://api.artic.edu/api/v1/artworks/${imageNum}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.status);  
      }
      console.log("this is you test data", data);
    const url = data.data.image_id;

    let artistTitle = data.data.artist_title;
    console.log(artistTitle);
    console.log(url);
  
  const imgUrl = `https://www.artic.edu/iiif/2/${url}/full/200,/0/default.jpg`;
  console.log(imgUrl);
  const testImg = document.getElementById(id);
  testImg.src = imgUrl;
 
  const imgArtist = document.getElementById(artist);
  function extractLastName(fullName) {
    fullName.toString();
    // Split the full name string into an array of words
    const words = fullName.split(" ");
    
    // Return the last element of the array (which is the last name)
    return words[words.length - 1];
  } 
  let artistLastNameOnly = extractLastName(artistTitle);
  imgArtist.innerHTML = artistLastNameOnly;

  console.log(`This is the last name ${artistLastNameOnly}`)

    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }

  getTest(5357, 'one', "artwork-name-one");
  getTest(7124, 'two', "artwork-name-two");
  getTest(869, 'three', "artwork-name-three");
  getTest(11723, 'four', "artwork-name-four");
  getTest(14598, 'five', "artwork-name-five");
  getTest(15468, 'six', "artwork-name-six");
  getTest(16146, 'seven', "artwork-name-seven");
  getTest(16362, 'eight', "artwork-name-eight");
  getTest(16568, 'nine', "artwork-name-nine");



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



 
  async function getTest(imageNum, id, artist) {
    try {    
      const response = await fetch(`https://api.artic.edu/api/v1/artworks/${imageNum}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.status);  
      }
      console.log("this is you test data", data);
    const url = data.data.image_id;

    let artistTitle = data.data.artist_title;
    console.log(artistTitle);
    console.log(url);
  
  const imgUrl = `https://www.artic.edu/iiif/2/${url}/full/200,/0/default.jpg`;
  console.log(imgUrl);
  const testImg = document.getElementById(id);
  testImg.src = imgUrl;
 
  const imgArtist = document.getElementById(artist);
  function extractLastName(fullName) {
    fullName.toString();
    // Split the full name string into an array of words
    const words = fullName.split(" ");
    
    // Return the last element of the array (which is the last name)
    return words[words.length - 1];
  } 
  let artistLastNameOnly = extractLastName(artistTitle);
  imgArtist.innerHTML = artistLastNameOnly;

  console.log(`This is the last name ${artistLastNameOnly}`)

    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }

 





 
