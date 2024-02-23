const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", { id: "title" }, "Hello world from React !!!"),
      React.createElement(
        "h2",
        { id: "subTitle" },
        "Hello world from React !!!"
      ),
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
