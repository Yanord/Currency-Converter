
if (navigator.serviceWorker){ 
 navigator.serviceWorker.register('sw.js').then(function() {
  console.log("Service worker register");
  }).catch(function(){
  	console.log("Service worker not registered");
  });
}  





