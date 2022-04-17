// Get a Deck_ID
// deck_id = $.getJSON(`http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).then(data => {
//     console.log(data.deck_id)
// })
let baseURL = 'https://deckofcardsapi.com/api/deck'

// let firstCard = null;
// $.getJSON(`${baseURL}/new/draw/`)
//     .then(data => {
//         firstCard = data.cards[0];
//         let deckId = data.deck_id;
//         return $.getJSON(`${baseURL}/${deckId}/draw/`);
//     })
//     .then(data => {
//         let secondCard = data.cards[0];
//         [firstCard, secondCard].forEach(function (card) {
//             console.log(
//                 `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
//             );
//         });
//     });

    // REFACTOR TIME
    // PART 1

async function part1() {
    let data = await $.getJSON(`${baseURL}/new/draw/`)
    let { suit, value } = data.cards[0]
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
}
part1()
part1()
    // END OF PART 1
let deckId = null;
let $btn = $('button')
let $cardArea = $('#card-area')
$.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
    $btn.show();
});
$btn.on('click', function () {
    $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
        let cardSrc = data.cards[0].image;
        $cardArea.append(
            $('<img>', {
                src: cardSrc
            })
        )
        if (data.remaining === 0) $btn.remove();
    })
})
//  REFACTOR TIME
// PART 2

async function part2() {

    let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
    let deckId = firstCardData.deck_id;
    let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);

    [firstCardData, secondCardData].forEach(card => {
        console.log("Hello from p2")
        let { suit, value } = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
}
part2()

// Part 3
async function p3() {
    let $btn = $('button')
    let $cardArea = $('#card-area')

    let deckData = await $.getJSON(`${baseURL}/new/shuffle/`)
    $btn.show().on('click', async function () {
        let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`)
        let cardSrc = cardData.cards[0].image
        $cardArea.append(
            $('<img>', {
                src: cardSrc
            })
        )
        if (cardData.remaining === 0) $btn.remove()
    })

}


