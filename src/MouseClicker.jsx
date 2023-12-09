export function MouseClicker(){
    function handleButtonClick(event){
        console.log(event.currentTarget.src)
    }

    return (
        <div>
            <button name = "Elio" onClick={handleButtonClick}>
                <img src = "https://www.fisiostore.it/images/pesi-manubri-web_3987.jpg" width={24} height={24} onClick={handleButtonClick}/>
                Cliccami</button>
        </div>
    )
}