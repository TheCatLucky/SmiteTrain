
window.champions = 
{  
  Ahri : {
    "name" : "Ahri",
    "Ad lvl 1" : 53,"Ad lvl 2" : 55.16,"Ad lvl 3" : 57.42,"Ad lvl 4" : 59.80,"Ad lvl 5" : 62.27,"Ad lvl 6" : 64.85,"Ad lvl 7" : 67.53,"Ad lvl 8" : 70.33,"Ad lvl 9" : 73.22,"Ad lvl 10" : 76.22,"Ad lvl 11" : 79.33,"Ad lvl 12" : 82.53,"Ad lvl 13" : 85.85,"Ad lvl 14" : 89.27,"Ad lvl 15" : 92.80,"Ad lvl 16" : 96.43,"Ad lvl 17" : 100.16,"Ad lvl 18" : 104.00,
    "Ap" : 0,
    "As lvl 1": 1497,"As lvl 2": 1476,"As lvl 3": 1454,"As lvl 4": 1432,"As lvl 5": 1410,"As lvl 6": 1387,"As lvl 7": 1365,"As lvl 8": 1342,"As lvl 9": 1319,"As lvl 10": 1296,"As lvl 11": 1274,"As lvl 12": 1251,"As lvl 13": 1228,"As lvl 14": 1206,"As lvl 15": 1183,"As lvl 16": 1161,"As lvl 17": 1139,"As lvl 18": 1117,
    "As Ratio": 0.668,
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
          DamageTest = ((ad * cd).toFixed(0))* 0.5;
          BaronHpCurrent -= DamageTest ;
          logZone.append( `<p>Ари нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ad * 0.5;
        BaronHpCurrent -= DamageTest ;
        logZone.append(`<p>Ари нанесла ${DamageTest.toFixed(0)} урона</p>`);
        return BaronHpCurrent};
      },Math.random() * (1000)) 
    }, 
  },
  Diana : {
    "name" : "Diana",
    "Ad lvl 1" : 57,"Ad lvl 2" : 59.16,"Ad lvl 3" : 61.42,"Ad lvl 4" : 63.80,"Ad lvl 5" : 66.27,"Ad lvl 6" : 68.85,"Ad lvl 7" : 71.53,"Ad lvl 8" : 74.33,"Ad lvl 9" : 77.22,"Ad lvl 10" : 80.22,"Ad lvl 11" : 83.33,"Ad lvl 12" : 86.53,"Ad lvl 13" : 89.85,"Ad lvl 14" : 93.27,"Ad lvl 15" : 96.80,"Ad lvl 16" : 100.43,"Ad lvl 17" : 104.16,"Ad lvl 18" : 108.00,
    "Ap" : 0,
    "As lvl 1": 1600,"As lvl 2": 1549,"As lvl 3": 1498,"As lvl 4": 1449,"As lvl 5": 1401,"As lvl 6": 1354,"As lvl 7": 1308,"As lvl 8": 1264,"As lvl 9": 1221,"As lvl 10": 1180,"As lvl 11": 1140,"As lvl 12": 1101,"As lvl 13": 1064,"As lvl 14": 1028,"As lvl 15": 994,"As lvl 16": 960,"As lvl 17": 928,"As lvl 18": 898,
    "As Ratio" : 0.625,
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
          DamageTest = (ad * cd).toFixed(0)* 0.5;
          BaronHpCurrent -= DamageTest ;
          logZone.append(`<p>Диана нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ad* 0.5;
        BaronHpCurrent -= DamageTest ;
        logZone.append(`<p>Диана нанесла ${DamageTest.toFixed(0)} урона</p>`);
        return BaronHpCurrent};
      },Math.random() * (1000)) 
    },
  },
  Caitlyn : {
    "name" : "Caitlyn",
    "Ad lvl 1" : 62,"Ad lvl 2" : 64.74,"Ad lvl 3" : 67.61,"Ad lvl 4" : 70.61,"Ad lvl 5" : 73.74,"Ad lvl 6" : 77.01,"Ad lvl 7" : 80.41,"Ad lvl 8" : 83.94,"Ad lvl 9" : 87.61,"Ad lvl 10" : 91.41,"Ad lvl 11" : 95.34,"Ad lvl 12" : 99.41,"Ad lvl 13" : 103.61,"Ad lvl 14" : 107.94,"Ad lvl 15" : 112.41,"Ad lvl 16" : 117.00,"Ad lvl 17" : 121.74,"Ad lvl 18" : 126.60,
    "Ap" : 0,
    "As lvl 1": 1468,"As lvl 2": 1434,"As lvl 3": 1400,"As lvl 4": 1365,"As lvl 5": 1331,"As lvl 6": 1297,"As lvl 7": 1264,"As lvl 8": 1231,"As lvl 9": 1199,"As lvl 10": 1167,"As lvl 11": 1136,"As lvl 12": 1105,"As lvl 13": 1076,"As lvl 14": 1046,"As lvl 15": 1018,"As lvl 16": 990,"As lvl 17": 963,"As lvl 18": 937,
    "As Ratio" : 0.568,
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
          DamageTest = (ad * cd).toFixed(0)* 0.5;
          BaronHpCurrent -= DamageTest ;
          logZone.append( `<p>Кейтлин нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ad* 0.5;
        BaronHpCurrent -= DamageTest ;
        logZone.append( `<p>Кейтлин нанесла ${DamageTest.toFixed(0)}  урона</p>`);
        return BaronHpCurrent;}
      },Math.random() * (1000)) 
    },
  },
  Cassiopeia : {
    "name" : "Cassiopeia",
    "Ad lvl 1" : 53,"Ad lvl 2" : 55.16,"Ad lvl 3" : 57.42,"Ad lvl 4" : 59.80,"Ad lvl 5" : 62.27,"Ad lvl 6" : 64.85,"Ad lvl 7" : 67.53,"Ad lvl 8" : 70.33,"Ad lvl 9" : 73.22,"Ad lvl 10" : 76.22,"Ad lvl 11" : 79.33,"Ad lvl 12" : 82.53,"Ad lvl 13" : 85.85,"Ad lvl 14" : 89.27,"Ad lvl 15" : 92.80,"Ad lvl 16" : 96.43,"Ad lvl 17" : 100.16,"Ad lvl 18" : 104.00,
    "Ap" : 0,
    "As lvl 1": 1546,"As lvl 2": 1529,"As lvl 3": 1512,"As lvl 4": 1495,"As lvl 5": 1477,"As lvl 6": 1459,"As lvl 7": 1441,"As lvl 8": 1422,"As lvl 9": 1404,"As lvl 10": 1385,"As lvl 11": 1366,"As lvl 12": 1347,"As lvl 13": 1328,"As lvl 14": 1308,"As lvl 15": 1289,"As lvl 16": 1270,"As lvl 17": 1251,"As lvl 18": 1232,
    "As Ratio" : 0.647,
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
          DamageTest = (ad * cd).toFixed(0) * 0.5;
          BaronHpCurrent -= DamageTest ;
          logZone.append(`<p>Кассиопея нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ad * 0.5;
        BaronHpCurrent -= DamageTest ;
        logZone.append(`<p>Кассиопея нанесла ${DamageTest.toFixed(0)}  урона</p>`);
        return BaronHpCurrent;}
      },Math.random() * (1000)) 
    },
  },
  TwistedFate : {
    "name" : "TwistedFate",
    "Ad lvl 1" : 52,"Ad lvl 2" : 54.38,"Ad lvl 3" : 56.87,"Ad lvl 4" : 59.47,"Ad lvl 5" : 62.20,"Ad lvl 6" : 65.03,"Ad lvl 7" : 67.99,"Ad lvl 8" : 71.06,"Ad lvl 9" : 74.24,"Ad lvl 10" : 77.54,"Ad lvl 11" : 80.96,"Ad lvl 12" : 84.49,"Ad lvl 13" : 88.13,"Ad lvl 14" : 91.90,"Ad lvl 15" : 95.77,"Ad lvl 16" : 99.77,"Ad lvl 17" : 103.88,"Ad lvl 18" : 108.10,
    "Ap" : 0,
    "As lvl 1": 1536,"As lvl 2": 1501,"As lvl 3": 1466,"As lvl 4": 1432,"As lvl 5": 1397,"As lvl 6": 1363,"As lvl 7": 1329,"As lvl 8": 1295,"As lvl 9": 1262,"As lvl 10": 1230,"As lvl 11": 1198,"As lvl 12": 1166,"As lvl 13": 1136,"As lvl 14": 1106,"As lvl 15": 1076,"As lvl 16": 1048,"As lvl 17": 1020,"As lvl 18": 993,
    "As Ratio": 0.651,
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
          DamageTest = (ad * cd).toFixed(0) * 0.5;
          BaronHpCurrent -= DamageTest ;
          logZone.append(`<p>Твистед Фейт нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ad * 0.5;
        BaronHpCurrent -= DamageTest ;
        logZone.append(`<p>Твистед Фейт нанесла ${DamageTest.toFixed(0)}  урона</p>`);
        return BaronHpCurrent;}
      },Math.random() * (1000)) 
    },
  },
  Ziggs : {
    "name" : "Ziggs",
    "Ad lvl 1" : 54,"Ad lvl 2" : 56.23,"Ad lvl 3" : 58.57,"Ad lvl 4" : 61.02,"Ad lvl 5" : 63.58,"Ad lvl 6" : 66.25,"Ad lvl 7" : 69.02,"Ad lvl 8" : 71.90,"Ad lvl 9" : 74.89,"Ad lvl 10" : 77.99,"Ad lvl 11" : 81.20,"Ad lvl 12" : 84.52,"Ad lvl 13" : 87.95,"Ad lvl 14" : 91.48,"Ad lvl 15" : 95.12,"Ad lvl 16" : 98.87,"Ad lvl 17" : 102.73,"Ad lvl 18" : 106.70,
    "Ap" : 0,
    "As lvl 1": 1524,"As lvl 2": 1503,"As lvl 3": 1481,"As lvl 4": 1458,"As lvl 5": 1436,"As lvl 6": 1413,"As lvl 7": 1390,"As lvl 8": 1367,"As lvl 9": 1343,"As lvl 10": 1320,"As lvl 11": 1297,"As lvl 12": 1274,"As lvl 13": 1251,"As lvl 14": 1228,"As lvl 15": 1205,"As lvl 16": 1182,"As lvl 17": 1160,"As lvl 18": 1138,
    "As Ratio" : 0.656,
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
          DamageTest = (ad * cd).toFixed(0) * 0.5;
          BaronHpCurrent -= DamageTest;
          logZone.append(`<p>Зиггс нанес ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ad* 0.5;
        BaronHpCurrent -= DamageTest ;
        logZone.append(`<p>Зиггс нанес ${DamageTest.toFixed(0)}  урона</p>`);
        return BaronHpCurrent;}
      },Math.random() * (1000)) 
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