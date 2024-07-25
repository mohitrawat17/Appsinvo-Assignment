export const getAllData=async()=>{
    const data=await fetch('https://api.thegamehunt.com/api/coach/homeScreen?longitude=77.216721&latitude=28.644800')
    return await data.json()
}