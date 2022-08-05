/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}*/

const gifts = ["teddy bear", "drone", "doll"];

const messages = [];

/*function wrapGifts(gifts) {
    let a = 0;
    while (a < gifts.length) {
        console.log(`Wrapped ${gifts[a]} and addad a bow!`);
        a++;
    }
}
/*function wrapGifts(gifts) {
    for (let a = 0; a < gifts.length; a++) {
        console.log(`Wrapped ${gifts[a]} and added a bow!`);
        
    }

   return gifts;
}*/

function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) {
        messages[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    }
    console.log(messages);
    return messages;
}


writeCards(["Bob", "Joe", "Sam"], "birthday");

function countDown(x) {

    while ( parseInt(x) >= 0) {
        console.log(parseInt(x));
        x--;
    }

}                   

countDown(10);