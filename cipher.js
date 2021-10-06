function enCode() {
    let userString = document.getElementById("userMessage").value;
    let outputMessage = "";
    let encode = document.getElementById("encode");
    let decode = document.getElementById("decode");
    let userKey = Number(document.getElementById("userKey").value);

    for (var i = 0; i < userString.length; i++) {
        var ascii = userString[i].charCodeAt();
        //adds a space
        if (ascii === 32) {
            outputMessage += String.fromCharCode(ascii);
            //lowercase
        } else if ((encode.checked) & ascii >= 97 && ascii <= 122) {
            outputMessage += String.fromCharCode(((ascii - 97 + userKey) % 26) + 97);
        } else if ((decode.checked) & ascii >= 97 && ascii <= 122) {
            outputMessage += String.fromCharCode(((ascii - 97 + ((26-userKey)%26)) % 26) + 97);
            //uppercase
        } else if ((encode.checked) && ascii >= 65 && ascii <= 90) {
            outputMessage += String.fromCharCode(((ascii - 65 + userKey) % 26) + 65);
        } else if ((decode.checked) && ascii >= 65 && ascii <= 90) {
            outputMessage += String.fromCharCode(((ascii - 65 + ((26-userKey)%26)) % 26) + 65);
        } else {
            //ignore any other char
            outputMessage += String.fromCharCode(ascii)
        }
    }
    document.getElementById("output").value = outputMessage;
}

