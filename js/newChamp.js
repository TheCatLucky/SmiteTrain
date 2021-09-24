


let adPerLvl;
let asPerLvl;
function calcAD(num1 ){
        
    let massAD = [];
    massAD.push(`"Ad lvl 1" : ${num1}`);
    for (let lvl = 2; lvl < 18; lvl++){
        let adDamage = 0;
        adDamage = (num1 * (0.65 + 0.35 * lvl));
        massAD.push(`"Ad lvl ${lvl+1}" : ${adDamage.toFixed(3)}`);
    }
    
    adPerLvl = massAD.join();
    return adPerLvl;

}

function calcAS(num1, num2){

    let massAS = [];
    num2 /= 100;
    scale = num2 / 17;
    
    for (let lvl = 1; lvl < 18; lvl ++){
        let AttackSpeed = 0;
        AttackSpeed = 1000/(num1 *(1 + scale * lvl));
        massAS.push(`"As lvl ${lvl}": ${AttackSpeed.toFixed(0)}`);
        
    }
    
   asPerLvl = massAS.join();

   return asPerLvl;
}
function newChamp(){
let Champion = String(document.getElementById(`name`).value);
let adLvl1 = +(document.getElementById("adlvl1").value);
let as = +(document.getElementById("as").value);
let asScale18 = +(document.getElementById("asScale18").value);
calcAD(adLvl1);
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

