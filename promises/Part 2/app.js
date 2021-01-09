$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    // 1.
    $.getJSON(`${baseURL}/new/draw/`).then(data => {
      let { suit, value } = data.cards[0];
      console.log(`${value.toLowercase()} of ${suit.toLowercase()}`); 
    });

    // 2.
    let firstCard = null;
    $.getJSON(`${baseURL}/new/draw/`)
    .then(data => {
        firstCard = data.cards[0];
        let deckId = data.deckId;
        return $.getJSON(`${baseURL}/${deckId}/draw/`);
    })
    .then(data => {
        let secondCard = data.cards[0];
        [firstCard, secondCard].forEach(function(card) {
            console.log(
                `${card.value.toLowercase()} of ${card.suit.toLowercase()}`

            );
        });
    });

    // 3.
});