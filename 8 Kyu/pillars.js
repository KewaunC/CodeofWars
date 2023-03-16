/*
Paramteres
numPill = How man y pillars I have
dist = distance between Pillars
width = How wid the pillars

Return
Calculate the distance between the first and the last pillar in centimeters 
(without the width of the first and last pillar)

Exmples
numPils = 1 
Distancece is 10meters
Width of the Pillar is 10 Meters 

Distance between the pillars is 0

Pseduo Code
I cant write a function w/out using the 1st or last pillar 
I know that there are 100 centimeters in a meter

*/



function pillars(numPill, dist, width) {
    return numPill > 1 ? (numPill - 2) * width + (numPill - 1 ) * dist * 100 : 0
  }