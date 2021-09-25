
window.champions = 
{  
    Ahri : {
        "name" : "Ahri",
        "Ad lvl 1" : 53,"Ad lvl 3" : 71.550,"Ad lvl 4" : 90.100,"Ad lvl 5" : 108.650,"Ad lvl 6" : 127.200,"Ad lvl 7" : 145.750,"Ad lvl 8" : 164.300,"Ad lvl 9" : 182.850,"Ad lvl 10" : 201.400,"Ad lvl 11" : 219.950,"Ad lvl 12" : 238.500,"Ad lvl 13" : 257.050,"Ad lvl 14" : 275.600,"Ad lvl 15" : 294.150,"Ad lvl 16" : 312.700,"Ad lvl 17" : 331.250,"Ad lvl 18" : 349.800,
        "Ap" : 0,
        "As lvl 1": 1425,"As lvl 2": 1398,"As lvl 3": 1371,"As lvl 4": 1346,"As lvl 5": 1321,"As lvl 6": 1298,"As lvl 7": 1275,"As lvl 8": 1253,"As lvl 9": 1232,"As lvl 10": 1211,"As lvl 11": 1191,"As lvl 12": 1172,"As lvl 13": 1154,"As lvl 14": 1136,"As lvl 15": 1118,"As lvl 16": 1101,"As lvl 17": 1085,
        "Crit Chance" : 0,
        "Crit Damage" : 1.75,
        HandDamage(ad,as,ch,cd){
            let HDmg = setTimeout ( function Handdmg(){
                HDmg = setTimeout (Handdmg,as);
                let chance = (Math.random()).toFixed(2);

                if (BaronHpCurrent <= 0) { 
                    clearTimeout(HDmg);
                    console.log("всё")
                    return ;} 

                if (chance < ch) {
                    DamageTest = ((ad * ( 1 + cd)).toFixed(0))* 0.5;
                    BaronHpCurrent -= DamageTest ;
                    //logZone.insertAdjacentHTML("beforeend", `Ари нанесла ${DamageTest} крит урона`)
                    return BaronHpCurrent;}

                else {DamageTest = ad * 0.5;
                BaronHpCurrent -= DamageTest ;
                //logZone.insertAdjacentHTML("beforeend",`<p>Ари нанесла ${DamageTest} урона</p>`);
                return BaronHpCurrent};
            },Math.random() * (500 - 100 + 1)+ 100) 
        },
        

    },
    Diana : {
        "name" : "Diana",
        "Ad lvl 1" : 57,"Ad lvl 3" : 76.950,"Ad lvl 4" : 96.900,"Ad lvl 5" : 116.850,"Ad lvl 6" : 136.800,"Ad lvl 7" : 156.750,"Ad lvl 8" : 176.700,"Ad lvl 9" : 196.650,"Ad lvl 10" : 216.600,"Ad lvl 11" : 236.550,"Ad lvl 12" : 256.500,"Ad lvl 13" : 276.450,"Ad lvl 14" : 296.400,"Ad lvl 15" : 316.350,"Ad lvl 16" : 336.300,"Ad lvl 17" : 356.250,"Ad lvl 18" : 376.200,
        "Ap" : 0,
        "As lvl 1": 1565,"As lvl 2": 1531,"As lvl 3": 1499,"As lvl 4": 1468,"As lvl 5": 1438,"As lvl 6": 1410,"As lvl 7": 1382,"As lvl 8": 1356,"As lvl 9": 1331,"As lvl 10": 1306,"As lvl 11": 1283,"As lvl 12": 1260,"As lvl 13": 1238,"As lvl 14": 1217,"As lvl 15": 1196,"As lvl 16": 1176,"As lvl 17": 1157,
        "Crit Chance" : 0,
        "Crit Damage" : 1.75,
        HandDamage(ad,as,ch,cd){
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
                    console.log(`Диана нанесла ${DamageTest} крит урона`)
                    return BaronHpCurrent;}

                else {DamageTest = ad* 0.5;
                BaronHpCurrent -= DamageTest ;
                console.log(`Диана нанесла ${DamageTest} урона`)};
                return BaronHpCurrent;;
            },Math.random() * (500 - 100 + 1)+ 100) 
        },
    },
    Caitlyn : {
        "name" : "Caitlyn",
        "Ad lvl 1" : 62,"Ad lvl 3" : 83.700,"Ad lvl 4" : 105.400,"Ad lvl 5" : 127.100,"Ad lvl 6" : 148.800,"Ad lvl 7" : 170.500,"Ad lvl 8" : 192.200,"Ad lvl 9" : 213.900,"Ad lvl 10" : 235.600,"Ad lvl 11" : 257.300,"Ad lvl 12" : 279.000,"Ad lvl 13" : 300.700,"Ad lvl 14" : 322.400,"Ad lvl 15" : 344.100,"Ad lvl 16" : 365.800,"Ad lvl 17" : 387.500,"Ad lvl 18" : 409.200,
        "Ap" : 0,
        "As lvl 1": 1693,"As lvl 2": 1630,"As lvl 3": 1572,"As lvl 4": 1518,"As lvl 5": 1467,"As lvl 6": 1420,"As lvl 7": 1375,"As lvl 8": 1334,"As lvl 9": 1295,"As lvl 10": 1258,"As lvl 11": 1223,"As lvl 12": 1190,"As lvl 13": 1158,"As lvl 14": 1129,"As lvl 15": 1100,"As lvl 16": 1074,"As lvl 17": 1048,
        "Crit Chance" : 0,
        "Crit Damage" : 1.75,
        HandDamage(ad,as,ch,cd){
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
        },
    },
    Cassiopeia : {
        "name" : "Cassiopeia",
        "Ad lvl 1" : 53,"Ad lvl 3" : 71.550,"Ad lvl 4" : 90.100,"Ad lvl 5" : 108.650,"Ad lvl 6" : 127.200,"Ad lvl 7" : 145.750,"Ad lvl 8" : 164.300,"Ad lvl 9" : 182.850,"Ad lvl 10" : 201.400,"Ad lvl 11" : 219.950,"Ad lvl 12" : 238.500,"Ad lvl 13" : 257.050,"Ad lvl 14" : 275.600,"Ad lvl 15" : 294.150,"Ad lvl 16" : 312.700,"Ad lvl 17" : 331.250,"Ad lvl 18" : 349.800,
        "Ap" : 0,
        "As lvl 1": 1523,"As lvl 2": 1501,"As lvl 3": 1479,"As lvl 4": 1458,"As lvl 5": 1438,"As lvl 6": 1418,"As lvl 7": 1399,"As lvl 8": 1380,"As lvl 9": 1362,"As lvl 10": 1344,"As lvl 11": 1327,"As lvl 12": 1310,"As lvl 13": 1293,"As lvl 14": 1277,"As lvl 15": 1262,"As lvl 16": 1246,"As lvl 17": 1232,
        "Crit Chance" : 0,
        "Crit Damage" : 1.75,
        HandDamage(ad,as,ch,cd){
            let HDmg = setTimeout ( function Handdmg(){
                HDmg = setTimeout (Handdmg,as);
                let chance = (Math.random()).toFixed(2);

                if (BaronHpCurrent <= 0) { 
                    clearTimeout(HDmg);
                    console.log("всё")
                    return ;} 

                if (chance < ch) {
                    DamageTest = (ad * ( 1 + cd)).toFixed(0) * 0.5;
                    BaronHpCurrent -= DamageTest ;
                    console.log(`Кассиопея нанесла ${DamageTest} крит урона`)
                    return BaronHpCurrent;}

                else {DamageTest = ad * 0.5;
                BaronHpCurrent -= DamageTest ;
                console.log(`Кассиопея нанесла ${DamageTest} урона`)};
                return BaronHpCurrent;;
            },Math.random() * (500 - 100 + 1)+ 100) 
        },
    },
    Ziggs : {
        "name" : "Ziggs",
        "Ad lvl 1" : 54,"Ad lvl 3" : 72.900,"Ad lvl 4" : 91.800,"Ad lvl 5" : 110.700,"Ad lvl 6" : 129.600,"Ad lvl 7" : 148.500,"Ad lvl 8" : 167.400,"Ad lvl 9" : 186.300,"Ad lvl 10" : 205.200,"Ad lvl 11" : 224.100,"Ad lvl 12" : 243.000,"Ad lvl 13" : 261.900,"Ad lvl 14" : 280.800,"Ad lvl 15" : 299.700,"Ad lvl 16" : 318.600,"Ad lvl 17" : 337.500,"Ad lvl 18" : 356.400,
        "Ap" : 0,
        "As lvl 1": 1495,"As lvl 2": 1466,"As lvl 3": 1438,"As lvl 4": 1411,"As lvl 5": 1386,"As lvl 6": 1361,"As lvl 7": 1337,"As lvl 8": 1314,"As lvl 9": 1292,"As lvl 10": 1270,"As lvl 11": 1250,"As lvl 12": 1229,"As lvl 13": 1210,"As lvl 14": 1191,"As lvl 15": 1173,"As lvl 16": 1155,"As lvl 17": 1138,
        "Crit Chance" : 0,
        "Crit Damage" : 1.75,
        HandDamage(ad,as,ch,cd){
            let HDmg = setTimeout ( function Handdmg(){
                HDmg = setTimeout (Handdmg,as);
                let chance = (Math.random()).toFixed(2);

                if (BaronHpCurrent <= 0) { 
                    clearTimeout(HDmg);
                    console.log("всё")
                    return ;} 

                if (chance < ch) {
                    DamageTest = (ad * ( 1 + cd)).toFixed(0) * 0.5;
                    BaronHpCurrent -= DamageTest;
                    console.log(`Зиггс нанес ${DamageTest} крит урона`)
                    return BaronHpCurrent;}

                else {DamageTest = ad* 0.5;
                BaronHpCurrent -= DamageTest ;
                console.log(`Зиггс нанес ${DamageTest} урона`)};
                return BaronHpCurrent;;
            },Math.random() * (500 - 100 + 1)+ 100) 
        },
    },
}


/* Ahri
"Q damage" : function(ap, lvl){
            let QDamage = setTimeout ( function QDamage(){
                QDamage = setTimeout (QDamage,7000);
                Damage = 40 * lvl + (ap * 0.35);
                return Damage;
            },200)
        },
HandDamage(ad,as,ch,cd){
            let HDmg = setTimeout ( function Handdmg(){
                HDmg = setTimeout (Handdmg,as);
                let chance = (Math.random() * (1 - 0 ) + 1).toFixed(2);
                
                if (chance < ch) {
                    Damage = ad * ( 1 + cd);
                    return Damage;}
                else Damage = ad
                return Damage;
            },50)
        }
        */