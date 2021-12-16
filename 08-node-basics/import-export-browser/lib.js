function greet(name) {
  if (typeof name === "string") {
    return `Hello, ${name}!`;
  } else {
    return "Hello, Guest!";
  }
}
