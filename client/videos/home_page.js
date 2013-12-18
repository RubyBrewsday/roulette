if (Meteor.isClient) {
   Meteor.startup(function() {
    Session.setDefault('videoOffset', _.random(300))
  //  Videos.findOne({},{skip: Session.get('videoOffset')}).fetch().id
  })
  Template.homePage.helpers({
  
    video: function() {
      var offset = Session.get('videoOffset')
      return Videos.findOne({},{skip: offset})
    }
  }
  );
  Template.homePage.rendered = function() {
   var video_id = Videos.findOne({},{skip: Session.get('videoOffset')}).url
   // debugger
    var video = Popcorn.youtube('#youtube-video', 'http://www.youtube.com/embed/'+video_id);
    video.play()
  }
  Template.homePage.events({
    'click #new-video': function(e) {
      console.log(e)
      Session.set('videoOffset', _.random(300))
      Deps.flush()
    }
  });

}


/*



var results = ""
for (var i = 0; i<1000; i++ ) {
  results += videoChoice();
  return videos[results];
}*/