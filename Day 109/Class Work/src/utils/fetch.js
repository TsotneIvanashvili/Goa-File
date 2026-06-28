
const FetchData = async (url) => {
    const res = await fetch(url)
    const data = await JSON.stringify(res)

    return data
}


export default FetchData