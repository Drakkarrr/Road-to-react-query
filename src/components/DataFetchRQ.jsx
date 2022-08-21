import React from 'react'
import { useQuery } from 'react-query'
import axios from "axios";

const getUsers = () => axios.get('http://localhost:8000/users')

const DataFetchRQ = () => {
    const { isLoading, data, error } = useQuery('users', getUsers)
    if (isLoading) <h1>Loading...</h1>
    if (error) <h1>Error...</h1>


    return (
        <>
            <h1>This is Data Fetch using RQ</h1>
            {data?.data.map(users => <h3 key={users.id}>{users.name}</h3>)}
        </>
    )
}

export default DataFetchRQ