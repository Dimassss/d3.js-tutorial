import React from 'react'
import { Link } from 'react-router-dom'

import '../index'

export default function HomePage(){
    return (<div>
        <Link to={'/smile'}>Smile page</Link>
    </div>)
}