Utilisation :

This is an achievement manager. It allows you to create and manage achievements for your game or application. Follow these steps to set it up.

All the logic is contained in two files. The achievements.json and the ach_manager.js.
The first one is a big json containing all your achievements.
You can specify the name and the description of this achievement. There is a boolean showing track of the completion. There's also a variable for the achievement's image local path.
The most important thing is the unlockingFlagName, which is the name of the event you will fire when you'll want the achievement unlocked.

In the ach_manager.js, EventListeners are created and wait for the unlockingFlagName to be fired.
It's up to you then to set triggers who will dispatch the corresponding flag.

To create a trigger easily, add the data-ach-slug attribute on the element you want to target, or specify directly the slugName itself for a more complex unlocking behavior.

In your html files, a achievement-container is needed. It can be directly injected via javascript thought.