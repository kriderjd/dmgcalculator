document.getElementById("btnAttack").addEventListener("click", MarilithAttack);

function Attack() {
    var intToHit = Math.floor(Math.random() * 20) + 1;
    var intDmg = (Math.floor(Math.random() * 6) + 1) + 3;
    var toHit = "Hit Value: " + intToHit;
    var dmg = "Damage: " + intDmg + " hp";
    document.getElementById("hitChance").textContent = toHit;
    document.getElementById("damage").textContent = dmg;
}

function MarilithAttack() {
    const hrElements = document.querySelectorAll("hr");
    hrElements.forEach(function(hr){
        hr.style.visibility = "visible";
    });
    var attackType = "";
    var attackRoll = 0;
    var intToHit = 0;
    var intDmg = 0;
    var toHit = "";
    var dmg = "";
    var crit = 1;
    for (i = 0; i < 7; i++) {
        var hitID = "hitChance" + i;
        var dmgID = "damage" + i;
        if(i <= 1) {
            attackType = "Pact Blade";
            attackRoll = (Math.floor(Math.random() * 20) + 1);
            if (attackRoll === 20){
                crit = 2;
                document.getElementById(hitID).style.color = "#802BB1";
            }else {
                document.getElementById(hitID).style.color = "#d1d7e0";    
            }
            intToHit =  attackRoll + 13;
            intDmg = ((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1))*crit + 10;
            toHit = attackType + " - Hit Value: " + intToHit;
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = toHit;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
        }else if(i > 1 && i <= 5){
            var attackType = "Long Sword"
            attackRoll = (Math.floor(Math.random() * 20) + 1);
            if (attackRoll === 20){
                crit = 2;
                document.getElementById(hitID).style.color = "#802BB1";
            }else {
                document.getElementById(hitID).style.color = "#d1d7e0";    
            }
            intToHit =  attackRoll + 9;
            intDmg = ((Math.floor(Math.random() * 8) + 1) + (Math.floor(Math.random() * 8) + 1))*crit + 4;
            toHit = attackType + " - Hit Value: " + intToHit;
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = toHit;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;
        }else {
            var attackType = "Tail Attack"
            attackRoll = (Math.floor(Math.random() * 20) + 1);
            if (attackRoll === 20){
                crit = 2;
                document.getElementById(hitID).style.color = "#802BB1";
            }else {
                document.getElementById(hitID).style.color = "#d1d7e0";    
            }
            intToHit =  attackRoll + 9;
            intDmg = ((Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1))*crit + 4;
            toHit = attackType + " - Hit Value: " + intToHit;
            dmg = "Damage: " + intDmg + " hp";
            document.getElementById(hitID).textContent = toHit;
            document.getElementById(dmgID).textContent = dmg;
            crit = 1;

        }
    }
}

