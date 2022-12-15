import React from 'react';


function Header ({ onDarkModeClick, isDarkMode }){


  console.log(onDarkModeClick)

    return (
        <div >
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                    {isDarkMode ? "Dark" : "Light"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header 


