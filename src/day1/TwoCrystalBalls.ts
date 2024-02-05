export default function two_crystal_balls(breaks: boolean[]): number {
  // 7
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  // 7
  let i = jmpAmount
  for(; i < breaks.length; i += jmpAmount) { 
    // lets say it breaks at 24
    // 7 > 14 > 21 > 28 (BREAKS!)
    if(breaks[i]) {
      break;
    }
  }
  
  // 28 - 7 = 21
  i -= jmpAmount; 
  
  // j = 0, only runs if j is smaller than 7 && i isn't bigger than the array
  for(let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
    // walk both i and j forward. j is helping us stay within this block and i is the actual position
    if(breaks[i]) { 
      return i
    }
  }

  return -1
}