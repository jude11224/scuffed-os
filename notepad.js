if (document.cookie != "site=notepad") {
  document.cookie = "site=inactive"
  window.location.replace('index.html')
}

save = function() {
  var text = document.getElementById("text").value;
  text = text.replace(/\n/g, "\r\n");
  var blob = new Blob([text], { type: "text/plain"});
  var anchor = document.createElement("a");
  anchor.download = "note.txt";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target ="_blank";
  anchor.style.display = "none"; 
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}