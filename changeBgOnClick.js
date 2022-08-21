function changeBgColor() {


    var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
      console.log(color);
      document.body.style.background = color;
}


// OR

function changeBgColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var color = "rgb(" + r + "," + g + "," + b + ")";
      console.log(color);
      document.body.style.background = color;
    }
