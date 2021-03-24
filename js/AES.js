//var message = 'koko';  
//var key= 'abc123XzZ';
//var encrypted = CryptoJS.AES.encrypt(message, key); 
//console.log(encrypted.toString());
//U2FsdGVkX1+VzEhW121O4uic0L0BfJiQlRdqE+tr67Q=
//var decrypted = CryptoJS.AES.decrypt(encrypted, key);
//console.log(decrypted.toString(CryptoJS.enc.Utf8));
//console.log("hi");
function encryptAES() {
    var key = document.getElementById("password").value;
    var message = document.getElementById("text").value;
    var encrypted = CryptoJS.AES.encrypt(message, key);
    document.getElementById("t").innerHTML = encrypted.toString();
    console.log(encrypted.toString());
  }
  function decryptAES() {
    var key = document.getElementById("password").value.toString();
    var encrypted = document.getElementById("text").value;
    var decrypted = CryptoJS.AES.decrypt(encrypted, key);
    document.getElementById("t").innerHTML = decrypted.toString(
      CryptoJS.enc.Utf8
    );
    console.log(decrypted.toString());
  }
  