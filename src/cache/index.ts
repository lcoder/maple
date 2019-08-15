import getDocsInfo , { DocsInfo } from "../helper/get-docs-info"
import chokidar from "chokidar"
import paths from "../paths"
import { debounce } from "../helper/throttle-debounce"

const { appDocs } = paths

export let docsInfos: DocsInfo = {
    corrects: [] ,
    useless: []
}

const getDocs = async () => {
    const { corrects , useless } = await getDocsInfo()
    // console.log( corrects )
    Object.assign( docsInfos , {
        corrects ,
        useless ,
    } )
}

const mdReg = /\.md$/
const upadteDocs = debounce( 5 * 1000 , getDocs )

chokidar.watch( appDocs , { ignoreInitial: true } ).on( "all" , ( event , path ) => {
    if ( mdReg.test( path ) ) {
        upadteDocs()
    }
} )


getDocs()