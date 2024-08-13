/*


@title: Food Stealer
@author: Julia Nadolska
@tags: []
@addedOn: 2024-00-00

RULES
You can move using 'WSAD'
You can reset level by clicking 'j' or reset the whole game by clickin 'i'


PLOT
You decided to stay fit and eat clean. Unfortunately someone just have stolen your fruits.
Try to find them, avoiding fast foods. Renember to get rid of the cake.
*/

const player = "p"
const apple = "a"
const banana = "b"
const grapes = "g"
const pear = "e"
const lemon = "l"
const watermelon = "w"
const pineapple = "i"
const orange = "o"
const kiwi = "k"
const coconut = "c"
const strawberry = "s"
const wall = "q"
const fries = "f"
const door = "d"
const burger = "r"
const bin = "z"
const cake = "@"
const BackgroundSong = tune`
500: A4~500 + C4^500 + D5/500,
500: A4~500 + G4-500,
500: C4^500 + A4~500 + D5/500,
500: C4^500 + A4~500 + D5/500,
500: A4~500 + D4-500,
500: A4~500 + D4-500,
500: C4^500 + A4~500 + C5/500,
500: C4^500 + A4~500 + C5/500,
500: C4^500 + A4~500 + C5/500,
500: A4~500 + G4-500,
500: A4~500 + G4-500,
500: C4^500 + A4~500 + D5/500,
500: C4^500 + A4~500 + D5/500,
500: C4^500 + A4~500 + D5/500,
500: A4~500 + D4-500,
500: A4~500 + D4-500,
500: C4^500 + A4~500 + E5/500,
500: C4^500 + A4~500 + E5/500,
500: C4^500 + A4~500 + E5/500,
500: A4~500 + G4-500,
500: A4~500 + G4-500,
500: C4^500 + A4~500 + D5/500,
500: C4^500 + A4~500 + D5/500,
500: C4^500 + A4~500 + D5/500,
500: A4~500 + D4-500,
500: A4~500 + D4-500,
500: C4^500 + A4~500 + C5/500,
500: C4^500 + A4~500 + C5/500,
500: C4^500 + A4~500 + C5/500,
500: A4~500 + G4-500,
500: A4~500 + G4-500,
500: C4^500 + A4~500 + D5/500`
const trash = tune`
210.52631578947367,
105.26315789473684: C5~105.26315789473684 + B4~105.26315789473684 + A4~105.26315789473684 + G4-105.26315789473684 + F4-105.26315789473684,
105.26315789473684: G4^105.26315789473684 + B4^105.26315789473684 + A4^105.26315789473684 + F4-105.26315789473684,
2947.368421052631` 

playTune(BackgroundSong, Infinity)

setLegend(
  [ player, bitmap`
.........C......
........C.......
.......6666.....
.......6756.....
.......6666.....
......699996....
......699996....
......699996....
......699996....
.......9999.....
.......9999.....
.......44DD.....
.......44DD.....
.......44DD.....
................
................` ],
  [ apple, bitmap`
................
................
................
.........44.....
.......C444.....
.......C44......
.....333333.....
.....333323.....
.....333233.....
.....333333.....
.....333333.....
.....333333.....
................
................
................
................`],
  [ banana, bitmap`
................
................
...........CC...
............CC..
...........666..
..........6666..
..........6666..
.........6666...
........6666....
......666666....
..666666666.....
..6666666.......
...666..........
................
................
................`],
  [ grapes, bitmap`
................
................
..........H.C...
......H..HCCCH..
.....HCCH.CCC...
......HCCCCHCH..
.........CH.....
.......HCC......
.....H.CCCH.....
....CCCC.C......
....H.C.HCH.....
...HCCCH.H......
..HCC.H.........
....H...........
................
................`],
  [ pear, bitmap`
................
................
................
........C.......
........C.......
.......444......
.......444......
......42444.....
.....4244444....
.....4444444....
.....4444444....
.....4444444....
......44444.....
................
................
................`],
  [ lemon, bitmap`
................
................
........44......
.......444......
.......CC.......
......6666......
.....662666.....
.....626666.....
.....666666.....
.....666666.....
.....666666.....
......6666......
................
................
................
................`],
  [ watermelon, bitmap`
................
................
................
................
.......33.......
......3333......
......3033......
.....333333.....
....33033033....
...4333333334...
...4433333344...
....44444444....
................
................
................
................`],
  [ pineapple, bitmap`
................
........D.......
.....DD.D.DDD...
....D..DDDD.....
.....DDDDDDD....
....D..DDD..D...
.......666......
......F6F66.....
.....66666F6....
.....6F66F66....
.....F66F66F....
.....6F66666....
.....6666F6F....
......6F66F.....
................
................`],
  [ orange, bitmap`
................
................
.........44.....
........444.....
.......44.......
.....999999.....
....99299999....
....92999999....
....99999999....
....99999999....
....99999999....
.....999999.....
................
................
................
................`],
  [ kiwi, bitmap`
................
................
................
.....CCCCCC.....
....CC4044CC....
...CC444044CC...
...C04044444C...
...C44422404C...
...C04422444C...
...C44044404C...
...CC444044CC...
....CC4444CC....
.....CCCCCC.....
................
................
................`],
  [ coconut, bitmap`
................
................
................
.....CCCCCC.....
....CCCCCCCC....
...CCCCCC0CCC...
...CCCCCCCCCC...
...CCCCCC0C0C...
...CCCCCCCCCC...
...CCCCCCCCCC...
...CCCCCCCCCC...
....CCCCCCCC....
.....CCCCCC.....
................
................
................`],
  [ strawberry, bitmap`
................
................
................
................
................
................
.......44.......
......4444......
.....333333.....
.....363363.....
.....333633.....
.....333333.....
......3633......
.......33.......
................
................`],
  [ wall, bitmap`
1111111111111111
1LLLLLLLLLLLLLL1
1L111111111111L1
1L111111111111L1
1L111111111111L1
1L111LLLLLL111L1
1L111LLLLLL111L1
1L111LLLLLL111L1
1L111LLLLLL111L1
1L111LLLLLL111L1
1L111LLLLLL111L1
1L111111111111L1
1L111111111111L1
1L111111111111L1
1LLLLLLLLLLLLLL1
1111111111111111`],
  [ fries, bitmap`
................
................
................
.......6.6......
......6666.6....
.....6666666....
......66666.....
......33333.....
......33333.....
......33333.....
......33333.....
......33333.....
................
................
................
................`],
  [ door, bitmap`
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CC666CCCCCCCCC1
1CCCC6CCCCCCCCC1
1CCCC6CCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1
1CCCCCCCCCCCCCC1`],
  [ burger, bitmap`
................
................
................
................
................
................
.....9999999....
.....9224429....
.....3234323....
.....2266626....
.....9CCCCC9....
.....9999999....
................
................
................
................`],
  [ bin, bitmap`
DDD.............
DD4D............
4DDD............
DDDD............
D4DD.8005307....
DDDD6D0DDD077...
.DDDD004DD0D7...
....D00DDD0D7...
....DD0DD4DD7...
....DDDD4DDD....
....D4DDDDD4....
....4DDDDD4D....
....DD4D4DDD....
....DDDDDDDD....
.....DDDDDD.....
................`],
  [ cake, bitmap`
................
................
................
................
................
................
.....232222.....
....22222322....
...2232222232...
...CC22CCCC2C...
...CC2CCCCCCC...
....CCCCCCCC....
................
................
................
................`],
  
  
  
  
  
)

setSolids([wall, player, cake, door])
var score  = 0
addText(`Score: ${score}`,{x: 10, y: 0, color: color`5`})

let level = 0
const levels = [
  map`
p.q.....
@.q.qq..
afq.fq..
.....q..
z..q.qdq
qq.q.q..
a..q.q.a
...q...f`,
  map`
z.......
.qfq..q.
...q....
..aq..f.
.qdq.aqq
.a...@p.
..qqq...
..f.....`,
  map`
....a....
.q....q..
.fzq..qq.
.qqf...q.
.q.@...q.
.qpqq.a..
.qdq...q.
...qf.q..
aqqq.....`,
  map`
q..qqqqqqaf
q..........
q.qqqqqqq..
q.q.....q.q
q.q.q.q.q.q
q.q.q.q.q.q
q.q.qaq.q.q
q.qpq.qaq.q
..qqq.qdq.q
a..zq.@....
qqqqqqqq..f`,
  map`
a...q......
..q.qqq.qdq
..q...q..q.
qqq..fqq...
z.qq.a...q.
.f.qqqq.qa.
.q.qqf...q.
....q.....q
.q.....p@.f
...aqqqq.q.
........qq.`,
  map`
qqqqqqqqqqqqq
q.....a.....p
q.qqqqqqqqqzq
q.....a...q.q
q.qfqqqqq.q.q
q.q.......q.q
q.qfqqdqq.q.q
q.q....a..q.q
q.q.qqqqq.q.q
q.q...af..q.q
q.qqqqqqqqq@q
q.a.........q
qqqqqqqqqqqqq`,
  map`
p...........z
..qqqqqqqqqf.
qqq......aq..
..q.......q..
..q.......q..
.fq.qqqqqqq..
.............
..qqqqqqqqq..
q.qaf....aqq.
q.q.......q.a
q.q.....f.q..
.@qqdqqqq.qf.
.............`
]
/*const grass = [bitmap`
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444`] */
let levelNumber = 0
setMap(levels[level])

/*setBackground(grass) */

setPushables({
  [ player ]: [cake]
})

onInput("s", () => {
  getFirst(player).y += 1
})
onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("d", () => {
  getFirst(player).x += 1
})
onInput("a", () => {
  getFirst(player).x -= 1
})

onInput("j", () => {
  setMap(levels[levelNumber])
})
onInput("i", () => {
  setMap(levels[level])
  
})

afterInput(() => {
  let character = getFirst(player)
  let apples = getAll(apple)
  let friess = getAll(fries)
  let cakee = getFirst(cake)
  let bino = getFirst(bin)
  let dooro = getFirst(door)
  let counter = 0
  
  if(tilesWith(bin, cake).length >= 1){
    cakee.remove()
    bino.remove()
    counter = 1
    addText(`Door open!`,{x: 5, y: 6, color: color`H`})
  }
  if(counter == 1){
    setSolids([wall, player, cake])
  }
  if(tilesWith(player, door).length >= 1){
      levelNumber++
      setMap(levels[levelNumber])
      counter = 0
      setSolids([wall, player, cake, door])
  }
  
  for(let i = 0; i < apples.length; i++){
    if(character.x === apples[i].x && character.y === apples[i].y){
      apples[i].remove()
      score += 1;
      clearText()
      addText(`Score: ${score}`,{x: 10, y: 0, color: color`5`})
    
    }
  }

  for(let i = 0; i <friess.length; i++){
    if(character.x === friess[i].x && character.y === friess[i].y){
      friess[i].remove()
      score -=1
      clearText()
      addText(`Score: ${score}`,{x: 10, y: 0, color: color`5`})
    }
  }
  
});
