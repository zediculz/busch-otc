
export interface AddAST {
    action: string
    amount: number
    spread: number
}

export const startLexer = (goal:string|null) => {
    return parseInt(`${goal}000000`)
} 

export const lexer = (src:string|null) => {
    const srcSplit = src?.split(" ")
    
    if(srcSplit) {
        const action = srcSplit[0]

        if(action === "add") {
            const amount = parseFloat(srcSplit[1])
            const spread = parseFloat(srcSplit[2])
            return {action, amount, spread}
        }else if(action === "view") {
            return {action, spread: 0, amount: 0}
        }else if(action === "cal") {
            const opt = srcSplit[1]
            const allAvRate = srcSplit[2]
            
            if(opt === "all" && allAvRate !== undefined) {
                const avr = parseInt(allAvRate)
                return {action, spread: 0, amount: 0, copt: "all", avr}
            } else if(opt === "trades") {
                return {action, spread: 0, amount: 0, copt: "trades"}
            } else if(opt === "spreads") {
                return {action, spread: 0, amount: 0, copt: "spreads"}
            }
            return {action, spread: 0, amount: 0}
        }else {
            console.log("syntax not found");
        }
    }
} 


export const resDay = (id:number) => {
    switch (id) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednessday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    
        default:
            break;
    }
}