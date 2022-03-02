const searchMobile= () => {
  const searchField= document.getElementById('search-field');
  const searchText= searchField.value;
  console.log(searchText);

  searchField.value = '';
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhon(data.data));
  //.then(data => displaySearchResult(data.data));

}
const displayPhon = (data) => {
  const main = document.getElementById("main");
  console.log(main);
  data.forEach(phon => {
     console.log(phon);
     const div = document.createElement('div');

     div.classList.add("col-lg-4");
     div.classList.add("mb-5");
     div.innerHTML= ` 
     <div class="card" style= "width: 18rem";>
     <img src="${phon.image}" class="card-img-top" alt="...">
     <div class="card-body">
          <h5 class="card-title">${phon.phone_name}</h5>
         <h6 class="card-title">${phon.brand} </h6>
          <button onclick="phonDetails('${phon.slug}')" class="btn btn-primary">Details </button>
     </div>
   </div> `
   main.appendChild(div);
 })
}
const phonDetails = (slug) => {
 fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
 .then(res => res.json())
 .then(data => {
   const allphons = data.phons;
   const singleCard = allphons.find(slug => slug.code === slug)
  //console.log(allphons);
   const div = document.createElement("div");
   main.innerHTML="";
          div.innerHTML=`
              <div class="card" style="width: 18rem;">
                  <img src="${singleCard.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${singleCard.suit}</h5>
                      <p class="card-text">${singleCard.storage}</p>
                      <p class="card-text">${singleCard.memorey}</p>
                  </div>
              </div>
          `
          main.appendChild(div)
 })
}
