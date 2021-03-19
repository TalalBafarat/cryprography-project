// The passphrase used to repeatably generate this RSA key.
var PassPhrase = "The Moon is a Harsh Mistress."; 

// The length of the RSA key, in bits.
var Bits = 1024; 

var ReciverRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
console.log(ReciverRSAkey.k)
var ReciverPublicKeyString = cryptico.publicKeyString(ReciverRSAkey);       
console.log("Public "+ReciverPublicKeyString)

var PlainText = "Matt, I need you to help me with my Starcraft strategy.";

var EncryptionResult = cryptico.encrypt(PlainText, ReciverPublicKeyString);


var CipherText = EncryptionResult.cipher
console.log(CipherText)
var DecryptionResult = cryptico.decrypt(CipherText, ReciverRSAkey);
console.log(DecryptionResult.plaintext)