import React from 'react'

const Title = props => { 
    const {title, dis} = props
    return (
        <div>
            <h1>{title}</h1>
            <h3>{dis}</h3>
        </div>
    )
}

export default Title