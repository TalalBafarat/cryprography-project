function encrypt() {
  var key = document.getElementById("key").value;
  var message = document.getElementById("textP").value;
  var encrypted = CryptoJS.Rabbit.encrypt(message, key);
  document.getElementById("encT").innerHTML = encrypted.toString();
  console.log(encrypted.toString());
}
function decrypt() {
  var key = document.getElementById("key").value.toString();
  var encrypted = document.getElementById("textC").value;
  var decrypted = CryptoJS.Rabbit.decrypt(encrypted, key);
  document.getElementById("decT").innerHTML = decrypted.toString(
    CryptoJS.enc.Utf8
  );
}