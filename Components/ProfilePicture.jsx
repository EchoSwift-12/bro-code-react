const ProfilePicture = () =>{
    const imageUrl = './src/assets/pic.png';

    const handleClick = (e) => {
        e.target.style.display = "none";
        console.log(e);

    }


    return (
        <img  onClick ={(e) => handleClick(e)}src={imageUrl} ></img>
    )
}



export default ProfilePicture