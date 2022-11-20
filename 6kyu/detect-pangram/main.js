function isPangram(string){
    let arr = 'abcdefghijklmnopqrstuvwxyz',
        result = 0;
    for(let i=0; i<=arr.length; i++){
      if (string.toLowerCase().includes(arr[i])) result++
    }
    
   return result==arr.length ? true : false
    
  }