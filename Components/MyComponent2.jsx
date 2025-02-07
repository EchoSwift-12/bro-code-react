// onchange event handler  in react
// useState hook in react
// input field in react
// value attribute in react
// event object in react
// event.target.value in react
// <input/>, <textarea/> in react,
// <select/>, <option/> in react


import { useState } from 'react';
const Mycomponent2 = () => {

    const [name, setName] = useState(" ");
    const [quantity, setQuantity] = useState(1);
    const [comments, setComments] = useState(" ");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleChange = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
        console.log(e.target.value);
    }

    const hanldeComments = (e) => {
        setComments(e.target.value);
        console.log(e.target.value);
    }

    const handlePayment = (e) => {
        setPayment(e.target.value)
    }

    const handleShipping = (e) => {
        setShipping(e.target.value)
    }

    return (<div>
        <input
            value={name}
            onChange={handleChange} />
        <p>Name: {name}</p>

        <input
            type="number"
            value={quantity}
            onChange={handleQuantity} />
        <p>Quantity: {quantity}</p>

        <textarea value={comments}
            placeholder="enter del instructions"
            onChange={hanldeComments} />
        <p>Comments:{comments} </p>

        <select
            value={payment}
            onChange={handlePayment}>

            <option value="" disabled>
                Select an option
            </option>

            <option value="Visa">Visa</option>
            <option value="MasterCard">Master Card</option>
            <option value="GiftCard">Gift Card</option>
        </select>
<br />
            <p>Selected Payment Method: {payment}</p>
<br />
        <label >
            <input type="radio" value="Pick up"
                checked={shipping === "Pick up"}
                onChange={handleShipping} />
            Pick up
        </label>
        <br />

        <label >
            <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShipping} />
            Delivery
        </label>
        <p>selected : {shipping}</p>
    </div>);
}
export default Mycomponent2;
