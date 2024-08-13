const pet = {
  name: "Patches",
  species: "Dog",
  happiness: 50,
  play: function () {
    console.log(
      `you played with ${
        this.name
      }!  His happiness is now ${this.happiness += 10}!!`
    );
  },
  feed: function () {
    console.log(
      `You feed ${
        this.name
      }!!  His happiness is now ${this.happiness += 20}!!`
    );
  },
  status: function () {
    console.log(`Pet Name: ${this.name}`);
    console.log(`Species: ${this.species}`);
    console.log(`Happiness: ${this.happiness}`);
  },
  rename: function (newName) {
    console.log(`Your pet's new name is `);
  },
};
pet.status();
pet.play();
pet.feed();
pet.status();
