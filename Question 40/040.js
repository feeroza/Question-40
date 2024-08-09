// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
/*
function myAlbum(artistName: string, albumTitle: string){
    return {artistName, albumTitle}
}
let album1 = myAlbum("Ali","Rang e muhabbat");
let album2 = myAlbum("madad","Roshan Andhera");
let album3 = myAlbum("","Mausam e Dil");
console.log(album1);
console.log(album2);
console.log(album3);
*/
function myAlbum2(artistName, albumTitle, numberOfTraks) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum2("Ali", "Rang e muhabbat", 30);
var album2 = myAlbum2("madad", "Roshan Andhera", 55);
var album3 = myAlbum2("", "Mausam e Dil");
console.log(album1);
console.log(album2);
console.log(album3);
