document.getElementById("error-massage").style.display = "none";

const searchMobile = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  //console.log(searchText);

  searchField.value = '';
  
  document.getElementById("error-massage").style.display = "none";
  if (searchText == "") {
  alert("Please enter a name")
}
  else {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  //console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhon(data.data))
  .catch(error => displayError(error))
}
}
const displayError = (error) => {
  const errorIs = document.getElementById("error-massage")
    errorIs.style.display = "block";
    const show = document.createElement("h6");
    show.innerHTML = `
    <p class="alert alert-danger">Error: ${error}</p>
    `
    errorIs.appendChild(show);

}

const displayPhon = (data) => {
  const main = document.getElementById("main");
  //console.log(main);
  const limitedPhon = data.slice(0, 20);
  limitedPhon.forEach(phon => {
      // console.log(phon);
      const div = document.createElement('div');

      div.classList.add("col-lg-4");
      div.classList.add("mb-5");
      div.innerHTML = ` 
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
      .then(data => showPhone(data));
}
const showPhone = (phon) => {
  //console.log(phon);
  const phonDetail = document.getElementById('phone-details')
  phonDetail.innerHTML = '';

  const div = document.createElement('div');
  div.innerHTML = `
<div class="card" style="width: 18rem;">
   <img src="${phon.data.image}" class="card-img-top" alt="...">
   <div class="card-body">
       <h5 class="card-title">${phon.data.mainFeatures.storage}</h5>
       <p class="card-text">${phon.data.mainFeatures.chipSet}</p>
       <p class="card-text">${phon.data.mainFeatures.memory}</p>
       <p class="card-text">${phon.data.mainFeatures.sensors}</p>
   </div>
</div>
`
  phonDetail.appendChild(div);
}
