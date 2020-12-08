function keyfunction(key){

    var key = key || window.event;
    var top = parseInt(document.getElementById("char").style.top);
    var left = parseInt(document.getElementById("char").style.left);
    var speed = 20;

    if (key.keyCode == '119') {
        top = top - speed;
    }
    else if (key.keyCode == '97') {
        left = left - speed;
    }
    else if (key.keyCode == '115') {
        top = top + speed;
    }
    else if (key.keyCode == '100') {
        left = left + speed;
    } 

    top = top.toString();
    left = left.toString();
    top = top + 'px';
    left = left + 'px';

    document.getElementById("char").style.top = top;
    document.getElementById("char").style.left = left;
  }
  
  document.addEventListener("keypress", keyfunction, false);