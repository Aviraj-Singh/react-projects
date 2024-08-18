// Different ways to create Elements in React

// A way to create react element
const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I am h1"),
        React.createElement("h2", {}, "I am h2")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I am h1"),
        React.createElement("h2", {}, "I am h2")
    ]),
]);

// -------------------------------------------------------------------

// React Element

const jsxHeading = (
<div>
<h1 id="heading">Hello</h1>
<p>Aviraj Here</p>
</div>)

// Functional Component

const HeadingElement = () => {
    return <h1>Hello From India!</h1>
}

const Container = () => (
    <div id="container">
        <HeadingElement/>
        <p className="heading">Welcome to Namma Bangalore</p>
    </div>
)

// root.render(jsxHeading); for createReact or React Element
root.render(<Container />); // for functional components