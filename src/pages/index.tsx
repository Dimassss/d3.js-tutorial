import React from 'react'
import { Link } from 'react-router-dom'

import 'normalize.css'
import '../index'

export default function HomePage(){
    return (<div>
        <Link to={'/smile'}>Smile page</Link><br/>
        <Link to={'/react-mouse-circle-follower'}>react-mouse-circle-follower</Link><br/>
        <Link to={'/css-colour-names'}>'css-colour-names'</Link><br/>
    </div>)
}