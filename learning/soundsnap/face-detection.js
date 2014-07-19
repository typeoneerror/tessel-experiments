#!/usr/bin/env node

// TODO: fix dyld: lazy symbol binding issue

var cv = require('opencv');

cv.readImage('./assets/test.jpg', function(err, im){
  if (!err) {
    im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
      for (var i=0;i<faces.length; i++) {
        var x = faces[i]
        im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
      }
      im.save('./out.jpg');
    });
  }
});
