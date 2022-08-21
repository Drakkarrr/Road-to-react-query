import React, { useEffect, useState } from 'react'
import axios from 'axios'


const DataFetch = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/users')
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    if (isLoading) return <h1>Loading...</h1>


    return (
        <>
            <h1>This is Data Fetch using Axios</h1>
            {data.map(users => <h3 key={users.id}>{users.name}</h3>)}
        </>
    )
}

export default DataFetch