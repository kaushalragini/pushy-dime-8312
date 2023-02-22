import React from 'react'
import { Route } from 'react-router-dom'


const Routes = () => {
    return (
        <Routes>
            <Route path='/' element={"home"} />
            <Route path='/men-fashion' element={"menfashion"} />
            <Route path='/women-fashion' element={"womenfashion"} />
            <Route path='/shop-beauty' element={"shopbeauty"} />
            <Route  path='/kid-fashion'/>
            <Route path="/" />
        </Routes>


    )
}

export default Routes
