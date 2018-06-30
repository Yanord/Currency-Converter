
self.addEventListener('install', function(event) {


  event.waitUntil(
    
     caches.open("currencyConverter-static-v1").then(function(cache){
       return cache.addAll([
       '/',
       'style.css',
       'initialisation.js',
       'init_SW.js' 
       ]);
     })
    );
  });

   // TODO: open a cache named 'wittr-static-v1'
    // Add cache the urls from urlsToCache
 







self.addEventListener('fetch', function(event) {
    
    //let requestUrl = new URL(event.request.url);

   /* if(requestUrl.origin === location.origin){
      console.log(requestUrl.pathname);
      if (requestUrl.pathname === '/Currency-Converter/') {
        console.log("Skeleton");
       event.respondWith(caches.match('/skeleton'));
       return;
      }
    }  
    */
  


    event.respondWith(
     caches.match(event.request).then(function(response) {
     if (response) {
     //console.log("There is  caches file fies for this 	");
     //console.log(event.request);
     	return response;
     }
     //console.log("no caches file fies for this 	");
     //console.log(event.request);
     if (event.request.url.endsWith('Currency-Converter/')){
       //console.log("cache for main page");
       console.log("jonglage");
       //event.respondWith(caches.match('/'));
      // return cache.match('/');
      let htmlHeader = {headers : {'Content-Type': 'text/html' }}; 
      return new Response(skelelon,htmlHeader);
     }
      
     //return new Response("qssq <b> world </b>"); 
      return fetch(event.request)
     })
   );




 /* if (event.request.url.endsWith('ultra')){
     // console.log(event.request);
      let query = event.request.url.replace("https://free.currencyconverterapi.com/api/v5/convert?q=","").replace("&compact=ultra","");;
      //    query = query.replace("&compact=ultra","");
      
      let value = 100; 

      let jsonResponseString = '{"'+query+'":'+ value +'}'
      let jsonHeader = {headers : {'Content-Type': 'application/json' }}; 

      // console.log(jsonResponseString);
       event.respondWith( new Response(jsonResponseString,jsonHeader) ); 
    //   fetch(event.request);
  }

  if (event.request.url.endsWith('currencies')){
     console.log("the currencies fetch was intercept");
   //  console.log(event.request);
  }

  if (event.request.url.endsWith('Currency-Converter/')){
     console.log("the main page web  fetch was intercept");
     console.log(event.request);
  }  */

  


 //event.respondWith(  new Response("Hellhghgo <b> world </b>") ); 
})




/*self.addEventListener('fetch', function(event) {
   console.log("Hello");
  event.respondWith(new Response('Courage'));
});



{
  "USD_PHP": 46.211,
}

//////////
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true



event.respondWith(  new Response("Hello world") ); */



let skelelon = 

`<HTML>
 <HEAD>  
   <TITLE> _ Currency converter </TITLE>
   <link rel="stylesheet" href="style.css">
   <script  src="initialisation.js" >   </script>
   <script  src="init_SW.js" >   </script>
   
  </HEAD>
 <BODY >
<!-- src="init.js" -->
   <form method="POST"   action =""  id="my-form" >
     
     <div class = screen> 
       <H1> FROM </H1> 
        Currency  : 
          <select required name = "currencyFrom"  id = "currencyFrom">
          </select>
      <br> <br>

      Ammount : <input 
      <input  type= "text" size = 15 name="ammountFrom" id="ammountFrom" required  placeholder="Ammount To convert" >   
       <br> <br> <br>
      <input type= "submit" name="convert" value = "Convert"  >
     </div>
    
     <div class = tableau> 
       <H1> TO </H1> 
       Currency  : 
        <select  required  name = "currencyTo" id ="currencyTo" >
        </select>'
        <br> <br>
        Ammount : <input disabled type= "text" size = 15 id="ammountTo" name="ammountTo"  >   
     </div> 
  
  </form> 

  
<script type="text/javascript">
    
  let form = document.getElementById("my-form");
  //console.log(form+" 5");

    if (form.attachEvent) {
      form.attachEvent("submit", convertCurrencies);
  } else {
      form.addEventListener("submit", convertCurrencies );
  }


</script>

 </BODY>
</HTML>
`
