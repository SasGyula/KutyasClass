import { kutyaLISTA } from "./modell/adat.js";
import Kartya from "./view/Kartya.js";
import Kartyak from "./view/Kartyak.js";
const kivKutyaLista=[]

const kivELEM = $(".kivalasztott")

const taroloElem = $(".tartalom")
new Kartyak(kutyaLISTA,taroloElem)
$("window").on("kivalaszt", (event)=>{
    console.log(event.detail)
    kivKutyaLista.push(event.detail)
    new Kartya(event.detail, kivELEM)
})