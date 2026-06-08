const fetchData = async (url) => {
    const data = await fetch(url)
    const response =  data.json()
    return response
}

export {fetchData}