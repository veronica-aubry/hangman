describe('getRandomWord', function(){
  it("get random number", function(){
    expect(getRandomWord()).to.equal("goodbye");
  });
});

describe("blankMaker", function() {
  it("takes the length of a random word and returns and array of underscores of equal length", function(){
    expect(blankMaker(4)).to.eql(["_", "_", "_", "_"]);
  })
})

describe("letterQuest", function() {
  it("replaces the target puzzleArray index with a correct input letter", function() {
    expect(letterQuest("hell", "l")).to.eql(["_", "_", "l", "l"])
  })
})

describe("scoreCounter", function() {
  it("keep track of score and break game when user counter is less than -6", function() {
    expect(letterQuest("hello", -6)).to.eql([false])
  })
})
