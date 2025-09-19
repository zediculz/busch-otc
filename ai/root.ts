import { AddAST, resDay } from "./lexer.ts";

interface BuschDataType {
    id: string
    amount: number
    spread: number
}

interface BuschTypes {
    id: string
    version: number
    name?: string|null
    date?: string
    goal?: number
    data?: BuschDataType[]
}

const date = new Date()

class Busch {
    bucket: BuschTypes[]
    b:BuschTypes
    constructor() {
        this.b = {
            id: `${Math.floor(Math.random() * 9999999999)}`,
            version: 1.01,
            name: resDay(date.getDay()),
            date: date.toDateString(),
            data: []
        }
        this.bucket = []
    }

    start(goal: number) {
        if(this.bucket.length === 0) {
            this.#display()
            this.b.goal = goal 
            this.bucket.push(this.b)
            return true
        }else {
            console.log("day already started")
        }
    }

    addTrade(ast:AddAST) {
        const newTrade:BuschDataType = {
            id: `${Math.floor(Math.random() * 9999999)}`,
            amount: ast?.amount,
            spread: ast?.spread
        }

       this.b.data?.push(newTrade)
       this.#displayTrades()
       console.log(`new trade with id: ${newTrade?.id} added`)
    }

    vue() {
       this.#displayTrades()
    }

    totalTrades() {
        console.log("#calculating total trades")
        const c = this.#cal()
        const len = c.len !== null ? c.len : null
        this.#displayTrades()
        console.log(`#Total Trades: ${c.tt.toLocaleString()}`)
        console.log(`#Trades Length(s): ${len}`)
        console.log(" ")
    }

    totalSpreads() {
        console.log("#calculating total spread")
        //add all trade amount together
        const c = this.#cal()
        this.#displayTrades()

        const len = c.len !== null ? c.len : 0
        const as = c.ts / len
        
        console.log(`#Total Spreads: ${c.ts.toLocaleString()}`)
        console.log(`#Trades Length(s): ${len}`)
        console.log(`#Average Spread: ${as.toLocaleString()}`)
        console.log(" ")

    }

    totalWin(avr:number|undefined) {
        console.log("#calculating total win of the day")
        
        //add all trades amt, divide em by avr, 
        // get average spread and mul av spread with 
        const c = this.#cal()

        if(avr !== undefined) {
            const len = c.len !== null ? c.len : 0

            const trades = c.tt / avr
            const as = c.ts / len

            const tradeWin = trades * as
            console.log(" ")
            this.#displayTrades()
            console.log(`#Trades Length(s): ${len}`)
            console.log(`#Average Trades: ${trades}`)
            console.log(`#Average Spread: ${as.toLocaleString()}`)
            console.log(`#Average Rate: ${avr}`)
            console.log(" ")
            console.log(`#Trade Win: ${tradeWin}`)
            console.log(" ")
        }

    }

    #cal() {
        let tt = 0
        let ts = 0
        this.b.data?.flatMap((trade) => {
            tt += trade?.amount
            ts += trade?.spread
        })

        if(this.b.data?.length !== undefined) {
            const len = this.b.data?.length
            return {tt, ts, len}
        }

        return {tt, ts, len: null}
    }

    #display() {
        console.clear()
        console.log("##################")
        console.log(`RUNNING: ${this.b.name} on ${this.b.id}`)
        console.log("add trade using => [add] amount spread")
        console.log("total trades => [cal] trades")
        console.log("total spreads => [cal] spreads")
        console.log("today Win => [cal] all")
        console.log("[view] to view all actions.")
        console.log("[exit] to close Busch.")
        console.log(" ")
    }

    #displayTrades() {
        this.#display()
        console.log("#ALL TRADES")
        this.b.data?.flatMap((trade, id) => {
            console.log(`#${id + 1}: ${trade.amount} ${trade.spread}`)
        })
        console.log(" ")
    }

}

export default Busch