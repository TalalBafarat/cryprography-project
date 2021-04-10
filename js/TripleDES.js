//var text = "hello123"
//var key = "1234567891011"
//var options = {mode: CryptoJS.mode.ECB};
//key = CryptoJS.enc.Utf16LE.parse(key);
//key = CryptoJS.MD5(key)
//key.words.push(key.words[0], key.words[1])
//var textWordArray = CryptoJS.enc.Utf16LE.parse(text);
//var TripleDESEncrypt = CryptoJS.TripleDES.encrypt(textWordArray, key, options);
//var base64String = TripleDESEncrypt.toString()
//console.log('Encrypted message: ' + base64String);
//var TripleDESdecrypt = CryptoJS.TripleDES.decrypt( {
//ciphertext: CryptoJS.enc.Base64.parse(TripleDESEncrypt.toString())}, key, options);
//console.log('Decrypted message: ' + TripleDESdecrypt.toString(CryptoJS.enc.Utf16LE));

function TripleDESEncrypt() {
    var key = document.getElementById("key").value;
    var message = document.getElementById("text").value;
    var options = {mode: CryptoJS.mode.ECB};
    var d1 = new Date();
    var n1 = d1.getTime();
    if(message.length>0 && key.length>0){key = CryptoJS.enc.Utf16LE.parse(key);
      key = CryptoJS.MD5(key)
      key.words.push(key.words[0], key.words[1])
      var textWordArray = CryptoJS.enc.Utf16LE.parse(message);
      var TripleDESEncrypt = CryptoJS.TripleDES.encrypt(textWordArray, key, options);
      var d2 = new Date();
      var n2 = d2.getTime();
      var total = n2-n1
      var base64String = TripleDESEncrypt.toString()
      document.getElementById("t").innerHTML = base64String
      console.log(base64String);
      document.getElementById("time").innerHTML=total+" miliseconds for 192 bits key ";
    }else{
      document.getElementById("t").innerHTML="there is no message or there is no PassPhrase ";
    }
    
  }
  function TripleDESdecrypt() {
   
    var key = document.getElementById("key").value.toString();
    var message = document.getElementById("text").value;
    key = CryptoJS.enc.Utf16LE.parse(key);
    key = CryptoJS.MD5(key)
    key.words.push(key.words[0], key.words[1])
    var options = {mode: CryptoJS.mode.ECB,};
    var TripleDESdecrypt = CryptoJS.TripleDES.decrypt( {
ciphertext: CryptoJS.enc.Base64.parse(message)}, key, options);
    document.getElementById("t").innerHTML = TripleDESdecrypt.toString(CryptoJS.enc.Utf16LE);
    console.log(TripleDESdecrypt.toString(CryptoJS.enc.Utf16LE));
  }