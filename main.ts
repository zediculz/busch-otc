import { startLexer } from "./src/root.ts";
import Busch from "./src/busch.ts";
import runTime from "./src/runtime.ts";


const busch = new Busch()

function main() {
  busch.init()
  const startGoal = prompt("#[Busch] today's Goal: ")
 
  if(startGoal !== "") {
    const goal = startLexer(startGoal)
    const started = busch.start(goal)

    while (started) {
      const src = prompt("#[Busch]: ")

      if(src === "exit" || src === "close") {
        Deno.exit(1)
      } else {
        runTime(busch, src)
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