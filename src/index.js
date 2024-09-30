console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchDogsImg();
    fetchBreedUrl();
    addBreedFilterListener();
  });

function fetchDogsImg() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(res => res.json())
        .then(data => {
            renderDogsImg(data.message)
        })
        .catch(error => console.error('Error fetching dog images:', error));
  }

function renderDogsImg(dogs) {
    const div = document.getElementById('dog-image-container');
    dogs.forEach(dog => {
        console.log(dog);
        const image = document.createElement('img');
        image.src = dog;
        div.appendChild(image);
    })
}

  function fetchBreedUrl() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => renderBreedUrl(data.message));
  }

  function renderBreedUrl(breeds) {
    const ul = document.querySelector('ul');
    const breedNames = Object.keys(breeds);
    breedNames.forEach(breed => {
      const li = document.createElement('li');
      li.innerHTML = breed;
      ul.appendChild(li);
    });
    const listItems = document.querySelectorAll('ul li');

    listItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.target.style.color = '#FF0000';
        });
    })
  }
    
function addBreedFilterListener() {
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', function(event) {
        const selectedLetter = event.target.value;
        filterBreeds(selectedLetter);
        }) 
    }

    function filterBreeds(letter) {
        const ul = document.querySelector('ul');
        const allBreeds = ul.getElementsByTagName('li');
        for (let i = 0; i < allBreeds.length; i++) {
            const breed = allBreeds[i];
            if (breed.innerHTML.startsWith(letter)) {
                breed.style.display = '';
            } else {
                breed.style.display = 'none';
            }
        }

    }
