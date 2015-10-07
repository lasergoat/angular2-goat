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
		name: 'cautious',
		image: 'cautious.png',
		age: 28,
		id: 11,
	},
	{
		name: 'creepy',
		image: 'creepy.png',
		age: 31,
		id: 12,
	},
	{
		name: 'cute_2',
		image: 'cute_2.png',
		age: 18,
		id: 13,
	},
	{
		name: 'cute',
		image: 'cute.png',
		age: 18,
		id: 14,
	},
	{
		name: 'mountain',
		image: 'mountain.png',
		age: 43,
		id: 15,
	},
	{
		name: 'old_2',
		image: 'old_2.png',
		age: 63,
		id: 16,
	},
	{
		name: 'old',
		image: 'old.png',
		age: 59,
		id: 17,
	},
	{
		name: 'peppy',
		image: 'peppy.png',
		age: 22,
		id: 18,
	},
	{
		name: 'wise',
		image: 'wise.png',
		age: 64,
		id: 19,
	},
];
