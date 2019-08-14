
import readFile from "./read-file"
import marked from "marked"
import highlight from "highlight.js"
import { yamlReg } from "./share"

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code) {
        return highlight.highlightAuto(code).value;
    },
    headerIds: false ,
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
} )


async function md2html( file: string ): Promise<string | undefined> {
    const content: string = await readFile( file ) ,
        stripYaml = content.replace( yamlReg , "" )
    return marked( stripYaml )
}

export default md2html