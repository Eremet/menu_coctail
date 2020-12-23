import React, {useEffect, useState} from 'react'
import View from '../components/Detail/View'
// import { Link } from 'react-router-dom'
import { COCTAIL_BY_ID } from '../config'

export default function DetailScreen(props) {
    const [fullInfo, setFullInfo]=useState(null) 
    useEffect(()=>{
        let param = props.match.params.id
        getDetailInfo(param)
    },[])
    const getDetailInfo = async (prm)=>{
        let resp = await fetch(COCTAIL_BY_ID+prm)
        let req  = await resp.json()
        console.log(req.drinks[0])
        setFullInfo(req.drinks[0])
    }
    return (
        <div>
                <span onClick={
                    props.history.goBack
                }>{'<--'}</span>
            {/* <Link to='/' ><span> {'<--'} </span></Link> */}
            <View
                info = {fullInfo}
            />
        </div>
    )
}
