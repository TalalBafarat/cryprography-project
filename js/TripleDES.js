
var text = "hello123"
var key = "1234567891011"
var options = {mode: CryptoJS.mode.ECB};
key = CryptoJS.enc.Utf16LE.parse(key);
key = CryptoJS.MD5(key)
key.words.push(key.words[0], key.words[1])
var textWordArray = CryptoJS.enc.Utf16LE.parse(text);
var encrypted = CryptoJS.TripleDES.encrypt(textWordArray, key, options);
var base64String = encrypted.toString()
console.log('Encrypted message: ' + base64String);
var decrypted = CryptoJS.TripleDES.decrypt( {
ciphertext: CryptoJS.enc.Base64.parse(encrypted.toString())}, key, options);
console.log('Decrypted message: ' + decrypted.toString(CryptoJS.enc.Utf16LE));