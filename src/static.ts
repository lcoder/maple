import os from "os"

const home = "~"

export const resolveHome = ( staticPath: string ): string => {
    if ( staticPath.startsWith( home ) ) {
        return staticPath.replace( home , os.homedir )
    } else {
        return staticPath
    }
}