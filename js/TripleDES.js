var text = "hello123"
var key = "1234567891011"
var options = {mode: CryptoJS.mode.ECB};
key = CryptoJS.enc.Utf16LE.parse(key);
key = CryptoJS.MD5(key)
key.words.push(key.words[0], key.words[1])
var textWordArray = CryptoJS.enc.Utf16LE.parse(text);
var TripleDESEncrypt = CryptoJS.TripleDES.encrypt(textWordArray, key, options);
var base64String = TripleDESEncrypt.toString()
console.log('Encrypted message: ' + base64String);
var TripleDESdecrypt = CryptoJS.TripleDES.decrypt( {
ciphertext: CryptoJS.enc.Base64.parse(TripleDESEncrypt.toString())}, key, options);
console.log('Decrypted message: ' + TripleDESdecrypt.toString(CryptoJS.enc.Utf16LE));