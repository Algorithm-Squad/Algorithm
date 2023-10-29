const simplifyPath = (path) => {
  let stack = [];
  path.split("/");
  for (let p of path) {
    if (p == "." || p == "") continue;
    else if (p == "..") stack.pop();
    else stack.push(p);
  }
  return "/" + stack.join("/");
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
