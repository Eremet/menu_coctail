import React, {useEffect, useState} from 'react'
import { SEARCH_BY_ING } from '../config'


export default function IngredientScreen(props) {
    const [ing, setData] = useState(null)

     useEffect(()=>{
        let param = props.match.params.name
        getIngredient(param)
    },[])

    const getIngredient = async(prm) =>{
        let resp = await fetch(SEARCH_BY_ING+prm)
        let req = resp.json()
        setData(req ? req.ingredients[0] : null)
        console.log(req)
    }
    
    return (
        <div>
               <span onClick={
                    props.history.goBack
                }>{'<--'}</span>
                    {ing ? 
                        <div>
                            <h1>{ing.strIngredient}</h1>
                            <span>
                                <input
                                    type="text"
                                    defaultChecked={
                                        ing.strAlcohol == 'Yes' ?
                                        true : false}
                                    disabled
                                >
                                </input>
                            </span>
                            <b><i>{ing.strDescription}</i></b>
                        </div>

                        :<h1>Result undefined</h1>
                    }
        </div>
    )
}