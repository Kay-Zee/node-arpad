'use strict';

var assert = require('assert');
var Elo = require('../index.js');

describe('Multiplayer Usage', function() {
  it("should generate same number of ratings as input", function() {

    var elo = new Elo();
    elo.setKFactor(50);

    var ratings = [1200,1000];

    var newRatings = elo.newRatingsForAll(ratings)
    console.log(newRatings)

    assert.equal(newRatings.length, ratings.length);

    ratings = [1200,1200];

    var newRatings2 = elo.newRatingsForAll(ratings)

    assert.equal(newRatings.length, ratings.length);

    //console.log(newRatings)

  });
});
