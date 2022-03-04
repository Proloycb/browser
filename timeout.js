function amiTumar (){
    console.log('ami akn jabo');
}
console.log('First: ami sobar age jabo');
console.log('Second: ami second jamu');
// amiTumar();
setTimeout(amiTumar, 3000);
setTimeout(() => {
    console.log('ami aro age jabo');
}, 2000);
console.log('Third: ami third jamo');
console.log('Fourth: ami ek hali purno');