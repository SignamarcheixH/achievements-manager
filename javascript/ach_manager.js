let events = [];
let achievements_r = [];


/*#################################
####### F U N C T I O N S #########
##################################*/

function findEventBySlug(slug) { return events.filter(event => event['type'] == slug)[0]; }

function findAchievementByTrigger(trigger) { return achievements_r.filter(ach => ach['triggerName'] == trigger)[0]}

function isCompleted(achievement) { return achievement.isCompleted }

function unlockAchievement(achievement) {
	let modal = document.getElementsByClassName('achievement-container')[0];
	let newAchievement = createHTMLModal(achievement.achievementName, achievement.achievementDescription);
	modal.appendChild(newAchievement);
	achievement.isCompleted = true;
	updateAchievementCollection(achievement);
	newAchievement.classList.add('is-open');
	setTimeout(() => { newAchievement.classList.remove('is-open') }, 3000);
	setTimeout(() => { newAchievement.remove(); }, 3300);
}

function updateAchievementCollection(achievement) {
	let oldAch = findAchievementByTrigger(achievement['triggerName']);
	let index = achievements_r.indexOf(oldAch);
	achievements_r[index] = achievement;
}

function createHTMLModal(title, description) {
	let h2 = document.createElement("h2");
	let titleText = document.createTextNode(title);
	h2.className = "title";
	h2.appendChild(titleText);
	let div = document.createElement("div");
	let desc = document.createTextNode(description);
	div.className = "desc"
	div.appendChild(desc);
	let img = document.createElement("img")
	let infos = document.createElement("div");
	infos.appendChild(h2);
	infos.appendChild(div)
	infos.className = "infos";
	let container = document.createElement("div")
	container.appendChild(img)
	container.appendChild(infos);
	container.className = "achievement-modal"
	return container;
}

document.addEventListener('DOMContentLoaded',() => {

/*#################################
### I N I T I A L I S A T I O N ###
##################################*/

  	for(let single of achievements) {
  		let event = new Event(single.triggerName)
  		single.isCompleted = false;
  		achievements_r.push(single);
  		events.push(event)
  		document.addEventListener(event['type'],() => {
  			if(!isCompleted(findAchievementByTrigger(event['type']))) {
  				unlockAchievement(findAchievementByTrigger(event['type']));
  			}
  		}, false)
  	}


/*#################################
####### T R I G G E R S ###########
##################################*/

/*------ ACHIEVEMENT_1 -------*/
  	document.getElementById('1').addEventListener('click', (event) => {
  		document.dispatchEvent(findEventBySlug('ACHIEVEMENT_1'));
  	})

/*------ ACHIEVEMENT_2 -------*/
  	document.getElementById('2').addEventListener('click', () => {
  		document.dispatchEvent(findEventBySlug('ACHIEVEMENT_2'));
  	})

/*------ ACHIEVEMENT_3 -------*/
  	let click = 0;
  	let buttons = document.getElementsByClassName('button')
  	for(let i of buttons) {
  		i.addEventListener('click', () => {
	  		click += 1
	  		console.log(click);
	  		if(click == 10) { document.dispatchEvent(findEventBySlug('ACHIEVEMENT_3'))}
  		})
  	}
});
