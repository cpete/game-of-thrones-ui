import { API_URL } from './util.mjs';

async function fetchBooks() {
  let response = await fetch(`${API_URL}/books`);
  return await response.json();
}

function createCardElement(book, index) {
  let card = document.createElement('div');
  card.className = 'card m-2';
  card.style = 'width: 22rem';
  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">
        ${book.name}
        <span class="badge bg-secondary float-end">${index}</span>
      </h5>
      <div class="mb-1">Pages: ${book.numberOfPages}</div>
      <a href="${book.url}" target="_blank" class="card-link">Details</a>
    </div>
  `;

  return card;
}

async function displayBooks(elem) {
  let books = await fetchBooks();

  books.forEach((book, index) => {
    let card = createCardElement(book, index + 1);

    elem.append(card);
  });
}

(function () {
  window.onload = displayBooks(document.getElementById('books-container'));
})();
