const Button = () => {

    let count = 0;
    const handleClick = (name) => {

        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }
        else {
            console.log(`${name} stop clicking me`);
        }
    }
    // const handleClick2 = (name) => {
    //     console.log(`${name} stop clicking me`);
    // }

    return (
        <button onClick={() => handleClick("sadiya")}>Click me 🙂</button>
    );
}
export default Button