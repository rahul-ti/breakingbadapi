fetch('https://www.breakingbadapi.com/api/characters').then(response => response.json())
  .then(data => foo(data));

function foo(data) {
  data.forEach(element => {
    let row = document.getElementById('row');
  let card = document.createElement('div')

  card.innerHTML = `<div class="card m-10 h-100" style="width: 18rem;">
  <img src="${element.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">Played by ${element.portrayed}</p>
  </div>
</div>`

row.append(card)
  });

  
}
