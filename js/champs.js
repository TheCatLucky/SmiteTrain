
window.champions = 
{  
  Ahri : {
    "name" : "Ahri",
    "Ad lvl 1" : 53,"Ad lvl 2" : 55.16,"Ad lvl 3" : 57.42,"Ad lvl 4" : 59.80,"Ad lvl 5" : 62.27,"Ad lvl 6" : 64.85,"Ad lvl 7" : 67.53,"Ad lvl 8" : 70.33,"Ad lvl 9" : 73.22,"Ad lvl 10" : 76.22,"Ad lvl 11" : 79.33,"Ad lvl 12" : 82.53,"Ad lvl 13" : 85.85,"Ad lvl 14" : 89.27,"Ad lvl 15" : 92.80,"Ad lvl 16" : 96.43,"Ad lvl 17" : 100.16,"Ad lvl 18" : 104.00,
    "Ap" : 0,
    "Base As" : 0.668,
    "As lvl 1": 0.668,"As lvl 2": 0.678,"As lvl 3": 0.688,"As lvl 4": 0.698,"As lvl 5": 0.709,"As lvl 6": 0.721,"As lvl 7": 0.733,"As lvl 8": 0.745,"As lvl 9": 0.758,"As lvl 10": 0.771,"As lvl 11": 0.785,"As lvl 12": 0.800,"As lvl 13": 0.814,"As lvl 14": 0.830,"As lvl 15": 0.845,"As lvl 16": 0.861,"As lvl 17": 0.878,"As lvl 18": 0.895,
    "As Ratio": 0.668,
    "Crit Chance" : 0,
    "Crit Damage" : 1.75,
    "Lethality" : 0,
    "Ad penetration" : 0,
    "Has BotrK" : 0,
    HandDamage(ad, as, ch, cd, lt, pen, lvl){
      as = 1000 / as;
      let botrk = 0;
      let HDmg = setTimeout ( function Handdmg(){
        HDmg = setTimeout (Handdmg,as);
        if (champions.Ziggs["Has BotrK"]){
          if( 0.06 * BaronHpCurrent > 60){
            botrk = 60;
          }
          else {
            botrk = 0.06 * BaronHpCurrent;
          };
        }
        let chance = (Math.random()).toFixed(2);
        if (BaronHpCurrent <= 0) { 
          clearTimeout(HDmg);
          console.log("всё")
          return ;
        } 
        if (chance < ch) {
          DamageTest = (((ad + botrk) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18))))) * cd);
          BaronHpCurrent -= DamageTest.toFixed(0) ;
          logZone.append( `<p>Ари нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;
        }
        else {
          DamageTest = ((ad + botrk) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18)))));
          BaronHpCurrent -= DamageTest.toFixed(0) ;
          logZone.append(`<p>Ари нанесла ${DamageTest.toFixed(0)} урона</p>`);
          return BaronHpCurrent
        };
      },Math.random() * (1000)) 
    }, 
  },
  Diana : {
    "name" : "Diana",
    "Ad lvl 1" : 57,"Ad lvl 2" : 59.16,"Ad lvl 3" : 61.42,"Ad lvl 4" : 63.80,"Ad lvl 5" : 66.27,"Ad lvl 6" : 68.85,"Ad lvl 7" : 71.53,"Ad lvl 8" : 74.33,"Ad lvl 9" : 77.22,"Ad lvl 10" : 80.22,"Ad lvl 11" : 83.33,"Ad lvl 12" : 86.53,"Ad lvl 13" : 89.85,"Ad lvl 14" : 93.27,"Ad lvl 15" : 96.80,"Ad lvl 16" : 100.43,"Ad lvl 17" : 104.16,"Ad lvl 18" : 108.00,
    "Ap" : 0,
    "Base As" : 0.625,
    "As lvl 1": 0.625,"As lvl 2": 0.635,"As lvl 3": 0.646,"As lvl 4": 0.657,"As lvl 5": 0.668,"As lvl 6": 0.680,"As lvl 7": 0.693,"As lvl 8": 0.706,"As lvl 9": 0.720,"As lvl 10": 0.734,"As lvl 11": 0.748,"As lvl 12": 0.763,"As lvl 13": 0.779,"As lvl 14": 0.795,"As lvl 15": 0.811,"As lvl 16": 0.828,"As lvl 17": 0.846,"As lvl 18": 0.864,
    "As Ratio" : 0.625,
    "Crit Chance" : 0,
    "Crit Damage" : 1.75,
    "Lethality" : 0,
    "Ad penetration" : 0,
    "Has BotrK" : 0,
    HandDamage(ad, as, ch, cd, lt, pen, lvl){
      as = 1000 / as;
      let botrk = 0;
      let HDmg = setTimeout ( function Handdmg(){
        HDmg = setTimeout (Handdmg,as);
        if (champions.Ziggs["Has BotrK"]){
          if( 0.06 * BaronHpCurrent > 60){
            botrk = 60;
          }
          else {
            botrk = 0.06 * BaronHpCurrent;
          };
        }
        let chance = (Math.random()).toFixed(2);
        if (BaronHpCurrent <= 0) { 
          clearTimeout(HDmg);
          console.log("всё")
          return ;} 
        if (chance < ch) {
          DamageTest = (((ad + botrk) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18))))) * cd);
          BaronHpCurrent -= DamageTest.toFixed(0) ;
          logZone.append(`<p>Диана нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ((ad + botrk) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18)))));
        BaronHpCurrent -= DamageTest.toFixed(0) ;
        logZone.append(`<p>Диана нанесла ${DamageTest.toFixed(0)} урона</p>`);
        return BaronHpCurrent};
      },Math.random() * (1000)) 
    },
  },
  Caitlyn : {
    "name" : "Caitlyn",
    "Ad lvl 1" : 62,"Ad lvl 2" : 64.74,"Ad lvl 3" : 67.61,"Ad lvl 4" : 70.61,"Ad lvl 5" : 73.74,"Ad lvl 6" : 77.01,"Ad lvl 7" : 80.41,"Ad lvl 8" : 83.94,"Ad lvl 9" : 87.61,"Ad lvl 10" : 91.41,"Ad lvl 11" : 95.34,"Ad lvl 12" : 99.41,"Ad lvl 13" : 103.61,"Ad lvl 14" : 107.94,"Ad lvl 15" : 112.41,"Ad lvl 16" : 117.00,"Ad lvl 17" : 121.74,"Ad lvl 18" : 126.60,
    "Ap" : 0,
    "Base As": 0.681,
    "As lvl 1": 0.681,"As lvl 2": 0.697,"As lvl 3": 0.715,"As lvl 4": 0.732,"As lvl 5": 0.751,"As lvl 6": 0.771,"As lvl 7": 0.791,"As lvl 8": 0.812,"As lvl 9": 0.834,"As lvl 10": 0.857,"As lvl 11": 0.880,"As lvl 12": 0.905,"As lvl 13": 0.930,"As lvl 14": 0.956,"As lvl 15": 0.982,"As lvl 16": 1.010,"As lvl 17": 1.038,"As lvl 18": 1.067,
    "As Ratio" : 0.568,
    "Crit Chance" : 0,
    "Crit Damage" : 1.75,
    "Lethality" : 0,
    "Ad penetration" : 0,
    "Has BotrK" : 0,
    HandDamage(ad, as, ch, cd, lt, pen, lvl){
      as = 1000 / as;
      let botrk = 0;
      let HDmg = setTimeout ( function Handdmg(){
        HDmg = setTimeout (Handdmg,as);
        if (champions.Ziggs["Has BotrK"]){
          if( 0.06 * BaronHpCurrent > 60){
            botrk = 60;
          }
          else {
            botrk = 0.06 * BaronHpCurrent;
          };
        }
        let chance = (Math.random()).toFixed(2);
        if (BaronHpCurrent <= 0) { 
          clearTimeout(HDmg);
          console.log("всё")
          return ;} 
        if (chance < ch) {
          DamageTest = (((ad + botrk) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18))))) * cd);
          BaronHpCurrent -= DamageTest.toFixed(0) ;
          logZone.append( `<p>Кейтлин нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ((ad + botrk) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18)))));
        BaronHpCurrent -= DamageTest.toFixed(0) ;
        logZone.append( `<p>Кейтлин нанесла ${DamageTest.toFixed(0)}  урона</p>`);
        return BaronHpCurrent;}
      },Math.random() * (1000)) 
    },
  },
  Cassiopeia : {
    "name" : "Cassiopeia",
    "Ad lvl 1" : 53,"Ad lvl 2" : 55.16,"Ad lvl 3" : 57.42,"Ad lvl 4" : 59.80,"Ad lvl 5" : 62.27,"Ad lvl 6" : 64.85,"Ad lvl 7" : 67.53,"Ad lvl 8" : 70.33,"Ad lvl 9" : 73.22,"Ad lvl 10" : 76.22,"Ad lvl 11" : 79.33,"Ad lvl 12" : 82.53,"Ad lvl 13" : 85.85,"Ad lvl 14" : 89.27,"Ad lvl 15" : 92.80,"Ad lvl 16" : 96.43,"Ad lvl 17" : 100.16,"Ad lvl 18" : 104.00,
    "Ap" : 0,
    "Base As": 0.647,
    "As lvl 1": 0.647,"As lvl 2": 0.654,"As lvl 3": 0.661,"As lvl 4": 0.669,"As lvl 5": 0.677,"As lvl 6": 0.685,"As lvl 7": 0.694,"As lvl 8": 0.703,"As lvl 9": 0.712,"As lvl 10": 0.722,"As lvl 11": 0.732,"As lvl 12": 0.743,"As lvl 13": 0.753,"As lvl 14": 0.764,"As lvl 15": 0.776,"As lvl 16": 0.787,"As lvl 17": 0.800,"As lvl 18": 0.812,
    "As Ratio" : 0.647,
    "Crit Chance" : 0,
    "Crit Damage" : 1.75,
    "Lethality" : 0,
    "Ad penetration" : 0,
    "Has BotrK" : 0,
    HandDamage(ad, as, ch, cd, lt, pen, lvl){
      as = 1000 / as;
      let botrk = 0;
      let HDmg = setTimeout ( function Handdmg(){
        HDmg = setTimeout (Handdmg,as);
        if (champions.Ziggs["Has BotrK"]){
          if( 0.06 * BaronHpCurrent > 60){
            botrk = 60;
          }
          else {
            botrk = 0.06 * BaronHpCurrent;
          };
        }
        let chance = (Math.random()).toFixed(2);
        if (BaronHpCurrent <= 0) { 
          clearTimeout(HDmg);
          console.log("всё")
          return ;} 
        if (chance < ch) {
          DamageTest = (((ad + botrk) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18))))) * cd);
          BaronHpCurrent -= DamageTest.toFixed(0) ;
          logZone.append(`<p>Кассиопея нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ((ad + botrk ) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18)))));
        BaronHpCurrent -= DamageTest.toFixed(0) ;
        logZone.append(`<p>Кассиопея нанесла ${DamageTest.toFixed(0)}  урона</p>`);
        return BaronHpCurrent;}
      },Math.random() * (1000)) 
    },
  },
  TwistedFate : {
    "name" : "TwistedFate",
    "Ad lvl 1" : 52,"Ad lvl 2" : 54.38,"Ad lvl 3" : 56.87,"Ad lvl 4" : 59.47,"Ad lvl 5" : 62.20,"Ad lvl 6" : 65.03,"Ad lvl 7" : 67.99,"Ad lvl 8" : 71.06,"Ad lvl 9" : 74.24,"Ad lvl 10" : 77.54,"Ad lvl 11" : 80.96,"Ad lvl 12" : 84.49,"Ad lvl 13" : 88.13,"Ad lvl 14" : 91.90,"Ad lvl 15" : 95.77,"Ad lvl 16" : 99.77,"Ad lvl 17" : 103.88,"Ad lvl 18" : 108.10,
    "Ap" : 0,
    "Base As": 0.651,
    "As lvl 1": 0.651,"As lvl 2": 0.666,"As lvl 3": 0.682,"As lvl 4": 0.698,"As lvl 5": 0.716,"As lvl 6": 0.734,"As lvl 7": 0.753,"As lvl 8": 0.772,"As lvl 9": 0.792,"As lvl 10": 0.813,"As lvl 11": 0.835,"As lvl 12": 0.857,"As lvl 13": 0.881,"As lvl 14": 0.904,"As lvl 15": 0.929,"As lvl 16": 0.954,"As lvl 17": 0.981,"As lvl 18": 1.007,
    "As Ratio": 0.651,
    "Crit Chance" : 0,
    "Crit Damage" : 1.75,
    "Lethality" : 0,
    "Ad penetration" : 0,
    "Has BotrK" : 0,
    HandDamage(ad, as, ch, cd, lt, pen, lvl){
      as = 1000 / as;
      let botrk = 0;
      let HDmg = setTimeout ( function Handdmg(){
        HDmg = setTimeout (Handdmg,as);
        if (champions.Ziggs["Has BotrK"]){
          if( 0.06 * BaronHpCurrent > 60){
            botrk = 60;
          }
          else {
            botrk = 0.06 * BaronHpCurrent;
          };
        }
        let chance = (Math.random()).toFixed(2);
        if (BaronHpCurrent <= 0) { 
          clearTimeout(HDmg);
          console.log("всё")
          return ;} 
        if (chance < ch) {
          DamageTest = (((ad + botrk ) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18))))) * cd);
          BaronHpCurrent -= DamageTest.toFixed(0) ;
          logZone.append(`<p>Твистед Фейт нанесла ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ((ad + botrk) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18)))));
        BaronHpCurrent -= DamageTest.toFixed(0) ;
        logZone.append(`<p>Твистед Фейт нанесла ${DamageTest.toFixed(0)}  урона</p>`);
        return BaronHpCurrent;}
      },Math.random() * (1000)) 
    },
  },
  Ziggs : {
    "name" : "Ziggs",
    "Ad lvl 1" : 54,"Ad lvl 2" : 56.23,"Ad lvl 3" : 58.57,"Ad lvl 4" : 61.02,"Ad lvl 5" : 63.58,"Ad lvl 6" : 66.25,"Ad lvl 7" : 69.02,"Ad lvl 8" : 71.90,"Ad lvl 9" : 74.89,"Ad lvl 10" : 77.99,"Ad lvl 11" : 81.20,"Ad lvl 12" : 84.52,"Ad lvl 13" : 87.95,"Ad lvl 14" : 91.48,"Ad lvl 15" : 95.12,"Ad lvl 16" : 98.87,"Ad lvl 17" : 102.73,"Ad lvl 18" : 106.70,
    "Ap" : 0,
    "Base As": 0.656,
    "As lvl 1": 0.656,"As lvl 2": 0.665,"As lvl 3": 0.675,"As lvl 4": 0.686,"As lvl 5": 0.697,"As lvl 6": 0.708,"As lvl 7": 0.720,"As lvl 8": 0.732,"As lvl 9": 0.744,"As lvl 10": 0.758,"As lvl 11": 0.771,"As lvl 12": 0.785,"As lvl 13": 0.800,"As lvl 14": 0.815,"As lvl 15": 0.830,"As lvl 16": 0.846,"As lvl 17": 0.862,"As lvl 18": 0.879,
    "As Ratio" : 0.656,
    "Crit Chance" : 0,
    "Crit Damage" : 1.75,
    "Lethality" : 0,
    "Ad penetration" : 0,
    "Has BotrK" : 0,
    HandDamage(ad, as, ch, cd, lt, pen, lvl){
      as = 1000 / as;
      let botrk = 0;
      let HDmg = setTimeout ( function Handdmg(){
        HDmg = setTimeout (Handdmg,as);
        if (champions.Ziggs["Has BotrK"]){
          if( 0.06 * BaronHpCurrent > 60){
            botrk = 60;
          }
          else {
            botrk = 0.06 * BaronHpCurrent;
          };
        }
        let chance = (Math.random()).toFixed(2);
        if (BaronHpCurrent <= 0) { 
          clearTimeout(HDmg);
          console.log("всё")
          return ;} 
        if (chance < ch) {
          DamageTest = (((ad + botrk)* (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18))))) * cd);
          BaronHpCurrent -= DamageTest.toFixed(0);
          logZone.append(`<p>Зиггс нанес ${DamageTest.toFixed(0)} крит урона</p>`);
          return BaronHpCurrent;}
        else {DamageTest = ((ad + botrk) * (100/(100 + (120 * (1 - pen)) - lt * (0.6 + 0.4 * (lvl / 18)))));
        BaronHpCurrent -= DamageTest.toFixed(0) ;
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