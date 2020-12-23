import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeScreen from '../Screens/HomeScreen'
import DetailScreen from '../Screens/DetailScreen'
import IngridientScreen from '../Screens/IngridientScreen'

export default function Main() {
    return (
        <Switch>
            <Route exact path = '/' component={HomeScreen}/>
            <Route exact path = '/detail/:id' component={DetailScreen}/>
            <Route exact path = '/ingridient/:name' component={IngridientScreen}/>
        </Switch>
    )
}