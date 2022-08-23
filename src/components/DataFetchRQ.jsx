import React from 'react'
import useGetNames from '../hooks/useGetNames'


const DataFetchRQ = () => {
    const onSuccess = (data) => {
        console.log(`Data is success ${data}`)
    }


    const onError = (error) => {
        console.log(`error is occured ${error}`)
    }

    const { isLoading, data, error, isFetching, refetch } = useGetNames(onSuccess, onError)

    if (isLoading || isFetching) <h1>Loading...</h1>
    if (error) <h1>Error...</h1>


    return (
        <>
            <h1>This is Data Fetch using RQ</h1>
            <button onClick={refetch}>Fetch data</button>
            {/* {data?.data.map(users => <h3 key={users.id}>{users.name}</h3>)} */}
            {
                data?.data.map(users => <h3 key={users.id}>{users.name}</h3>)
            }
        </>
    )
}

export default DataFetchRQ