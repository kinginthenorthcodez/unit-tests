const stringLength = (string) => {
 if(string.length < 1 || string.length > 10){
   throw new Error ('Expect string to atleast greater than 1 and less thanEqual 10');
 }
  return string.length;
}; 

module.exports = stringLength;