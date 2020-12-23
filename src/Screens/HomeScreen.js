import React,{useState, useEffect} from 'react'
import SearchBar from '../components/Home/SearchBar'
import { COCTAIL_ALL, SEARCH_BY_NAME, FILTER_BY_ALCO } from '../config'
import List from '../components/Home/List'

export default function HomeScreen() {
    const [data, setData] = useState(null)
    useEffect(()=>{
        getAllCoctails()
    },[])

    const getAllCoctails= async()=>{
        let resp = await fetch(COCTAIL_ALL)
        let request = await resp.json()
        setData(request.drinks)
    }
    const getCoctailsByName = async (latter)=>{
        if(latter.length <= 1 || latter == ''){
            getAllCoctails()
        }else{
            let resp = await fetch(SEARCH_BY_NAME+latter)
            let request = await resp.json()
            setData(request.drinks)
        }  
    }
    const filterByAlc = async (fltr) => {
        if(fltr == 'All'){
            getAllCoctails()
        }else{
            let resp = await fetch(FILTER_BY_ALCO+fltr)
            let req = resp.json()
            setData(req.drinks)
        }
    }
    return (
        <div
            style={{
                backgroundColor: 'green'
            }}>
            <h1
            style={{
                textAlign: 'center',
                fontSize: '60px'
            }}
            >COCTAIL_MENU</h1>
            <SearchBar
                getCoctailsByName={getCoctailsByName}
                filterByAlc={filterByAlc}
            />
            <List
                data={data}
            />
        </div>
    )
}
