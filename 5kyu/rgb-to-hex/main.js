/*
DESCRIPTION:
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/


function rgb(r, g, b){
   let arr = [r,g,b]
   arr.map((x,i,a)=>{
    if(x<0) {
        a.splice(i,1,0)
    }else if(x>255) {
        a.splice(i,1,255)
    }})
    
    let a1=arr.map(n=> {
        n = n.toString(16).toUpperCase()
        return n.length==1 ? ('0'+n) : n
    })
    return a1.join('')
}



