const h1 = React.createElement("h1", {}, "Learn Web Development");
const p = React.createElement(
  "p",
  {},
  "Welcome to the MDN learning area. This set of articles aims to guide complete begineers to web development with all that they need to start coding websites."
);
const div1 = React.createElement("div", {}, p);
const a = React.createElement("a", { href: "#" }, "the rest of MDN,");
const p2 = React.createElement("p", {}, [
  'The aim of this area of MDN is not to take you from "begineer" to "expert" but to take you from "begineer" to "comfortable". From there, you should be able to start making way, learning from ',
  a,
  " and other intermediate to advanced resources that assume a lot of previous knowledge.",
]);
const div2 = React.createElement("div", {}, p2);
const p3 = React.createElement(
  "p",
  {},
  "If you are a complete begineer, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."
);
const div3 = React.createElement("div", {}, p3);
const div = React.createElement("div", {}, [h1, div1, div2, div3]);
ReactDOM.render(div, document.getElementById("root"));
