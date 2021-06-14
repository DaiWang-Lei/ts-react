import { useState, useEffect } from 'react';
import axios from 'axios'

const useURLLoader = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    async function dispatchUrl() {
        setLoading(true)
        const { data } = await axios.get(url);
        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        dispatchUrl();
    }, deps)
    return [data, loading];
}

export default useURLLoader;