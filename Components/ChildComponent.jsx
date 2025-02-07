// Destructuring Props
//Instead of accessing props.propertyName,
//you can destructure props for cleaner code.
//This is how you can destructure props in a functional component:

function ChildComponent({ greeting, name }) {
    return (
      <div>
        <h1> greet: {greeting}</h1>
        <p>name: {name}</p>
      </div>
    );
  }
  export default ChildComponent;