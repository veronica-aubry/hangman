describe('getRandomWord', function(){
  it("get random number", function(){
    expect(getRandomWord(0, 3)).to.equal(true);
  });
});

describe("blankMaker", function() {
  it("takes the length of a random word and returns and array of underscores of equal length", function(){
    expect(blankMaker("_", 3)).to.eql(["_", "_", "_"]);
  })
})

describe("letterQuest", function() {
  it("replaces the target puzzleArray index with a correct input letter", function() {
    expect(letterQuest("hollo", "o")).to.eql(["_", "o", "_", "_", "o"])
  })
})
