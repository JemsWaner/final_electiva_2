const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

test("La página debe contener Hola Mundo", () => {
  const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");
  const dom = new JSDOM(html);
  const heading = dom.window.document.querySelector("h1");
  expect(heading.textContent).toBe("Hola Mundo");
});
