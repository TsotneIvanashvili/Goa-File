const FetchData = async (url) => {
    const data = await fetch(url)
    const res = await data.json()
    console.log(res);
    
    return res
}

export default FetchData