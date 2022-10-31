const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Nice to meet you ${answer}`);

  rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`I love to ${answer} too!`);

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Listening to ${answer} is always a great idea!`);

      rl.question('Which meal is your favourite (eg. dinner, brunch, etc.) ', (answer) => {
        console.log(`${answer} is one of my favourites as well!`);

        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Wow, ${answer} sounds delicious!`);

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Did you know that playing ${answer} is great for your heart?`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              console.log(`That is so cool! I love that you ${answer}.`)
              
              rl.close();
            })
          })
        })
      })
    })
  })

});