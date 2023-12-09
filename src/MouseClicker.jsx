export function MouseClicker(){
    function handleButtonClick(event){
        console.log(event.currentTarget.name)
    }

    return (
        <div>
            <button name = "Elio" onClick={handleButtonClick}>Cliccami</button>
        </div>
    )
}