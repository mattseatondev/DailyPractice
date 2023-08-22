String.prototype.camelCase=function(){
    return this.split(' ').map(sub => sub.length == 0 ? '' : sub[0].toUpperCase() + sub.substring(1, sub.length)).join('');
  }

  console.log('test case'.camelCase());