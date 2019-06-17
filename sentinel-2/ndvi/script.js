let ndvi = (B08 - B04) / (B08 + B04);
// Some basic colors
var RED = [1, 0, 0];
var ORANGE = [1, 0.5,0];
var YELLOW = [0.9, 0.9, 0.1];
var GREEN = [0.1, 0.9, 0.1];
var BLUE = [0.4, 0, 0.9];
// Index
var NDVI = (B08-B04)/(B08+B04);
// Used Index (Pick from above list)
var USEDINDEXvalue = NDVI;
// Styles
var HIGH = BLUE;
var MEDIUM_1 = GREEN;
var MEDIUM_2 = YELLOW;
var MEDIUM_3 = ORANGE;
var LOW = RED;
// Thresholds
var L1 = 0.50; 
var L2 = 0.55;
var L3 = 0.60;
var L4 = 0.65;
// Classification of values into HIGH, MEDIUM, and LOW
return (USEDINDEXvalue > L1)
? (USEDINDEXvalue > L2 ) 
  ? (USEDINDEXvalue > L3 ) 
 ? (USEDINDEXvalue > L4 ) 
  ? HIGH : MEDIUM_1 
   : MEDIUM_2
    : MEDIUM_3
     : LOW;
