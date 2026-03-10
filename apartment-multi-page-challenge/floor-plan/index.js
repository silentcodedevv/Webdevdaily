const studioBtn = document.getElementById("studio-btn");
const oneBedroomBtn = document.getElementById("one-bedroom-btn");
const twoBedroomBtn = document.getElementById("two-bedroom-btn");
const titleSelection = document.getElementById("title-selection");
const bedSelection = document.getElementById("bed-selection");
const bathSelection = document.getElementById("bath-selection");
const sqSelection = document.getElementById("sq-selection");
const rentSelection = document.getElementById("rent-selection");
const imgSelection = document.getElementById("img-selection");


function studioBtnChange() {
  titleSelection.innerText = "Studio";
  bedSelection.innerText = "Studio";
  bathSelection.innerText = "1";
  sqSelection.innerText = "540-590";
  rentSelection.innerText = "$874-$1,238";
  imgSelection.src = "/apartment-multi-page-challenge/assets/Sudio.jpg";
}

function oneBedroomChange() {
  titleSelection.innerText = "One Bedroom";
  bedSelection.innerText = "1";
  bathSelection.innerText = "1";
  sqSelection.innerText = "705-855";
  rentSelection.innerText = "$1,263-$1,763";
  imgSelection.src = "/apartment-multi-page-challenge/assets/One Bedroom.jpg";
}

function twoBedroomChange() {
  titleSelection.innerText = "Two Bedroom";
  bedSelection.innerText = "2";
  bathSelection.innerText = "1";
  sqSelection.innerText = "1,140";
  rentSelection.innerText = "$1,577-$2,107";
  imgSelection.src = "/apartment-multi-page-challenge/assets/Two Bedrooms.jpg";
}


studioBtn.addEventListener("click", studioBtnChange);
oneBedroomBtn.addEventListener("click", oneBedroomChange);
twoBedroomBtn.addEventListener("click", twoBedroomChange);

