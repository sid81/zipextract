var zip = new JSZip();


zip.file("Hello.txt", "This is an experimental text file\n");

// Generate a directory within the Zip file structure
var img = zip.folder("images");

// Add a file to the directory, in this case an image with data URI as contents
//img.file("smile.gif", imgData, {base64: true});

// Generate the zip file asynchronously
zip.generateAsync({type:"blob"})
.then(function(content) {
    // Force down of the Zip file
    saveAs(content, "archive.zip");
});