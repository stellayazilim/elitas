import type { ServerLoad } from "@sveltejs/kit";
import * as Prisma from "@elitas/database"

export const load: ServerLoad = (() => {


    console.log(Prisma)

    return {}
}) satisfies ServerLoad