


let adPerLvl = null;
let asPerLvl = null;
function calcAD(num1,num2 ){
        
    let massAD = [];
    let g = (num2-num1)/17;
    massAD.push(`"Ad lvl 1" : ${num1}`);
    for (let lvl = 2; lvl <= 18; lvl++){
        let adDamage = 0;
        adDamage = num1 + g * (lvl - 1) * (0.7025 + 0.0175 * (lvl - 1) ) ;
        massAD.push(`"Ad lvl ${lvl}" : ${adDamage.toFixed(2)}`);
    }
    
    adPerLvl = massAD.join();
    return adPerLvl;

}

function calcAS(num1, num2){

    let massAS = [];
    num2 /= 100;
    let g = num2 / 17;
    let ASRatio = 0.656
    
    for (let lvl = 1; lvl <= 18; lvl ++){
        let AttackSpeed = 0;
        AttackSpeed = (num1 + (g * (lvl - 1) * (0.7025 + 0.0175 * (lvl - 1)))*ASRatio);
        console.log(`As lvl ${lvl} ${(num1 + (g * (lvl - 1) * (0.7025 + 0.0175 * (lvl - 1))) * ASRatio).toFixed(3)}`)
        massAS.push(`"As lvl ${lvl}": ${AttackSpeed.toFixed(3)}`);
        
    }
    
   asPerLvl = massAS.join();

   return asPerLvl;
}
function newChamp(){
let Champion = String(document.getElementById(`name`).value);
let adLvl1 = +(document.getElementById("adlvl1").value);
let adLvl18 = +(document.getElementById("adlvl18").value);
let as = +(document.getElementById("as").value);
let asScale18 = +(document.getElementById("asScale18").value);
calcAD(adLvl1,adLvl18);
calcAS(as,asScale18);

let result = `${Champion} : {
    "name" : "${Champion}",
    ${adPerLvl},
    "Ap" : 0,
    ${asPerLvl},
},`;

console.log(result);
return result;
}

