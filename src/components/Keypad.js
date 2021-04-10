// Code Keypad Component Here
function Keypad() {
    function changeInput() {
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={changeInput}/>
    )
}

export default Keypad