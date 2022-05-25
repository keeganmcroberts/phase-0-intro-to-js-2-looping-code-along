// Code your solutions in this filefor (let age = 30; age < 40; age++) {
    const name = ["Guadalupe", "Ollie", "Aki"]
    const event = ["surprise"]
    const cards = []

    function writeCards(name, event){
        for (let i = 0; i < 3 ; i++) {
            cards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
            console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        }
        return cards;
     
    }

    function countDown(n){
        for (let i = n; i >= 0; i-- ) {
            console.log(i)
        }
    }

