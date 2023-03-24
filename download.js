// function downloadSVG() {
//     var svg = document.getElementById("qr").innerHTML; // Get the SVG data from the "qr" div
//     svg = svg.replace(/xmlns="[^"]+"/g, ''); // Remove the namespace declaration
//     var blob = new Blob([svg], { type: "image/gif+xml" }); // Create a Blob from the SVG data
//     var url = URL.createObjectURL(blob); // Create a download URL for the Blob

//     // Create a link to the download URL and click it to trigger the download
//     var link = document.createElement("a");
//     link.setAttribute("href", url);
//     link.setAttribute("download", "qrcode.gif");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }