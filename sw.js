
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
   
    event.respondWith(     
      //  answer from caches of css ans js code 
     caches.match(event.request).then(function(response) {
     if (response) {
     	return response;
     }
   
      // answer from caches of main page  
     if (event.request.url.endsWith('Currency-Converter/')){
      console.log("jonglage");
      let htmlHeader = {headers : {'Content-Type': 'text/html' }}; 
      return new Response(skelelon,htmlHeader);
     }


     // answer for list of curencies url  
     if (event.request.url.endsWith('api/v5/currencies')){  
         fetch(event.request).then(function(response){
         if(response.status == 404){
            // todo data from caches 
            return new Response("nonnection ok but page not found");
         }else{           
           // data ok from the network cache data then return response 
           saveDataToDb(response);
           return response;
         }
       }).catch(function(error){

        // todo return data from database for no connexion to the server 


      
       return fetch(event.request);
        //let data = 
        //dataFromDatabase();
        

    
         
       });

    
      

       return fetch(event.request)
     }

     // answer for list convert url  
     if (event.request.url.endsWith('&compact=ultra')){  
       
       console.log("fetching convert url");
  
        return fetch(event.request)
     }
     return fetch(event.request)
      
     })
   );
});


  function dataFromDatabase(){
     
     let open = indexedDB.open("MyCurrenciesConverterDatabase", 1);
        open.onsuccess = function() {
        // Start a new transaction
        let db = open.result;
        let tx = db.transaction("MyCurrenciesObjectStore", "readwrite");
        let store = tx.objectStore("MyCurrenciesObjectStore");
        let index = store.index("currencyNameIndex");

          console.log("data from database");
         store.getAll().onsuccess = function(event) {
              
                console.log(event.target.result);
         
         };
     }
   }

  function saveDataToDb(response){
    //console.log("response");  
    let t =  (response.json()).then(function(result){ 
        
      let open = indexedDB.open("MyCurrenciesConverterDatabase", 1);
        open.onsuccess = function() {
        // Start a new transaction
        let db = open.result;
        let tx = db.transaction("MyCurrenciesObjectStore", "readwrite");
        let store = tx.objectStore("MyCurrenciesObjectStore");
        let index = store.index("currencyNameIndex");

        // Add some data    
  
        for( key in  result["results"] ){
           let element = result["results"][key];
    
          // console.log(element);
          let g = store.put(element);
        };
  
        // Close the db when the transaction is done
        tx.oncomplete = function() {
         db.close();
        };
      }
    });
}



/*
          console.log("ff");
          console.log(result);
          return result;*/
        
      
    //var parsed = JSON.parse(response); 
    //console.log("t");
   // console.log(t);
    

/*
    open.onupgradeneeded = function() {
        let db = open.result;
        let store = db.createObjectStore("MyCurrenciesObjectStore", {keyPath: "id"});
        let index = store.createIndex("currencyNameIndex", "currencyName");
    };
*/
  

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
