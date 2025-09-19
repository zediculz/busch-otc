import { lexer, startLexer } from "./ai/lexer.ts";
import Busch from "./ai/root.ts";
const busch = new Busch()

function main() {
  const {b} = busch
  console.log(`Welcome to Busch ${b.version}`)
  console.log(`START: ${b.name}`)
  console.log(`##Today's Date: ${b.date}`)
  console.log("#####################")
  const startName = prompt("Start The Day: ")
 
  if(startName !== "") {
    const goal = startLexer(startName)
    const started = busch.start(goal)

    while (started) {
      const src = prompt("[busch]: ")

      if(src === "exit") {
        Deno.exit(1)
      }else {
       const ast = lexer(src)
       switch (ast?.action) {
        case "add":
          busch.addTrade(ast)
          break;
        case "view":
          busch.vue()
          break;
        case "cal":
          if(ast?.copt === "trades") {
            busch.totalTrades()
          }else if(ast?.copt === "spreads") {
            busch.totalSpreads()
          } else if(ast?.copt === "all") {
            busch.totalWin(ast?.avr)
          }
          break;
       
        default:
          break;
       }
      }
    }
  }

  //start a day on open
  //receive a start prompt with goal with keyword  ==> start goal
  //and wait to receive trades data

  //receive trade data amount and spread with keyword  ==> add [name] amount, spread 

  //view the datas in a day with view-all [name]

  //calulate the totals trades ==> display the total trades amount
  //cal spread  ==> display the total spread and average spread of the day 
  //cal totalwork  ==> calculate all the win for the day
  //exit to close

  //remove,  last, with id
  // update with id
  //and persistence

}

main()