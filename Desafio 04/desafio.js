const pessoa = [
  { name: 'Thiago', idade: 4567 },
  { name: 'Caio', idade: 8 },
  { name: 'Bruno', idade: 24 }
];

let res = document.querySelector('div#res')

function somentenome() {
  for (let i = 0; i < pessoa.length; i++) {
    res.innerHTML += `${(pessoa[i].name)} <br/>`
  }
}