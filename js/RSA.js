// The passphrase used to repeatably generate this RSA key.
// The length of the RSA key, in bits.
function encryptRSA(){
    console.log("sss")
    var PassPhrase = document.getElementById("PassPhrase").value;
    console.log(PassPhrase);
    var Bits = 1024;
    console.log(Bits);
    var message = document.getElementById("mess").value;
    var ReciverRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
    var ReciverPublicKeyString = cryptico.publicKeyString(ReciverRSAkey);       
    var EncryptionResult = cryptico.encrypt(message, ReciverPublicKeyString);
    var CipherText = EncryptionResult.cipher
    document.getElementById("encrypted").innerHTML=CipherText;
    console.log(ReciverRSAkey.doPrivate)


}



var DecryptionResult = cryptico.decrypt(CipherText, ReciverRSAkey);
