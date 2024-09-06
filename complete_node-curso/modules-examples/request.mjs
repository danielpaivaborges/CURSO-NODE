"use strict";
function encrypt(data){
    return 'encrypted data';
}

export default function send(url, data){
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`)
}

