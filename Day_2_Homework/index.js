const h1 = React.createElement("h1", {}, "Topics covered");
const p = React.createElement(
  "p",
  {},
  "The following is a list of all the topics we cover in the MDN learning area."
);
const div1 = React.createElement("div", {}, p);

const a = React.createElement(
  "a",
  { href: "#" },
  "Getting started with the web"
);
const p2 = React.createElement(
  "p",
  {},
  "Provides a practical introduction to web developent for complete begineers."
);
const div2 = React.createElement("div", {}, [a, p2]);

const a2 = React.createElement(
  "a",
  { href: "#" },
  "HTML - Structuring the web"
);
const p3 = React.createElement(
  "p",
  {},
  "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML is detail."
);
const div3 = React.createElement("div", {}, [a2, p3]);


const a3 = React.createElement(
    "a",
    { href: "#" },
    "CSS - Styling the web"
  );
  const p4 = React.createElement(
    "p",
    {},
    "CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animation. This topic provides comprehensive coverage of CSS."
  );
  const div4 = React.createElement("div", {}, [a3, p4]);


const div = React.createElement("div", {}, [h1, div1, div2, div3, div4]);
ReactDOM.render(div, document.getElementById("root"));
