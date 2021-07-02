document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cardArray = [
    {
      name: 'man',
      img: 'images/man.png'
    },
    {
      name: 'man',
      img: 'images/man.png'
    },
    {
      name: 'moonwalker',
      img: 'images/moonwalker.png'
    },
    {
      name: 'moonwalker',
      img: 'images/moonwalker.png'
    },
    {
      name: 'pig',
      img: 'images/pig.png'
    },
    {
      name: 'pig',
      img: 'images/pig.png'
    },
    {
      name: 'smiley',
      img: 'images/smiley.png'
    },
    {
      name: 'smiley',
      img: 'images/smiley.png'
    },
    {
      name: 'spongebob',
      img: 'images/spongebob.png'
    },
    {
      name: 'spongebob',
      img: 'images/spongebob.png'
    },
    {
      name: 'star',
      img: 'images/star.png'
    },
    {
      name: 'star',
      img: 'images/star.png'
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/green-background.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/green-background.png');
      cards[optionTwoId].setAttribute('src', 'images/green-background.png');
      alert('Sorry, no match, try again.')
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congrats! You found them all.';
    }
  }

  //flip your card
  function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});