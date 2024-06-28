const setLocalData = (data) => {
    console.log('local data store:', data);
    localStorage.setItem('local-store', JSON.stringify(data));


}
const getLocalData = () => {
    const data = localStorage.getItem('local-store');
    return data ? JSON.parse(data) : null
}

const removeLocalData = () => {
    localStorage.removeItem('local-store');
}
export default { setLocalData, getLocalData, removeLocalData }

