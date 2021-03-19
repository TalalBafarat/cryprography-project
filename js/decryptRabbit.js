function decrypt() {
  var key = document.getElementById("key").value.toString();
  var encrypted = document.getElementById("textC").value;
  var decrypted = CryptoJS.Rabbit.decrypt(encrypted, key);
  document.getElementById("decT").innerHTML = decrypted.toString(
    CryptoJS.enc.Utf8
  );
}
