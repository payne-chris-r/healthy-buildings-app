import Ember from 'ember';

// $('body').attr('background-image', "url('/images/backsplash.png')")

export default Ember.Route.extend({
  activate: function(){
        // $('.navbar a').css('color', 'white');
        $('body').css('background', "url('images/backsplash.png') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        // $('.nav > li > a:hover').css('color', 'white');
        Ember.$('body').append()
      },
  deactivate: function(){
        $('body').css('background', "none");
        // $('.navbar a').css('color', 'black');
        // $('body').css('background', "url('images/ps_neutral.png')");
      }
});
