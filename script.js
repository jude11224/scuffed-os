document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const accesskey = document.getElementById('accesskey').value;

    // Basic validation
    if (accesskey === 'scuffed os') {
      window.location.replace("home.html");
        // You can redirect the user to another page here.
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

//makes the appicons lead to diffrent html files
function minecraft() {
  document.cookie = "site=eagler";
  window.location.replace("eagler.html");
}
function spelunky() {
  document.cookie = "site=spelunky";
  window.location.replace("spelunky.html");
}
function mario() {
  document.cookie = "site=mario";
  window.location.replace("mario.html");
}
function help() {
  document.cookie = "site=help";
  window.location.replace("help.html");
}
function esearch() {
  document.cookie = "site=esearch";
  window.location.replace("esearch.html");
}
function games() {
  document.cookie = "site=play";
  window.location.replace("play.html");
}
function Close() {
  console.log('closed');
  document.getElementById('changesettings').innerHTML = '';
}

function note() {
  document.cookie = "site=notepad";
  window.location.replace('notepad.html');
}

function music() {
  document.cookie = "site=music";
  window.location.replace('music.html');
}

function settings() {
  document.getElementById('changesettings').innerHTML = "<input id = 'changer' type = 'text' placeholder = 'Type a color or image url' /><button onclick = 'Close()'>Close</button> <a href = 'help.html'><button>How do I use this?</button></a>";
  onkeyup = function() {
    var changecolor = document.getElementById('changer').value;
    document.getElementById('settings').innerHTML = '<style>body{background: ' + changecolor + '; background-size: cover;}</style>';
  }
}

