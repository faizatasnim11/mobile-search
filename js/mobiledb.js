const searchMobile= () => {
    const searchField= document.getElementById('search-field');
    const searchText= searchField.value;
    console.log(searchText);

    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    //console.log(url);
    fetch(url)
    .then(res => res.json())
    //.then(data => console.log(data));
    .then(data => displaySearchResult(data.data));
}
const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        console.log(data);
        const div= document.createElement('div');
        div.classList.add('col');
        div.innerHTML= ` 
        <div onclick="${data.slug}"  class="card h-100">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
             <h5 class="card-title">${data.phone_name}</h5>
            
        </div>
      </div> `
      searchResult.appendChild(div);
    })
}
const loadPhonDetail = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data[0]));

}