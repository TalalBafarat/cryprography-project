function encryptRabbit() {
  var key = document.getElementById("password").value;
  var message = document.getElementById("text").value;
  var encrypted = CryptoJS.Rabbit.encrypt(message, key);
  document.getElementById("t").innerHTML = encrypted.toString();
  console.log(encrypted.toString());
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
