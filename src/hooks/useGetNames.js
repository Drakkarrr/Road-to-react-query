import { useQuery } from "react-query";
import axios from "axios";


const getUsers = () => axios.get('http://localhost:8000/users')

export const useGetNames = (onSuccess, onError) => {
  return useQuery('users', getUsers, {
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: 'always',
    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,

    // enabled: false,

    onSuccess,
    onError,
    select: (data) => {
        const users = data.data.map(user => user.name)
        return users
    }
})
}

export default useGetNames