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



async function getArtById(imageNum, id, artist) {
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
  }

  getArtById(5357, 'one', "artwork-name-one");
  getArtById(7124, 'two', "artwork-name-two");
  getArtById(869, 'three', "artwork-name-three");
  getArtById(8958, "artwork-name-three");



async function getBanner(imageNum, id) {
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
  const imgUrl = `https://www.artic.edu/iiif/2/${url}/full/843,/0/default.jpg`;
  console.log(imgUrl);
  const img = document.getElementById(id);
  console.log(img);
  img.src = imgUrl;
    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }


  getBanner(4758, "banner-image");

