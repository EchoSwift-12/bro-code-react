import pic from './assets/pic.png';

const Card = () =>{
    return (
        <div className="card">
            <img className='card-picture' src={pic}  alt="picture of girl" />
            <h2>Card Title</h2>
            <p>Card Description</p>
        </div>
    )
}
export default Card;
