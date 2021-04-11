function encryptRabbit() {
  var d1 = new Date();
  var n1 = d1.getTime();
  var message = document.getElementById("text").value;
  var PassPhrase = document.getElementById("password").value;
  if (message.length > 0 && PassPhrase.length > 0) {
    var encrypted = CryptoJS.Rabbit.encrypt(message, PassPhrase);
    document.getElementById("t").innerHTML = encrypted.toString();
    console.log(encrypted.toString());
    var d2 = new Date();
    var n2 = d2.getTime();
    var total = n2 - n1;
    document.getElementById("time").innerHTML = total + " milliseconds";
  } else {
    document.getElementById("t").innerHTML =
      "there is no message or there is no PassPhrase ";
  }
}

function decryptRabbit() {
  var key = document.getElementById("password").value.toString();
  var encrypted = document.getElementById("text").value;
  var decrypted = CryptoJS.Rabbit.decrypt(encrypted, key);
  document.getElementById("t").innerHTML = decrypted.toString(
    CryptoJS.enc.Utf8
  );
  console.log(decrypted.toString());
}
