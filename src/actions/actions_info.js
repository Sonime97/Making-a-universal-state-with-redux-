export const INFO_FETCHED = 'INFO_FETCHED';
export function fetchInfo() {
    return (dispatch) => { 
    return fetch("http://www.json-generator.com/api/json/get/craFMFOxua?indent=2",{method: "GET"})
    .then(response => response.json())
    .then(json => { 
        console.log(json)
        dispatch(loadInfo(json))
    }).catch(error => console.log(error));
}
 }
export function loadInfo(results) {
    return {
        type: INFO_FETCHED,
        payload: results
    }
} 