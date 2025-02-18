type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

goodRes.push(123);
//ven though goodRes is defined as a tuple,
// push() is allowed because TypeScript treats tuples as arrays under the hood,
// and arrays can be dynamically resized.

goodRes.pop();
goodRes.pop();
goodRes.pop();

// TypeScript does not throw an error during runtime
// because type checks only happen at compile time.
