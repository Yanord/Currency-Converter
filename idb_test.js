// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
/*
// Open (or create) the database
let open = indexedDB.open("MyCurrenciesConverterDatabase", 1);

// Create the schema
open.onupgradeneeded = function() {
    let db = open.result;
    let store = db.createObjectStore("MyCurrenciesObjectStore", {keyPath: "id"});
    let index = store.createIndex("currencyNameIndex", "currencyName");
};

open.onsuccess = function() {
    // Start a new transaction
    let db = open.result;
    let tx = db.transaction("MyCurrenciesObjectStore", "readwrite");
    let store = tx.objectStore("MyCurrenciesObjectStore");
    let index = store.index("currencyNameIndex");

    // Add some data
    store.put({ id: "ALL", currencyName: "Albanian Lek ", currencySymbol: "Lek" });
    store.put({id : "XCD", currencyName : "East Caribbean Dollar", currencySymbol : "$"});
    
    // Query the data
    let getJohn = store.get("ALL");
    let getBob = index.get("Albanian Lek ");

    getJohn.onsuccess = function() {
        console.log(getJohn.result.currencyName);  // => "John"
    };

    getBob.onsuccess = function() {
        console.log(getBob.result.id);   // => "Bob"
    };

    // Close the db when the transaction is done
    tx.oncomplete = function() {
        db.close();
    };
}

*/
//let getValues  = function(){

  let open2 = indexedDB.open("MyCurrenciesConverterDatabase", 1);

  
  open2.onsuccess = function() {
    // Start a new transaction
    let db = open2.result;
    let tx = db.transaction("MyCurrenciesObjectStore", "readwrite");
    let store = tx.objectStore("MyCurrenciesObjectStore");
    let index = store.index("currencyNameIndex");

    // Add some data
//  store.put({ id: "ALL", currencyName: "Albanian Lek ", currencySymbol: "Lek" });
//  store.put({id : "XCD", currencyName : "East Caribbean Dollar", currencySymbol : "$"});
    
    // Query the data
    let getJohn = store.get("XCD");
    let getBob = index.get("Albanian Lek ");

    getJohn.onsuccess = function() {
        console.log(getJohn.result.currencyName);  // => "John"
    };

    getBob.onsuccess = function() {
        console.log(getBob.result.id);   // => "Bob"
    };

    // Close the db when the transaction is done
    tx.oncomplete = function() {
        db.close();
    };
}





//}












/*

/////////////////////


// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("MyCurrenciesConverterDatabase", 1);

// Create the schema
open.onupgradeneeded = function() {
    var db = open.result;
    var store = db.createObjectStore("MyCurrenciesObjectStore", {keyPath: "id"});
    var index = store.createIndex("currencyNameIndex", "currencyName");
};

open.onsuccess = function() {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("MyCurrenciesObjectStore", "readwrite");
    var store = tx.objectStore("MyCurrenciesObjectStore");
    var index = store.index("currencyNameIndex");

    // Add some data
    store.put({ id: "ALL", currencyName: "Albanian Lek ", currencySymbol: "Lek" });
    store.put({id : "XCD", currencyName : "East Caribbean Dollar", currencySymbol : "$"});
    
    // Query the data
    var getJohn = store.get("ALL");
    var getBob = index.get("Albanian Lek ");

    getJohn.onsuccess = function() {
        console.log(getJohn.result.currencyName);  // => "John"
    };

    getBob.onsuccess = function() {
        console.log(getBob.result.id);   // => "Bob"
    };

    // Close the db when the transaction is done
    tx.oncomplete = function() {
        db.close();
    };
}


////////////////////

*/