function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }
  
  function loadPokemon(evolutionName) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${evolutionName}`;
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.alt = `${data.name} image`;
        pokemonImage.setAttribute('aria-label', `${data.name} image`);
        
        document.body.appendChild(pokemonImage);
      })
      .catch(error => {
        console.log('There was a problem with the fetch operation:', error.message);
      });
  }
  
  const evolutionName = getQueryStringValue('nome_da_evolucao');
  
  loadPokemon(evolutionName);
  
