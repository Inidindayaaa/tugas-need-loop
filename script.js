//var ulang = confirm("apakah anda mau mengulang ini?");
// var counter = 0;

// while(ulang){
//     var jawab = confirm("apakah anda mau mengulang ini?");
//     counter++;
//     if(jawab == false){
//         ulang = false ;
//     }
// }

// document.write("perulangan sudah dilakukan sebnyak " + counter + " kali");



var ulang = confirm("apakah anda mau mengulang ini laagi kah?");
 var counter = 0;
 
while(ulang){
    counter++;
    var bintang = "*".repeat(counter) + "<br>";
    document.write(counter + ":" + bintang);
    ulang= confirm("apakah anda mau mengulang ini lagi kah?");
}