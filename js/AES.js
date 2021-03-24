//var message2 = 'amit';  
//var key2= 'abc123XYZ';
//var en = CryptoJS.AES.encrypt(message2, key2); 
//console.log(en.toString());
//U2FsdGVkX1+VzEhW121O4uic0L0BfJiQlRdqE+tr67Q=
//var de = CryptoJS.AES.decrypt(en, key2);
//console.log(de.toString(CryptoJS.enc.Utf8));
//console.log("hi");
function encryptAES() {
    var key = document.getElementById("password").value;
    var message = document.getElementById("text").value;
    var encrypted = CryptoJS.AES.encrypt(message, key);
    //var ciphertext = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    document.getElementById("t").innerHTML = encrypted.toString();
    console.log(encrypted.toString());
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
  