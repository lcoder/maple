import { docsInfos } from "../cache/index"
import { MdYamlConfig } from "../@types/index"

interface Params {
    year?: string | number
    month?: string | number
    day?: string | number
    fileName?: string
}


export default ( { year , month , day , fileName }: Params ): MdYamlConfig | undefined => {
    const { corrects } = docsInfos
    return corrects.find( ( { config } ) => {
            const { date , fileName: cFileName , release } = config! ,
                cYear = date.getFullYear() ,
                cMonth = date.getMonth() + 1 ,
                cDay = date.getDate()
            if (
                year === String( cYear ) &&
                month === String( cMonth ).padStart( 2 , "0" ) &&
                day === String( cDay ).padStart( 2 , "0" ) &&
                fileName === cFileName
            ) {
                return true
            } else {
                return false
            }
        } )
}