  Template.homePage.helpers(
  { 
    video: function() {
      var randomVidOffset = _.random(0,665)
      console.log(randomVidOffset)
      return Videos.findOne({},{skip: randomVidOffset})
      }
})

/*



var results = ""
for (var i = 0; i<1000; i++ ) {
  results += videoChoice();
  return videos[results];
}*/