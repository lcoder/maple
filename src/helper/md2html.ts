
import readFile from "./read-file"
import marked from "marked"
import highlight from "highlight.js"
import { yamlReg } from "./share"

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function( code ) {
        const result = highlight.highlightAuto( code ).value
        return result
    } ,
    headerIds: false ,
    pedantic: false,
    gfm: true ,
    breaks: false ,
    sanitize: false ,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    langPrefix: "hljs " ,
} )


async function md2html( file: string ): Promise<string | undefined> {
    const content: string = await readFile( file ) ,
        stripYaml = content.replace( yamlReg , "" ) ,
        html = marked( stripYaml )
    return html
}

export default md2html