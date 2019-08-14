import getDocsInfo , { DocsInfo } from "../helper/get-docs-info"

export let docsInfos: DocsInfo = {
    corrects: [] ,
    useless: []
}


const init = async () => {
    const { corrects , useless } = await getDocsInfo()
    Object.assign( docsInfos , {
        corrects ,
        useless ,
    } )
}


init()