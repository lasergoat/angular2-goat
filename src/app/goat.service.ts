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
		id: 11,
	},
	{
		name: 'creepy',
		image: 'creepy.png',
		id: 12,
	},
	{
		name: 'cute_2',
		image: 'cute_2.png',
		id: 13,
	},
	{
		name: 'cute',
		image: 'cute.png',
		id: 14,
	},
	{
		name: 'mountain',
		image: 'mountain.png',
		id: 15,
	},
	{
		name: 'old_2',
		image: 'old_2.png',
		id: 16,
	},
	{
		name: 'old',
		image: 'old.png',
		id: 17,
	},
	{
		name: 'peppy',
		image: 'peppy.png',
		id: 18,
	},
	{
		name: 'wise',
		image: 'wise.png',
		id: 19,
	},
];
