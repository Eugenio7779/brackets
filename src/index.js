module.exports = function check(str, bracketsConfig) {
  
  array = [];
 
  for ( a = 0; a < bracketsConfig.length; a++) {
  
  array.push(bracketsConfig[a][0] + bracketsConfig[a][1]);
 };

 for ( b = 0; b < array.length + 1; b++) {

     for ( c = 0; c < array.length; c++) {
        
        for ( x = 0; x < str.length; x++) {
             
            if (str.indexOf(array[c]) != -1) {
                 
                index = str.indexOf(array[c]);
                 
                str = str.substring(0 , index) + str.substring(2 + index);
                
                x--;
             };
         };
     };
 };

 return str.length == 0 ? true : false;
}