Soundsnap
=========

A basic experiement with Tessel and OpenCV. Takes a photo with camera when ambient sound reaches a certain threshold. 


Notes
-----

_Just logging some stuff here. You can ignore for now._

brew install cmake

$ brew install opencv
Error: No available formula for opencv 

$ brew search opencv
homebrew/science/opencv

$ brew tap homebrew/science

$ brew install opencv
==> Downloading https://github.com/Itseez/opencv/archive/2.4.9.tar.gz

~/Dev/Tessel/learning/soundsnap (master) $ mkdir -p ~/Library/Python/2.7/lib/python/site-packages
~/Dev/Tessel/learning/soundsnap (master) $ echo '/usr/local/lib/python2.7/site-packages' > ~/Library/Python/2.7/lib/python/site-packages/homebrew.pth

python
>>> import cv

https://github.com/peterbraden/node-opencv/issues/133
https://github.com/peterbraden/node-opencv/issues/87