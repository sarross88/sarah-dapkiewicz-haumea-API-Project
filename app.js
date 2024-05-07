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

/*THE SEATED NUDE ID 7124


https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg*/

const testImg = document.getElementById('test');

console.log(testImg.src);

async function getArtById(id) {
    try {    
      const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.status);  
      }
      console.log(data);
      console.log(data.data);
    const url = data.data.image_url;
   const date = data.data.date_end;
  const artistTitle = data.data.artist_title;
  console.log(artistTitle);
  console.log(date);
  console.log(url);
 
  
    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }
  getArtById(5357);

  imgSrc ()

  async function imgSrc () {
    try {    
      const response = await fetch('https://www.artic.edu/iiif/2/7021/full/843,/0/default.jpg');
      const data = await response.json();
      if (!response.ok) {
        throw new Error(response.status);  
      }
      console.log(data);
  
    } catch (error) {
      alert('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }
  imgSrc ()

  


  /*  const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");
    for (let i = 0; i < data.length; i++) {
        const project = document.createElement("li");
        project.innerText = data[i].html_url;
        projectList.appendChild(project);
    }
*/