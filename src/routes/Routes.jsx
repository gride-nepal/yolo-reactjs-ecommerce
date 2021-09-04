import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/restaurants' component={Catalog}/>
            <Route path='/kirana' component={Catalog}/>
            <Route path='/liquors' component={Catalog}/>
            <Route path='/pharmacy' component={Catalog}/>
            <Route path='/bookstore' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
        </Switch>
    )
}

export default Routes
