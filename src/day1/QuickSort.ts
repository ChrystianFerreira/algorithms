function qs(arr: number[], lo: number, hi: number): void { 
  if(lo >= hi) { 
    return;
  }

  const pivotIdx = partition(arr, lo, hi);
  qs(arr, lo, pivotIdx - 1)
  qs(arr, pivotIdx + 1, hi)
}


function partition(arr: number[], lo: number, hi: number): number { 
  // arr = [2, 4, 1, 5, 3] -> [2, 1, 3, 5, 4]
  //  lo = 0
  //  hi = 4
  const pivot = arr[hi]; // arr[hi = 4] = 3
  let idx = lo - 1; // 0 - 1 -> -1
  for(let i = lo; i < hi; ++i) { 
    // i = lo = 0 -> 1 -> 2 -> 3 -> 4
    if(arr[i] <= pivot) { // arr[i = 2] = 3 <= 3 true 
      idx++; // idx -> 1 -> 2
      const tmp = arr[i] // arr[i = 4] -> 3
      if(arr[i] === arr[idx]) continue;
      arr[i] = arr[idx]; // arr[i = 4] = arr[idx = 2]->4
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx]
  arr[idx] = pivot;
  console.log(arr)

  return idx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}