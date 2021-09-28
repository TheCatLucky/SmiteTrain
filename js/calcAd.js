function calc(num1, num2){
    let scale = (num2 - num1) / 17;
    
    let massAD = [];
    massAD.push(`"Ad lvl 1" : ${num1}`)
    for (let lvl = 1; lvl < 17; lvl++){
        adDamage = (num1 + scale * lvl).toFixed(2);
        massAD.push(`"Ad lvl ${lvl+1}" : ${adDamage}`);
    }
    massAD.push(`"Ad lvl 18" : ${num2}`)
    let json = massAD.join();
   
    console.log(json);
   
}
