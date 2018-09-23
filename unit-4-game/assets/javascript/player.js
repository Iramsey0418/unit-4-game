let player;

function Player(classType,health,mana,strength,agility,attackspeed){
    this.classType =classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;   
    this.agility = agility;
    this.attackspeed = attackspeed;
}
let PlayerMoves = {
    calcAttack: function() {
        let getPlayerAttackSpeed = player.attackspeed;
        let getEnemyAttackSpeed = enemy.attackspeed;
        let playerAttack = function(){
            let calcBaseDmg;
        if(player.mana > 0){
            calcBaseDmg = player.strength * player.mana /1000
            
        }
        else{
            calcBaseDmg = player.strength * player.agility /1000;
        }
        let offsetDmg = Math.floor(Math.random() * Math.floor(10));
        let calcoutputDmg = calcBaseDmg + offsetDmg;
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10 / 2) + 1 );
        let attackValues = [calcoutputDmg, numberOfHits];
        return attackValues;
    }
         let enemyAttack = function(){
        let calcBaseDmg;
        if(player.mana > 0){
            calcBaseDmg = player.strength * player.mana /1000;

        }
        else{
            calcBaseDmg = player.strength * player.agility /1000;
        }
        let offsetDmg = Math.floor(Math.random() * Math.floor(10));
        let calcoutputDmg = calcBaseDmg + offsetDmg;
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10 / 2) + 1 );
        let attackValues = [calcoutputDmg, numberOfHits];
        return attackValues;

    }
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    if (getPlayerAttackSpeed >= getEnemyAttackSpeed) {
        let playerAttackValues = playerAttack();
        let totalDmg = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDmg;
        alert(" You dealt " +  playerAttackValues[0]  +  " damage "  +  playerAttackValues[1]  +  " times! " );
        if (enemy.health <=0){
            alert("Victory!! We have Victory! Let Sauron's Forces rue this Day! ");
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
            

        }
        else{
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            let enemyAttackValues = enemyAttack(); 
            let totalDmg = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDmg;
        alert(" Enemy dealt "  +  enemyAttackValues[0]  +  "  damage  "  +  enemyAttackValues[1]  +  " times! ");
        if (player.health <=0){
            alert("Defeat!! the age of man is over... The time of the Orc has come!");
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            

        } else{
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }
        }


    }
    else if (getEnemyAttackSpeed >= getPlayerAttackSpeed) {
        let enemyAttackValues = enemyAttack();
        let totalDmg = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDmg;
        alert(" Enemy dealt " +  enemyAttackValues[0]  +  " damage "  +  enemyAttackValues[1]  +  " times! " );
        if (player.health <=0){
            alert("Defeat!! the age of man is over... The time of the Orc has come! ");
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
            

        }
        else{
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            let playerAttackValues = playerAttack(); 
            let totalDmg = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDmg;
        alert(" You dealt "  +  playerAttackValues[0]  +  "  damage  "  +  playerAttackValues[1]  +  " times! ");
        if (enemy.health <=0){
            alert("Victory!! We have Victory! Let Sauron's Forces rue this Day! ");
            getEnemyHealth.innerHTML = 'Health: 0';
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            
 
        } else{
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            }
        }


}
      
      

}
}