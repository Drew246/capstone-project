const speakers = [
    {
        name: "John Smith",
        image: "images/speaker1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, quis feugiat facilisis."
    },
    {
        name: "Jane Doe",
        image: "images/speaker1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, quis feugiat facilisis."
    },
    {
        name: "John Smith",
        image: "images/speaker1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, quis feugiat facilisis."
    },
    {
        name: "Jane Doe",
        image: "images/speaker1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, quis feugiat facilisis."
    },
    {
        name: "John Smith",
        image: "images/speaker1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, quis feugiat facilisis."
    },
    {
        name: "Jane Doe",
        image: "images/speaker1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, quis feugiat facilisis."
    },
];


const speakersSection = document.getElementById('speakers');

function generateSpeakerHTML(speaker) {
    return `
        <div class="column is-4">
            <article class="media">
                <figure class="media-left pb-5">
                    <p class="image is-128x128">
                        <img src="${speaker.image}">
                    </p>
                </figure>
                <div class="content">
                    <p>
                        <strong>${speaker.name}</strong>
                        <br>
                        ${speaker.description}
                    </p>
                </div>
            </article>
        </div>
    `;
}

function addSpeakersToSection() {
    let speakersHTML = '';

    for(let i = 0; i < speakers.length; i+=2) {
        let rowHTML = '<div class="columns is-centered">';

        
        rowHTML += generateSpeakerHTML(speakers[i]);

        
        if(speakers[i + 1]) {
            rowHTML += generateSpeakerHTML(speakers[i + 1]);
        }

        rowHTML += '</div>'; 

        speakersHTML += rowHTML;
    }

    speakersSection.innerHTML += speakersHTML;
}


addSpeakersToSection();

document.addEventListener('DOMContentLoaded', function () {

   
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    
    if (navbarBurgers.length > 0) {
  
    
      navbarBurgers.forEach(function (el) {
        el.addEventListener('click', function () {
  
          
          const target = el.dataset.target;
          const targetElement = document.getElementById(target);
  
          
          el.classList.toggle('is-active');
          targetElement.classList.toggle('is-active');
        });
      });
    }
  });
  