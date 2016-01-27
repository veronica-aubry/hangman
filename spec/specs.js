describe('getRandomWord', function(){
  it("get random number", function(){
    expect(words[0]).to.equal("hello");
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
