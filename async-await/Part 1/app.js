let favNumber = 9;
let baseURL = "http://numbersapi.com";

// 1
async function part1() {
    let amount = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(amount);
}
part1();

// 2
const favNumbers = [12, 5, 17];
async function part2() {
    let amount = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(amount);
}
part2();

// 3
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(amount => { 
        $('body').append(`<p>${amount.text}</p>`);
    });
}
part3()