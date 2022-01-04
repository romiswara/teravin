export const getData = async () => {
    var data = await localStorage.getItem("data")
    return JSON.parse(data)
}

export const saveData = async (data) => {
    await localStorage.setItem("data",JSON.stringify(data))
}