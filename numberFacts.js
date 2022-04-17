// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

// Example URL http://numbersapi.com/random/year?json

// $.getJSON(`http://numbersapi.com/619?json`).then(data => {
//     console.log(data)
//     $('#number1').text(data.text)
// })
const baseurl = 'http://numbersapi.com'
// REFACTOR TIME
// Part 1
async function getNumberText(randomNumber) {
    let url = `${baseurl}/${randomNumber}?json`
    let { data: data } = await axios.get(`${url}`)
    console.log(data.text)
    $('#number1').text(data.text)
}

getNumberText(100)

// Figure out how to get data on multiple numbers in a single request.Make that request and when you get the data back, put all of the number facts on the page.
// To get facts about multiple numbers in one request, specify ranges for number in http://numbersapi.com/number/type.
numbers = [7, 619, 3000]

// $.map(numbers, function (val, i) {
//     $.getJSON(`http://numbersapi.com/${val}?json`).then(data => {
//         console.log(data)
//         $(`#num${i}`).text(data.text)

//     })
// })

// REFACTOR TIME
// Part 2
const favnumbers = [7, 619, 3000]

async function batchRequests() {
    try {
        let data = await $.getJSON(`${baseurl}/${favnumbers}?json`)
        console.log("===part2===")
        console.log(data)
    }
    catch {
        console.log("Part 2 Fail")
    }
}
batchRequests()

// // Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

// Promise.all(
//     Array.from({ length: 4 }, () => {
//         return $.getJSON('http://numbersapi.com/7?json')
//     })
// ).then(facts => {
//     facts.forEach(data => $("#numbers3").append(`<li>${data.text}</li>`))
// })
favNumber = 7
async function fourFacts() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseurl}/${favNumber}?json`))
    )
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}

fourFacts()