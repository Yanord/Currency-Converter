<HTML>
 <HEAD>  
   <TITLE> Currency converter </TITLE>
   <link rel="stylesheet" href="style.css">
   <!-- <script src="">   </script> -->
    <?php
      $json = file_get_contents("https://free.currencyconverterapi.com/api/v5/currencies");
      $obj = json_decode($json);
    ?>
 </HEAD>
 <BODY >

   <form method="POST"   action =""  id="my-form" >
     <div class = screen> 
       <H1> FROM </H1> 
        Currency  : 
        <?php
           echo ' <select required name = "currencyFrom"  id = "currencyFrom"> ' ;
           foreach($obj->{'results'} as $key => $value) {
             foreach($value as $key2 => $value2) {
                if($key2 == "id") {
                $currencyId = $value2;
              }
              if ($key2 == "currencyName") {
       	        $currencyName = $value2;
       	       } 
              if ($key2 == "currencySymbol") {
               	$currencySymbol = '('.$value2.')';
              }
            }
            echo '<option value = "'.$currencyId.'"> '.$currencyName	.' '.$currencySymbol.' </option>' ;   
            $currencyId = "";
            $currencySymbol = "";
            $currencyName = "";
          }
          echo '</select>';  
      ?>

      <br> <br>

      Ammount : <input 
      <input type="text"   type= "text" size = 15 name="ammountFrom" id="ammountFrom" required  placeholder="Ammount To convert" >    <br> <br> <br>
      <input type= "submit" name="convert" value = "Convert"  >
    </div>
    <div class = tableau> 
       <H1> TO </H1> 
       Currency  : 
       <?php
          echo ' <select  required  name = "currencyTo" id ="currencyTo" > ' ;
          foreach($obj->{'results'} as $key => $value) {
            foreach($value as $key2 => $value2) {
              if($key2 == "id") {
                $currencyId = $value2;
              }
             if ($key2 == "currencyName") {
           	   $currencyName = $value2;
           	 } 
             if ($key2 == "currencySymbol") {
             	$currencySymbol = '( '.$value2.' )';
             }
            }
           echo '<option value = "'.$currencyId.'"> '.$currencyName.'  '.$currencySymbol.' </option>' ;  
           $currencyId = "";
           $currencySymbol = "";
           $currencyName = "";     
          }
          echo '</select>';  
       ?>

        <br> <br>
        Ammount : <input disabled type= "text" size = 15 id="ammountTo" name="ammountTo"  >   
    </div>	
  </form> 


  <script>
        
   function processForm(e) {
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

  let form = document.getElementById('my-form');
  if (form.attachEvent) {
      form.attachEvent("submit", processForm);
  } else {
      form.addEventListener("submit", processForm);
  }
 </script>
 </BODY>
</HTML>
