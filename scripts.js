var link = location.search;

var t = new URLSearchParams(link);

var r = t.get("evolucao");

document.title = "Página do " + r;

fetch("https://pokeapi.co/api/v2/pokemon/wartortle")
.then(data => {
    return data.json();
})
.then(post => {
    console.log(post.title);
})
