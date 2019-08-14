import glob from "glob"

export default async function findMdFiles( dir: string ): Promise<string[]> {
    return await new Promise( ( r , j ) => {
        glob( `${dir}/**/*.md` , function( er: Error , files: any ) {
            if ( er ) {
                return j( er )
            }
            return r( files )
        } )
    } )
}