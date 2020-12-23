import React from 'react'
import { Link } from 'react-router-dom'

export default function View(props) {
    return (
        <div>
            {props.info &&
            <div>
                <img style={{width:'400px'}} src={props.info.strDrinkThumb}/>
                <h1>{props.info.strDrink}</h1>
                <br/>
                <br/>
                <p>{props.info.strInstructions}</p>
                <b>ingredients</b>
                <ul>
                    <Link to={'/ingredient/' + props.info.strIngredient1}><li>{props.info.strIngredient1}</li></Link>
                    <Link to={'/ingredient/' + props.info.strIngredient2}><li>{props.info.strIngredient2}</li></Link>
                    <Link to={'/ingredient/' + props.info.strIngredient3}><li>{props.info.strIngredient3}</li></Link>
                    <Link to={'/ingredient/' + props.info.strIngredient4}><li>{props.info.strIngredient4}</li></Link>
                    <Link to={'/ingredient/' + props.info.strIngredient5}><li>{props.info.strIngredient5}</li></Link>
                </ul>
                <b>Measure</b>
                <ul>
                    <li>{props.info.strMeasure1}</li>
                    <li>{props.info.strMeasure2}</li>
                    <li>{props.info.strMeasure3}</li>
                    <li>{props.info.strMeasure4}</li>
                    <li>{props.info.strMeasure5}</li>
                </ul>
            </div>
            } 
        </div>
    )
}
