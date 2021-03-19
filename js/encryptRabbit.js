function encrypt() {
  var key = document.getElementById("key").value;
  var message = document.getElementById("textP").value;
  var encrypted = CryptoJS.Rabbit.encrypt(message, key);
  document.getElementById("encT").innerHTML = encrypted.toString();
  console.log(encrypted.toString());
}
