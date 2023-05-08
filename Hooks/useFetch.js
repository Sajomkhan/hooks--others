import { useEffect, useState} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)    

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url)
                const json = res.json();
                setData(json)
                setLoading(false);
            } catch (error) {
                setError(error)
                setLoading(false);                
            }
        }
        fetchData()
    }, [url])

  return { loading, error, data }

export default useFetch

// ----------------------------------------------------------------
// use this useFetch fom another pages as like:
import useFetch from './hooks/useFetch'
let { loading, error, data } = useFetch('https://jsonpl')
if(loading) return <h3>Loading...</h3>
if(error) return <h3>Error!</h3>
console.log(data);
