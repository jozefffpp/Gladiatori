'use strict';

let playerGladiator = document.querySelector('.playerGladiator');
let enemyGladiator = document.querySelector('.enemyGladiator');

let forward = document.querySelector('.forward');
let reverse = document.querySelector('.reverse');

let weakAttack = document.querySelector('.weakAttack');
let mediumAttack = document.querySelector('.mediumAttack');
let strongAttack = document.querySelector('.strongAttack');

let playerLives = document.querySelector('.playerLives');
let enemyLives = document.querySelector('.enemyLives');

let info = document.querySelector('.info');

let wkAttck = document.querySelector('.wkAttck');
let mdmAttck = document.querySelector('.mdmAttck');
let strngAttck = document.querySelector('.strngAttck');

let enemyHealthBar = document.querySelector('.enemyHealthBar');
let playerHealthBar = document.querySelector('.playerHealthBar');
let playerPosition = playerGladiator.offsetLeft;
let enemyPosition = enemyGladiator.offsetLeft;

let playerHealth = random(30, 40);
let enemyHealth = random(30, 40);

let damage = 0;

	enemyHealthBar.max = enemyHealth;
	playerHealthBar.max = playerHealth;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function playerMoveRight(){
	 playerPosition = playerPosition + 10;
     playerGladiator.style.left = playerPosition + 'px';
}

function playerMoveLeft(){
	playerPosition = playerPosition - 10;
    playerGladiator.style.left = playerPosition + 'px';
}

function enemyMoveLeft(){
	enemyPosition = enemyPosition - 10;
	enemyGladiator.style.left = enemyPosition + 'px';
}

function alive(health){
	if(health == enemyHealth && health < 1){
		info.textContent = "You Won!";
		enemyGladiator.style.display = "none";
	}
	else if( health == playerHealth && health < 1 ){
		info.textContent = "You Lost!";
		playerGladiator.style.display = "none";
	}
	else{return;}
}

function enemyLive(){
	enemyLives.textContent = enemyHealth;
	enemyHealthBar.value = enemyHealth;
}

function playerLive(){
	playerLives.textContent = playerHealth;
	playerHealthBar.value = playerHealth;
}

function attackWeakPlayer(){
	damage = random(1,10);
	if(damage <= 8){
		damage = random(2,6);
		enemyHealth = enemyHealth - damage;
		alive(enemyHealth);
		enemyLive();
		playerLive();

		playerAttackAdd();
		setTimeout(playerAttackRemove, 500);

		attacksDisplayNone();

		if(enemyHealth > 0){
			setTimeout(attacksDisplayBlock, 1000);
			hitAdd();
			setTimeout(hitRemove, 500);
		}
	}
	else{
		playerAttackAdd();
		setTimeout(playerAttackRemove, 500);

		attacksDisplayNone();
		setTimeout(attacksDisplayBlock, 1000);

		playerMissAdd();
		setTimeout(playerMissRemove, 1000);
	}
}

function attackMediumPlayer(){
	damage = random(1,10);
	if(damage <= 6){
		damage = random(7,10);
		enemyHealth = enemyHealth - damage;
		alive(enemyHealth);
		enemyLive();
		playerLive();

		playerAttackAdd();
		setTimeout(playerAttackRemove, 500);

		attacksDisplayNone();

		if(enemyHealth > 0){
			setTimeout(attacksDisplayBlock, 1000);
			hitAdd();
			setTimeout(hitRemove, 500);
		}
	}
	else{
		playerAttackAdd();
		setTimeout(playerAttackRemove, 500);

		attacksDisplayNone();
		setTimeout(attacksDisplayBlock, 1000);

		playerMissAdd();
		setTimeout(playerMissRemove, 1000);
	}
}

function attackStrongPlayer(){
	damage = random(1,10);
	if(damage <= 4){
		damage = random(11,13);
		enemyHealth = enemyHealth - damage;
		alive(enemyHealth);
		enemyLive();
		playerLive();

		playerAttackAdd();
		setTimeout(playerAttackRemove, 500);

		attacksDisplayNone();

		if(enemyHealth > 0){
			setTimeout(attacksDisplayBlock, 1000);
			hitAdd();
			setTimeout(hitRemove, 500);
		}
	}
	else{
		playerAttackAdd();
		setTimeout(playerAttackRemove, 500);

		attacksDisplayNone();
		setTimeout(attacksDisplayBlock, 1000);

		playerMissAdd();
		setTimeout(playerMissRemove, 1000);
	}
}

function attackWeakEnemy(){
	damage = random(1,10);
	if(damage <= 8){
		damage = random(2,6);
		playerHealth = playerHealth - damage;
		alive(playerHealth);
		enemyLive();
		playerLive();

		enemyAttackAdd();
		setTimeout(enemyAttackRemove, 500);

		hitPlayerAdd();
		setTimeout(hitPlayerRemove, 500);
	}
	else{
		enemyAttackAdd();
		setTimeout(enemyAttackRemove, 500);

		if(enemyHealth > 0){
			enemyMissAdd();
			setTimeout(enemyMissRemove, 500);
		}
	}
}

function attackMediumEnemy(){
	damage = random(1,10);
	if(damage <= 6){
		damage = random(7,10);
		playerHealth = playerHealth - damage;
		alive(playerHealth);
		enemyLive();
		playerLive();

		enemyAttackAdd();
		setTimeout(enemyAttackRemove, 500);

		hitPlayerAdd();
		setTimeout(hitPlayerRemove, 500);
	}
	else{
		enemyAttackAdd();
		setTimeout(enemyAttackRemove, 500);

		if(enemyHealth > 0){
			enemyMissAdd();
			setTimeout(enemyMissRemove, 500);
		}
	}
}

function attackStrongEnemy(){
	damage = random(1,10);
	if(damage <= 3){
		damage = random(11,13);
		playerHealth = playerHealth - damage;
		alive(playerHealth);
		enemyLive();
		playerLive();

		enemyAttackAdd();
		setTimeout(enemyAttackRemove, 500);

		hitPlayerAdd();
		setTimeout(hitPlayerRemove, 500);
	}
	else{
		enemyAttackAdd();
		setTimeout(enemyAttackRemove, 500);

		if(enemyHealth > 0){
			enemyMissAdd();
			setTimeout(enemyMissRemove, 500);
		}
	}
}

function randomEnemyAttack(){
	damage = random(1,3);

	if(damage == 1){
		attackWeakEnemy();
	}
	else if(damage == 2){
		attackMediumEnemy();
	}
	else{
		attackStrongEnemy();
	}
}

function playerAttackAdd(){
	playerGladiator.classList.add('playerAttack');
}

function playerAttackRemove(){
	playerGladiator.classList.remove('playerAttack');
}

function enemyAttackAdd(){
	enemyGladiator.classList.add('enemyAttack');
}

function enemyAttackRemove(){
	enemyGladiator.classList.remove('enemyAttack');
}

function attacksDisplayNone(){
	weakAttack.style.display = 'none';
	mediumAttack.style.display = 'none';
	strongAttack.style.display = 'none';
}

function attacksDisplayBlock(){
	weakAttack.style.display = 'block';
	mediumAttack.style.display = 'block';
	strongAttack.style.display = 'block';
}

function hitAdd(){
	enemyGladiator.classList.add('hit');
}

function hitRemove(){
	enemyGladiator.classList.remove('hit');
}

function hitPlayerAdd(){
	playerGladiator.classList.add('hit');
}

function hitPlayerRemove(){
	playerGladiator.classList.remove('hit');
}

function playerMissAdd(){
	enemyGladiator.classList.add('playerMiss');
}

function playerMissRemove(){
	enemyGladiator.classList.remove('playerMiss');
}

function enemyMissAdd(){
	playerGladiator.classList.add('enemyMiss');
}

function enemyMissRemove(){
	playerGladiator.classList.remove('enemyMiss');
}

function forwardDisplayNone() {
	forward.style.display = 'none';
}

function reverseDisplayNone(){
	reverse.style.display = 'none';
}

function forwardDisplayBlock() {
	forward.style.display = 'Block';
}

function reverseDisplayBlock(){
	reverse.style.display = 'Block';
}

enemyLive();
playerLive();

forward.addEventListener('click', function(){
	if(playerPosition + 160 < enemyPosition){
		playerMoveRight();
		setTimeout(enemyMoveLeft, 500);
		forwardDisplayNone();
		reverseDisplayNone();
		setTimeout(reverseDisplayBlock, 1000);
	}
	if(playerPosition + 180 < enemyPosition){
			setTimeout(forwardDisplayBlock, 1000);
	}
	else{
		setTimeout(attacksDisplayBlock, 1000);
	}
});

reverse.addEventListener('click', function(){
		if(playerPosition > 10){
			playerMoveLeft();
			setTimeout(enemyMoveLeft, 500);
			reverseDisplayNone();
			forwardDisplayNone();
			attacksDisplayNone();
		}
		if(playerPosition > 10){
			setTimeout(reverseDisplayBlock, 1000);
		}
		if(playerPosition + 180 < enemyPosition){
			setTimeout(forwardDisplayBlock, 1000);
		}
		else{
			setTimeout(attacksDisplayBlock, 1000);
		}
});

weakAttack.addEventListener('click', function(){
	attackWeakPlayer();
	if(enemyHealth > 0){
		setTimeout(randomEnemyAttack, 500);
	}
	reverseDisplayNone();
	if(playerPosition > 2 && enemyHealth > 0){
		setTimeout(reverseDisplayBlock, 1000);
	}
});

mediumAttack.addEventListener('click', function(){
	attackMediumPlayer();
	reverseDisplayNone();
	if(enemyHealth > 0){
		setTimeout(randomEnemyAttack, 500);
	}
	if(playerPosition > 2 && enemyHealth > 0){
		setTimeout(reverseDisplayBlock, 1000);
	}
});

strongAttack.addEventListener('click', function(){
	attackStrongPlayer();
	reverseDisplayNone();
	if(enemyHealth > 0){
		setTimeout(randomEnemyAttack, 500);
	}
	if(playerPosition > 2 && enemyHealth > 0){
		setTimeout(reverseDisplayBlock, 1000);
	}
});

weakAttack.addEventListener('mouseenter', function(){
	wkAttck.style.display = 'block';
});

mediumAttack.addEventListener('mouseenter', function(){
	mdmAttck.style.display = 'block';
});

strongAttack.addEventListener('mouseenter', function(){
	strngAttck.style.display = 'block';
});

weakAttack.addEventListener('mouseleave', function(){
	wkAttck.style.display = 'none';
});

mediumAttack.addEventListener('mouseleave', function(){
	mdmAttck.style.display = 'none';
});

strongAttack.addEventListener('mouseleave', function(){
	strngAttck.style.display = 'none';
});