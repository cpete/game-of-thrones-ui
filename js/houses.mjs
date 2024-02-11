import { API_URL } from './util.mjs';

async function fetchHouses() {
  let response = await fetch(`${API_URL}/houses`);
  return await response.json();
}

function createCardElement(house) {
  let card = document.createElement('div');
  card.className = 'card m-2';
  card.style = 'width: 22rem';
  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">
        ${house.name}
      </h5>
      <p class="text-black-50">${house.region}</p>
      <div class="mb-1">${house.words}</div>
      <a href="${house.url}" target="_blank" class="card-link">Details</a>
    </div>
  `;

  return card;
}

async function displayHouses(elem) {
  let houses = await fetchHouses();

  houses.forEach((house) => {
    let card = createCardElement(house);

    elem.append(card);
  });
}

(function () {
  window.onload = displayHouses(document.getElementById('houses-container'));
})();
