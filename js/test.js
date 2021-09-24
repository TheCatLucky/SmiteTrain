const ZZigs = {
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
