var message = 'koko';  
var key= 'abc123XzZ';
var encrypted = CryptoJS.AES.encrypt(message, key); 
console.log(encrypted.toString());
//U2FsdGVkX1+VzEhW121O4uic0L0BfJiQlRdqE+tr67Q=
var decrypted = CryptoJS.AES.decrypt(encrypted, key);
console.log(decrypted.toString(CryptoJS.enc.Utf8));
console.log("hi");