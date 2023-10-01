import React from 'react'

function TabButton({active, children, selectTab}) {

    const buttonClasses = active ? "text-yellow-600 border-b-2 border-yellow-300" : "text-yellow-300";


    return (
        <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-yellow-600 ${buttonClasses}`}>
        {children}
        </p>
        </button>
    )
}

export default TabButton