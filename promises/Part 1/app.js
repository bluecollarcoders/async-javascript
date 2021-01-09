let favNumber = 9;
let baseUrl = "http://numbersapi.com";

// 1.
$.getJSON(`${baseUrl}/${favNumber}/?json`).then(data => {
    console.log(data);
});

// 2.
let favNumbers = [8, 10, 33];
$.getJSON(`${baseUrl}/${favNumbers}?json`).then(data => {
    console.log(data);
});

// 3/
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseUrl}/${favNumber}?json`);
    })

).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));

});