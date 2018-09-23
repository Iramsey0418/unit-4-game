let gameManager ={
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();


    },
    resetPlayer: function(classType){
        switch (classType) {
            case "Gimli":
                player = new Player(classType, 250,0,250,80,80);
                break;
            case "Legolas":
                player = new Player(classType, 150,0,100,200,200);
                break;
            case "Gandalf":
                player = new Player(classType, 100,200,50,200,200);
                break;
            case "Aragorn":
                player = new Player(classType, 200,0,200,100,100);
                break;
           
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML ='<img src="assets/images/PC-Avatars/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p class = "health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Attackspeed: ' + player.attackspeed + '</p></div>';



    },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getBattleField = document.querySelector(".arena");
        getHeader.innerHTML = '<p>The battle for Middle-Earth is about to begin!</p><br><p>Press Prepare for war! to ready yourself</p>';
        getActions.innerHTML = '<a href= "#" class="btn-prebattle" onclick="gameManager.setFight()">Preparing for WAR!</a>';
        getBattleField.style.visibility ="visible"; 
    }, 
    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        let enemy00 = new Enemy("Orc",100,0,50,100,100);
        let enemy01 = new Enemy("Uruk-hai",150,0,100,80,50); 
        let enemy02 = new Enemy("Smaug",300,0,300,10,10); 
        let enemy03 = new Enemy("WitchKing",250,100,150,100,100);
        let enemy04 = new Enemy("Shelob",200,100,100,200,200);
        let enemy05 = new Enemy("Gollum",100,0,100,200,200);
        let enemy06 = new Enemy("Troll",200,0,300,20,20);
        let enemy07 = new Enemy("Easterling",150,0,100,100,100);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(8));
                
        switch (chooseRandomEnemy) {
            case 0:
            enemy = enemy00 
                break;
                case 1:
            enemy = enemy01 
                break;
                case 2:
            enemy = enemy02 
                    break;
                    case 3:
            enemy = enemy03 
                    break; 
                    case 4:
            enemy = enemy04 
                    break;   
                    case 5:
            enemy = enemy05 
                     break;   
                    case 6:
            enemy = enemy06 
                    break;   
                    case 7:
            enemy = enemy07 
                    break;   
                    case 8:
            enemy = enemy08 
                    break;           
        }
        getHeader.innerHTML = '<p>Destory the forces of Sauron!</p> <br><p>Press Attack to fight!</p>';
        getActions.innerHTML ='<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="assets/images/NPC/' + enemy.classType.toLowerCase() + '.jpg" alt="' + enemy.classType + '" class="img-avatar"><div><h3>' + enemy.classType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: '  +enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Attackspeed: ' + enemy.attackspeed + '</p></div>';


    }

}