export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[] = [head];
  while(q.length) { 
    const curr = q.shift() as BinaryNode<number> | undefined | null;
    if(!curr) {
      continue;
    }
    if(curr.value === needle) return true;
    q.push(curr.left as BinaryNode<number>);
    q.push(curr.right as BinaryNode<number>);
  }
  return false;
}