// Fixture data 

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
    var seedjson = JSON.parse(Assets.getText('fights.json'));
    keys = ['poageIndex','title','url']
    values = _.values(seedjson); 
    arrayGroups = _.zip(values[0],values[1],values[2])
   // videoObjects = _.map(arrrayGroups, function(video) { return _.object(keys, values)})
    if (Videos.find().count() === 0) {
      _.each(arrayGroups, function(newVideo) {
        var video = { 
          title: newVideo[1],
          url: newVideo[2],
          poageIndex: newVideo[0]
        }
        Videos.insert(video);
      })
    }

  });
}