import type { ServerLoad,Actions } from "@sveltejs/kit";

export const load :ServerLoad = (() => {

    return {
        pageName: "İletişim"
    }
}) as ServerLoad


export const actions : Actions = {
    default(){
        console.log("ananze")
    } 
} 