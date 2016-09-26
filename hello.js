function hello(name) {
  alert("Hello " + name);
};
function unused(f) {
  console.log(f);
};
function unusedB(f) {
  console.log(f);
};
var functions = {
  unused: unused,
  unusedB: unusedB,
  hello: hello,
};
functions.hello('World');
