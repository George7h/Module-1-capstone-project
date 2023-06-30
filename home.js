/* Menu Button */
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menuItems = document.querySelector('.menu-items');
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-btn');
  closeButton.innerHTML = '<i class="fas fa-times"></i>';
  menuItems.appendChild(closeButton);

  menuBtn.addEventListener('click', () => {
    menuItems.classList.toggle('show');
  });

  closeButton.addEventListener('click', () => {
    menuItems.classList.remove('show');
  });
});

/* Dynamic section */
const dungeonMaster = [
  {
    image: './assets/Speakers/pexels-gioele-fazzeri-4496725.jpg',
    name: 'Gabriel Falconer',
    hosted: 'Tournaments Hosted : 6',
    description: 'Revolves around epic tales of dwarven craftsmanship and legendary artifacts. In the Forge of Legends, players delve into ancient mines, master the art of smithing, and create legendary weapons and armor. Alongside crafting, players face formidable challenges and undertake quests to secure their place in the annals of dwarven lore.',
  },
  {
    image: './assets/Speakers/OliviaGreenfield.jpg',
    name: 'Olivia Greenfield',
    hosted: 'Tournaments Hosted : 9',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    image: './assets/Speakers/pexels-valiantsin-konan-10547073.jpg',
    name: 'Benjamin Smith',
    hosted: 'Tournaments Hosted : 12',
    description: 'Specializes in high-octane, combat-focused adventures. In the Battlegrounds of Valor, players participate in grand-scale battles, epic duels, and daring quests that test their tactical skills and valor. With intense combat encounters and strategic decision-making, this game experience is perfect for players seeking thrilling action and heroic feats.',
  },
  {
    image: './assets/Speakers/samuel steelgrave.jpg',
    name: 'Samuel Steelgrave',
    hosted: 'Tournaments Hosted : 4',
    description: 'Creates an immersive and atmospheric game experience where players find themselves in a dark and mysterious realm known as Oblivion. The campaign is filled with suspense, eerie encounters, and challenging puzzles, as players navigate through shadowy landscapes and unravel the secrets of this twisted dimension.',
  },
  {
    image: './assets/Speakers/stella Astrid.jpg',
    name: 'Stella Astrid',
    hosted: 'Tournaments Hosted : 12',
    description: 'Revolves around epic tales of dwarven craftsmanship and legendary artifacts. In the Forge of Legends, players delve into ancient mines, master the art of smithing, and create legendary weapons and armor. Alongside crafting, players face formidable challenges and undertake quests to secure their place in the annals of dwarven lore.',
  },
  {
    image: './assets/Speakers/pexels-italo-melo-2379004.jpg',
    name: 'Roger Nightingale',
    hosted: 'Tournaments Hosted : 9',
    description: 'Takes players on an epic journey of magical exploration and power. In Arcane Ascendance, players delve into ancient ruins, learn forgotten spells, and uncover artifacts of immense power. As the campaign progresses, players can ascend to new heights of arcane mastery, developing unique abilities and shaping the world around them.',
  },
];

const speaker = document.querySelector('.speaker-contents');
for (let i = 0; i < dungeonMaster.length; i += 1) {
  const hideClass = i >= 2 ? 'hide-mobile' : '';
  speaker.innerHTML += `
          <div id="speaker-content" class="speaker-content ${hideClass}">
            <div class="speaker-image">
              <img src="${dungeonMaster[i].image}" width="150">
            </div>
            <div class="speakerDetails">
              <h2>${dungeonMaster[i].name}</h2>
              <h5>${dungeonMaster[i].hosted}</h5>
              <div class="ruler1"></div>
              <p>${dungeonMaster[i].description}</p>
            </div>
          </div>
`;
}

const showMoreButton = document.querySelector('.showMore');
showMoreButton.addEventListener('click', () => {
  const hiddenSpeakerContents = document.querySelectorAll('.speaker-content.hide-mobile');
  hiddenSpeakerContents.forEach((content) => {
    content.classList.remove('hide-mobile');
  });
});

// Add an event listener to the links with the 'fade-link' class
const links = document.querySelectorAll('.fade-link');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();

    // Add the 'fade-out' class to the body element
    document.body.classList.add('fade-out');

    // After a short delay, navigate to the link's href
    setTimeout(() => {
      window.location.href = link.href;
    }, 500); // Adjust the delay as needed
  });
});
