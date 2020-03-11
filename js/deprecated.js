for(z = 0; z < 40 ; z++) {
  var loopTo = Math.floor(Math.random() * 8000);
  var permanent = loopTo;
  var upTo = loopTo + 1000;
  var fn = function() {
    if (loopTo >= upTo) {
      loopTo = permanent;
    }

    toggleAnimation(coils[loopTo]);
    loopTo++;
  }
  makeInterval(fn);
}

function makeInterval(fn) {
  setInterval(fn,180);
}

/*INTERVAL CONTROL FUNCTIONS*/
var cRI = 0;
var run0 = function() {
  if (cRI >= 500) {
    cRI = 0;
  }

  toggleAnimation(coils[cRI]);
  cRI++;
}

function toggleAnimation(indexNum) {
  elemID = '#' + indexNum;
  $(elemID).toggleClass("rainDrops");
}
