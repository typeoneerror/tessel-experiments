#!/usr/bin/env node

var tessel  = require('tessel')
  , ambient_lib = require('ambient-attx4')
  , ambient = ambient_lib.use(tessel.port['A'])
  , snapper = require('snapper');

var sound_threshold     = 0.02
  , reading_speed       = 250
  , sound_trigger_delay = 1000;

ambient.on('ready', function() {
  setInterval(function() {
    ambient.getSoundLevel(function(err, sdata) {
      console.log('Sound level:', sdata.toFixed(8));
    });
  }, reading_speed);

  ambient.setSoundTrigger(sound_threshold);

  ambient.on('sound-trigger', function(data) {
    console.log('Sound triggered', data);

    ambient.clearSoundTrigger();

    setTimeout(function() {
      ambient.setSoundTrigger(sound_threshold);
    }, sound_trigger_delay);

  });
});
