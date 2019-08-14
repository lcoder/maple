import fs from "fs"

export default function readFile( file: string ): Promise<string> {
    return new Promise( ( r , j ) => {
        fs.readFile( file , `utf8` , function( error , content ) {
            if ( error ) {
                j( error )
            } else {
                r( content )
            }
        } )
    } )
}
