
let open = indexedDB.open("MyCurrenciesConverterDatabase", 1);
open.onupgradeneeded = function() {
    let db = open.result;
    let store = db.createObjectStore("MyCurrenciesObjectStore", {keyPath: "id"});
    let index = store.createIndex("currencyNameIndex", "currencyName");
};

open.onsuccess = function() {
   console.log("Data base created");
};

open.onerror = function() {
   console.log("Data base Not created");
};

// load currenes
   fetch( "https://free.currencyconverterapi.com/api/v5/currencies", {
                 method: 'get'
              }).then(function(response) { return response.json() })
                .then(function(data) {

                     let selectFrom = document.getElementById("currencyFrom");
                     let selectTo = document.getElementById("currencyTo");
                     let currencyName = ""; let currencyId = ""; let currencySymbol = "";  
                     for( key in  data["results"] ){
                      for( key2 in data["results"][key]) {
                        //console.log("+key");
                        if (key2 == "id"){
                          currencyId = data["results"][key][key2];
                        }
                        if (key2 == "currencyName"){
                          currencyName = data["results"][key][key2];
                        }
                        if (key2 == "currencySymbol"){
                          currencySymbol = '( '+data["results"][key][key2]+' )';
                        }
                      }
                          // Add to both select. 
                         // console.log("currencyName");
                      selectFrom.options[selectFrom.options.length] = new Option(currencyName+currencySymbol, currencyId);
                      selectTo.options[selectTo.options.length] = new Option(currencyName+currencySymbol, currencyId);    
                      currencyName = ""; currencyId = ""; currencySymbol = "";
                     }

                  })//.catch(function(errer){ console.log('sfsjhfkjh'); });



function convertCurrencies(e) {
    if (e.preventDefault) e.preventDefault();
     let currencyFrom = document.getElementById("currencyFrom").value;
     let currencyTo =  document.getElementById("currencyTo").value;
     let ammountFrom = document.getElementById("ammountFrom").value
     let query =  currencyFrom+'_'+currencyTo;

     fetch('https://free.currencyconverterapi.com/api/v5/convert?q='+currencyFrom+'_'+currencyTo+'&compact=ultra', {
                 method: 'get'
              }).then(function(response) { return response.json(); })
                .then(function(data) {
                   // console.log(data);
                    let taux = data[query]
                    let total = taux * ammountFrom;
                      if (isNaN(total )){
                           document.getElementById("ammountTo").value =  "" ;
                           alert(document.getElementById("ammountFrom").value+" is not a correct value") ;       
                      }else{
                          document.getElementById("ammountTo").value =  Math.round(total*100)/100 ;        
                      }
                  });
    return false;
}


