import React from 'react'
import { useQuery } from 'react-query'
import axios from "axios";

const getUsers = () => axios.get('http://localhost:8000/users')

const DataFetchRQ = () => {
    const { isLoading, data, error, isFetching, refetch } = useQuery('users', getUsers, {
        // staleTime: 30000,
        // refetchOnMount: true,
        // refetchOnWindowFocus: 'always',
        // refetchInterval: 1000,
        // refetchIntervalInBackground: true,

        enabled: false,
    })

    if (isLoading || isFetching) <h1>Loading...</h1>
    if (error) <h1>Error...</h1>


    return (
        <>
            <h1>This is Data Fetch using RQ</h1>
            <button onClick={refetch}>Fetch data</button>
            {data?.data.map(users => <h3 key={users.id}>{users.name}</h3>)}
        </>
    )
}

export default DataFetchRQ