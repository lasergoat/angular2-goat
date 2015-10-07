import {Goat} from './goat';

export class GoatService {
	getGoats() { return Promise.resolve(GOATS); }

	getGoat(id: number) {
		return Promise.resolve(GOATS)
			.then((goats) => { return goats.filter((c) => {
				return c.id === id;
			})[0]});
	}
}

var GOATS : Goats[] = [
	{
		name: 'Billy',
		image: 'cautious.png',
		age: 28,
		id: 11,
		bio: 'Lifelong introvert. Unable to type with boxing gloves on. Unapologetic social media lover.',
		location: '',
		distance: 10,
		lastActive: 1,
	},
	{
		name: 'creepy',
		image: 'creepy.png',
		age: 31,
		id: 12,
		bio: 'Communicator. Coffee practitioner. Writer. Lifelong entrepreneur. Social media buff. Infuriatingly humble student.',
		location: '',
		distance: 10,
		lastActive: 1,
	},
	{
		name: 'cute_2',
		image: 'cute_2.png',
		age: 18,
		id: 13,
		bio: 'Evil web evangelist. Music enthusiast. Pop culture guru. Total explorer. Thinker. Student.',
		location: '',
		distance: 10,
		lastActive: 1,
	},
	{
		name: 'cute',
		image: 'cute.png',
		age: 18,
		id: 14,
		bio: 'Creator. Evil beer practitioner. Avid tv guru. Pop culture evangelist. Coffee fan.',
		location: '',
		distance: 10,
		lastActive: 1,
	},
	{
		name: 'mountain',
		image: 'mountain.png',
		age: 43,
		id: 15,
		bio: 'Writer. Thinker. Proud tv evangelist. Web junkie. Professional explorer. Amateur music scholar. Pop culture lover.',
		location: '',
		distance: 10,
		lastActive: 1,
	},
	{
		name: 'old_2',
		image: 'old_2.png',
		age: 63,
		id: 16,
		bio: 'Prone to fits of apathy. Introvert. Zombie ninja. Unapologetic troublemaker. Tv fanatic. Extreme food buff. Creator.',
		location: '',
		distance: 10,
		lastActive: 1,
	},
	{
		name: 'old',
		image: 'old.png',
		age: 59,
		id: 17,
		bio: 'Evil social media specialist. Thinker. Passionate bacon scholar. Incurable internet fanatic.',
		location: '',
		distance: 10,
		lastActive: 1,
	},
	{
		name: 'peppy',
		image: 'peppy.png',
		age: 22,
		id: 18,
		bio: 'Passionate music junkie. Proud troublemaker. Gamer. Avid pop culture geek. Evil social media practitioner. Explorer.',
		location: '',
		distance: 10,
		lastActive: 1,
	},
	{
		name: 'wise',
		image: 'wise.png',
		age: 64,
		id: 19,
		bio: 'Hipster-friendly internet junkie. Wannabe student. Twitter practitioner.',
		location: '',
		distance: 10,
		lastActive: 1,
	},
];
