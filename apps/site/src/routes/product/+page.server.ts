import type { ServerLoad } from "@sveltejs/kit";

export const load :ServerLoad = (() => {

    return {
        pageName: "Ürün"
    }
}) as ServerLoad