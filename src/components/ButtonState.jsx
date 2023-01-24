const ButtonState = () => {
    let count = 0
    const handleClick = () =>{
        count = count +1;
        console.log('handleClick: ' + count)
    }
    return <button onClick={handleClick}>button State: {count}</button>
}
export default ButtonState;