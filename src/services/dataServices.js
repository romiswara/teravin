export const getData = async () => {
    var data = await localStorage.getItem("data")
    return JSON.parse(data)
}