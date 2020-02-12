import * as allActions from "./allActions"
import search from "../utils/API"

export function recieveGiphy(data) {
    return {type: allActions.GET_GIF_SUCCESS, giphy: data }
}


export function fetchGif() {
    return (dispatch) => {
        search().then(res => {
            console.log(res);
            if(res.status === 200) {
                dispatch(recieveGiphy(res.data))
            } else {
                let flash = {
                    type: "error",
                    title: "Error getting task list",
                    content: "There was an error getting the task list. Please try agian."
                }
                dispatch({type: "DISPLAY_FLASH", data: flash})
            }
        })
    };
}
