export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  // pre
  if(a === null && b === null) return true;
  if(a === null || b === null) return false;
  if(a.value !== b.value) return false;

  // recurse
  return compare(a.left, b.left) && compare(a.right, b.right)
}