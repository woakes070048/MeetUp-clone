var google_maps_loaded_def = null;

define(['jquery'],function($) {
  
  if(!google_maps_loaded_def) {
    
    google_maps_loaded_def = $.Deferred();
  
    window.google_maps_loaded = function() {
      google_maps_loaded_def.resolve(google.maps);    
    }
    
    require(['https://maps.googleapis.com/maps/api/js?key=AIzaSyCLUSs24sIbNQ3RBNUwvab0_J-80VPLVGo&libraries=places&callback=google_maps_loaded'],function(){},function(err) {
      google_maps_loaded_def.reject();
      //throw err; // maybe freak out a little?
    });
    
  }
  
  return google_maps_loaded_def.promise();
  
});