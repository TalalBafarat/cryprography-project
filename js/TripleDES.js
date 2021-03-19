var encrypted = CryptoJS.TripleDES.encrypt("Hello123", "HowAreYou");
console.log(encrypted.toString());
var decrypted = CryptoJS.TripleDES.decrypt(encrypted, "HowAreYou");
console.log(decrypted.toString(CryptoJS.enc.Utf8));