import React from 'react'

// function Greet(){
//     return <h1>Hello Arbind</h1>
// }

//Using arrow function
// const Greet = () => <h1>Hello Arbind</h1>

const Greet = props => {
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
        
    )
}

export default Greet;