//var message2 = 'amit';  
//var key2= 'abc123XYZ';
//var en = CryptoJS.AES.encrypt(message2, key2); 
//console.log(en.toString());
//U2FsdGVkX1+VzEhW121O4uic0L0BfJiQlRdqE+tr67Q=
//var de = CryptoJS.AES.decrypt(en, key2);
//console.log(de.toString(CryptoJS.enc.Utf8));
//console.log("hi");
function encryptAES() {
   //var salty = CryptoJS.lib.WordArray.random(128/8);
    //console.log(salty);
    //var options = { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Iso97971};  
    var d1 = new Date();
        var n1 = d1.getTime();
    var message = document.getElementById("text").value;
    var key = document.getElementById("password").value;
    if(message.length>0 && key.length>0){
    
      var encrypted = CryptoJS.AES.encrypt(message, key );
      //var ciphertext = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
      document.getElementById("t").innerHTML = encrypted;
      console.log(encrypted.toString());
      var d2 = new Date();
        var n2 = d2.getTime();
        var total = n2-n1;
        document.getElementById("time").innerHTML=total+" miliseconds for 256 bits key ";
    }else{
      document.getElementById("t").innerHTML="there is no message or there is no PassPhrase ";
    }
  
    
  }
  function decryptAES() {
    var key = document.getElementById("password").value.toString()
    var encrypted = document.getElementById("text").value.toString();
    var decrypted = CryptoJS.AES.decrypt(encrypted, key);
    document.getElementById("t").innerHTML = decrypted.toString(
      CryptoJS.enc.Utf8
    );
    console.log(decrypted.toString());
  }
  