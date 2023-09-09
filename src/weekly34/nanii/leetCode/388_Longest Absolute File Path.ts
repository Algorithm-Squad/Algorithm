/**
 * 388. Longest Absolute File Path / Medium
 * https://leetcode.com/problems/longest-absolute-file-path/
 * @param input
 */
function lengthLongestPath(input: string): number {
  let max = 0;
  let stack: number[] = [];

  input.split('\n').forEach((line) => {
    const depth = line.lastIndexOf('\t') + 1;
    const isFile = line.includes('.');

    stack[depth] = (stack[depth - 1] || 0) + line.length - depth;
    if(isFile) max = Math.max(stack[depth] + depth, max);
  });
  return max;
}

// [n차시도]
// function lengthLongestPath(input: string): number {
//   let max = 0;
//   let stack: number[] = [];

//   input.split('\n').forEach((line) => {
//     const length = stack.join('/').length;
//     const depth = line.lastIndexOf('\t') + 1;
//     // const path = line.substring(depth);
//     const isFile = line.includes('.');

//     if(isFile) {
//       let file = line.length - depth;
//       max = Math.max((stack[depth - 1] + 1 || 0) + file, max);
//       // return;
//     }
//     stack[depth] = line.length - depth + (length[depth - 1] + 1 || 0);
//   });
//   return max;

  //   if(depth === 0) {
  //     if(index === 0) {
  //       prefix = line;
  //       max = line.length;
  //     }
  //     else if(max < path.length) {
  //       max = path.length;
  //       return;
  //     }
  //   }

  //   if(depth === 1) {
  //     if(max <= length) max = length
  //     stack = [prefix, path];
  //     return;
  //   }

  //   stack.push(path);
  //   });

  // return max = Math.max(stack.join('/').length, max);
// }
// ;