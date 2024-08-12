/*


@title: Food Stealer
@author: Julia Nadolska
@tags: []
@addedOn: 2024-00-00

RULES
You can move using 'WSAD'
You can reset level by clicking 'j'

PLOT
You decided to stay fit and eat clean. Unfortunately someone just have stolen your fruits.
Try to find them, avoiding fast foods.
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
  
  
  
  
  
)

setSolids([wall, player])
var score  = 0
addText(`Score: ${score}`,{x: 10, y: 0, color: color`5`})

let level = 0
const levels = [
  map`
p.q.....
..q.qq.k
.fq.rq..
.....q..
...q.qdq
qq.q.q..
w..q.q.a
...q...f`,
  map`
pq......
.q.qqqq.
.s.q..f.
qqqqe.q.
..r...q.
qdq.qqq.
..q...k.
g...qqqq`
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

setMap(levels[level])

/*setBackground(grass) */

setPushables({
  [ player ]: []
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
  setMap(levels[level])
})

afterInput(() => {
  
    
  
  
})
