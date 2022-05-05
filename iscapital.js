const capitalize = (string) => {
  if(string.match(/^[A-Z]/)){
    return true;
  }
  else {
    return false;
  }
}

 const res = capitalize('Hello');
 console.log(res);

module.exports = capitalize;