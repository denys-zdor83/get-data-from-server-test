import React from "react";
import { useDispatch } from "react-redux";

function useClearDataHandler() {
    const dispatch = useDispatch();


    return React.useCallback((type, obj) => {
        const clearData = Object.fromEntries(
            Object.entries(obj)
            .map(([key, value]) => [key, value = ""])
        );
        dispatch(
            {
                type, 
                payload: {
                    set: clearData
                }
            }
        )
        }, []
    )
}

export default useClearDataHandler;