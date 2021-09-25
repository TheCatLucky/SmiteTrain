/*const ZZigs = {
    "Ad" : 20,
    "Ap" : 10,
}

const Sword = {
    "Ad" : "+20",
}

console.log(ZZigs);
console.log(Sword);

ZZigs.Ad += +Sword.Ad;
ZZigs.Ap += +Sword.Ap || 0;
console.log(ZZigs)
*/let BaronHpCurrent = 100;
function HandDamage(ad,as,ch,cd){
let HDmg = setTimeout ( function Handdmg(){
        HDmg = setTimeout (Handdmg,as);
        let chance = (Math.random()).toFixed(2);

        if (BaronHpCurrent <= 0) { 
            clearTimeout(HDmg);
            console.log("всё")
            return ;} 

        if (chance < ch) {
            DamageTest = (ad * ( 1 + cd)).toFixed(0)* 0.5;
            BaronHpCurrent -= DamageTest ;
            console.log(`Кейтлин нанесла ${DamageTest} крит урона`)
            return BaronHpCurrent;}

        else {DamageTest = ad* 0.5;
        BaronHpCurrent -= DamageTest ;
        console.log(`Кейтлин нанесла ${DamageTest} урона`)};
        return BaronHpCurrent;;
    },Math.random() * (500 - 100 + 1)+ 100) 
}
HandDamage(62,1693,0.6,1.75)