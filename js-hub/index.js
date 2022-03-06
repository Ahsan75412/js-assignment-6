
document.getElementById('error').style.display = 'none';
const searchPhone = () => {
  const searchBar = document.getElementById('search-field');
  // console.log(searchBar);
  const textSearch = searchBar.value;
  // console.log(textSearch);


  //clear data 
  searchBar.value = '';
  document.getElementById('error').style.display = 'none';

  if (textSearch == '') {

  }
  else {
    // data Loading dynamically Api here 

    const url = `https://openapi.programming-hero.com/api/phones?search=${textSearch}`



    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.status == true) {
          displaySearchResult(data.data);
        } else {
          displayError();
        }
      });

  }
};
const displayError = () => {
  document.getElementById('error').style.display = 'block';
}

// display Result Function here 

const displaySearchResult = phones => {
  const searchResult = document.getElementById('search-result');

  searchResult.textContent = '';

  phones.slice(0, 20).forEach(data => {
    const div = document.createElement('div');
    div.classList.add('col');

    div.innerHTML = `
        
        <div class="card">
        <h4 class="card-title text-center">${data.brand}</h4>
        <img src="${data.image}" class="card-img-top mx-auto resize" >
        <div class="card-body text-center">
          <h5 class="card-title">${data.phone_name}</h5>
          <button onclick="loadingPhoneDetail('${data.slug}')" type="button" class="btn btn-success ">Show Detail</button>
        </div>
      </div>
        
        
        `;

    searchResult.appendChild(div);

  });
}



// show detail function

const loadingPhoneDetail = id => {


  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayPhoneDetail(data.data))

}

const displayPhoneDetail = phones => {


  const phoneDetails = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.classList.add('card');

  phoneDetails.textContent = '';
  div.innerHTML = `
    <h4 class="text-center text-success pb-4 pt-4">Detail Information</h4>
    <img src="${phones.image}" class="card-img-top  w-50 mx-auto" >
    <div class="card-body">
      <h5 class="card-title">${phones.name}</h5>
      <p class="card-text">${phones.releaseDate ===  '' ? 'No release date found! ' : phones.releaseDate}</p>
      <h5>Main Features:-</h5>
      <p class="card-text"> Storage: ${phones.mainFeatures.storage}</p>
      <p class="card-text">Chip Set: ${phones.mainFeatures.chipSet}</p>
      <p>Memory: ${phones.mainFeatures.memory}</p>
      <p>Display: ${phones.mainFeatures.displaySize}</p>

      <h5>Sensor:- </h5>
       
      <p>Sensors: ${phones.mainFeatures.sensors}</p>

      <h5>Others:-</h5>
        <p>WLAN: ${phones.others?.WLAN === undefined ? 'No' : phones.others?.WLAN}</p>
        <p>Bluetooth: ${phones.others?.Bluetooth === undefined ? 'No' : phones.others?.Bluetooth}</p>
        <p>GPS: ${phones.others?.GPS === undefined ? 'No' : phones.others?.GPS}</p>
        <p>NFC: ${phones.others?.NFC === undefined ? 'No' : phones.others?.NFC}</p>
        <p>Radio: ${phones.others?.Radio === undefined ? 'No' : phones.others?.Radio}</p>
        <p>USB: ${phones.others?.USB === undefined ? 'No' : phones.others?.USB}</p>        
    </div>
    
    
    
    `;

  phoneDetails.appendChild(div);
  //product click to scroll
  phoneDetails.scrollIntoView({ behavior: "smooth" });
}





















