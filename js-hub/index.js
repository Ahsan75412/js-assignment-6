

const searchPhone = () => {
    const searchBar = document.getElementById('search-field');
    // console.log(searchBar);
    const textSearch = searchBar.value;
    // console.log(textSearch);


     //clear data 
     searchBar.value = '';


    // data Loading dynamically Api here 

    const url = `https://openapi.programming-hero.com/api/phones?search=${textSearch}`
// console.log(url);
  

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}


// display Result Function here 

const displaySearchResult = phones => {
    // console.log(phones);
    const searchResult = document.getElementById('search-result');

    searchResult.textContent = '';

    phones.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML= `
        
        <div class="card">
        <h4 class="card-title text-center">${data.brand}</h4>
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.phone_name}</h5>
          <button onclick="loadingPhoneDetail('${data.slug}')" type="button" class="btn btn-success">Show Detail</button>
        </div>
      </div>
        
        
        `;
        // console.log(data.slug);
        searchResult.appendChild(div);

    });
}



// show detail function

const loadingPhoneDetail = id => {
    console.log(id);

    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data) )
   
}

const displayPhoneDetail = phones => {
    console.log(phones);

    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
    
    <img src="${phones.image}" class="card-img-top " >
    <div class="card-body">
      <h5 class="card-title">${phones.name}</h5>
      <p class="card-text">${phones.releaseDate}</p>
      <h5>Main Features:-</h5>
      <p>${phones.mainFeatures.storage}</p>
      <p>${phones.mainFeatures.chipSet}</p>
      <p>${phones.mainFeatures.memory}</p>
      <p>${phones.mainFeatures.displaySize}</p>
    </div>
    
    
    
    `;

    phoneDetails.appendChild(div);
}





















