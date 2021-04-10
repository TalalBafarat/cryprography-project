// The passphrase used to repeatably generate this RSA key.
// The length of the RSA key, in bits.
function encryptRSA(){
    var PassPhrase = document.getElementById("PassPhrase").value;
    var Bits = 1024;
    var message = document.getElementById("mess").value;
    console.log("this is my message "+message.length)
    if(message.length>0 && PassPhrase.length>0){
        var d1 = new Date();
        var n1 = d1.getTime();
        var ReciverRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
        console.log(ReciverRSAkey)
        var ReciverPublicKeyString = cryptico.publicKeyString(ReciverRSAkey);   
        var EncryptionResult = cryptico.encrypt(message, ReciverPublicKeyString);
        var CipherText = EncryptionResult.cipher
        document.getElementById("encrypted").innerHTML=CipherText;
        var d2 = new Date();
        var n2 = d2.getTime();
        var total = n2-n1 
        console.log(total+" milisecond for 1024 key ")
        document.getElementById("time").innerHTML=total+" miliseconds for 1024 bits key ";
    }else{
        document.getElementById("encrypted").innerHTML="there is no message or there is no PassPhrase ";
    }
    

}


