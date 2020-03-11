function drawCoils(numCoils, chord) {
  const coils = []
  var width = window.innerWidth;
  var height = window.innerHeight;
  var halfX = width/2;
  var halfY = height/2;
  var currentIndex = 1;

  /* Controls */
  var charRay = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var radius = halfX;

  // value of theta corresponding to end of last coil
  var thetaMax = numCoils * 2 * Math.PI;

  // How far to step away from center for each side.
  var awayStep = radius / thetaMax;

  // For every side, step around and away from center.
  for ( var j = chord / awayStep; j <= thetaMax; ) {

    // How far away from center
    var away = awayStep * j;

    // How far around the center.
    var around = j;

    // Convert 'around' and 'away' to X and Y.
    x = Math.cos ( around ) * away;
    y = Math.sin ( around ) * away;

    // to a first approximation, the points are on a circle
    // so the angle between them is chord/radius
    j += chord / away;
    console.log(awayStep);

    var container = document.createElement('p');
    container.style.position = 'absolute';
    container.style.color = '#000831';
    container.style.fontFamily = 'JAP';
    container.style.left = x + halfX + 'px';
    container.style.top = y + halfY + 'px';
    container.style.fontSize = Math.floor(away/30) > 10 ? Math.floor(away/30) + "px" : "9px"
    container.innerHTML = charRay[Math.floor(Math.random() * charRay.length)];

    container.id = "character-" + currentIndex;
    currentIndex++;

    coils.push(container.id);

    document.getElementById('spiral').appendChild(container);
  }
  return coils
}
