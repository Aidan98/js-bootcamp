function countBs(word){
 console.log(word.replace(/[^B]/g, "").length);

}
countBs("BleBleh");