// The passphrase used to repeatably generate this RSA key.
// The length of the RSA key, in bits.
function encryptRSA(){
    var PassPhrase = document.getElementById("PassPhrase").value;
    var Bits = 1024;
    var message = document.getElementById("mess").value;
    console.log("this is my message "+message.length)
    if(message.length>0 && PassPhrase.length>0){
        var ReciverRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
        console.log(ReciverRSAkey)
        var ReciverPublicKeyString = cryptico.publicKeyString(ReciverRSAkey);   
        var EncryptionResult = cryptico.encrypt(message, ReciverPublicKeyString);
        var CipherText = EncryptionResult.cipher
        document.getElementById("encrypted").innerHTML=CipherText;
    

    }else{
        document.getElementById("encrypted").innerHTML="there is no message or there is no PassPhrase ";
    }
    

}



var DecryptionResult = cryptico.decrypt(CipherText, ReciverRSAkey);
