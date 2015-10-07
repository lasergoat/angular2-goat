import {Goat} from './goat';

export class GoatService {
    getGoats() { return Promise.resolve(GOATS); }

    getGoat(id: number) {
        return Promise.resolve(GOATS)
            .then((goats) => { return goats.filter((c) => {
                return c.id === id;
            })[0]});
    }

    removeGoat(index: number) {
        return Promise.resolve(GOATS)
            .then((goats) => { goats.splice(index, 1); return goats; });
    }
}

var GOATS : Goats[] = [
   {
       profileOpen: false,
       name: 'Lucky Carrot Jr.',
       image: 'cautious.png',
       liked: null,
       likesYou: false,
       age: 28,
       id: 11,
       bio: 'Lifelong introvert. Unable to type with boxing gloves on. Unapologetic social media lover.',
       location: 'Orlando',
       distance: "10 miles",
       lastActive: "5 minutes ago",
   },
   {
       profileOpen: false,
       name: 'Malfunctioning Goat',
       image: 'creepy.png',
       liked: null,
       likesYou: Math.random() >= 0.5,
       age: 31,
       id: 12,
       bio: 'Communicator. Coffee practitioner. Writer. Lifelong entrepreneur. Social media buff. Infuriatingly humble student.',
       location: 'Maitland',
       distance: "20 miles",
       lastActive: "15 minutes ago",
   },
   {
       profileOpen: false,
       name: 'Sergio\'s Yak',
       image: 'cute_2.png',
       liked: null,
       likesYou: Math.random() >= 0.5,
       age: 18,
       id: 13,
       bio: 'Evil web evangelist. Music enthusiast. Pop culture guru. Total explorer. Thinker. Student.',
       location: 'Altamonte Springs',
       distance: "25 miles",
       lastActive: "18 minutes ago",
   },
   {
       profileOpen: false,
       name: 'Willaimshire Hopperton',
       image: 'cute.png',
       liked: null,
       likesYou: Math.random() >= 0.5,
       age: 18,
       id: 14,
       bio: 'Creator. Evil beer practitioner. Avid tv guru. Pop culture evangelist. Coffee fan.',
       location: 'Longwood',
       distance: "30 miles",
       lastActive: "15 minutes ago",
   },
   {
       profileOpen: false,
       name: 'Farting Garbageman',
       image: 'mountain.png',
       liked: null,
       likesYou: Math.random() >= 0.5,
       age: 43,
       id: 15,
       bio: 'Writer. Thinker. Proud tv evangelist. Web junkie. Professional explorer. Amateur music scholar. Pop culture lover.',
       location: 'Lake Mary',
       distance: "35 miles",
       lastActive: "20 minutes ago",
   },
   {
       profileOpen: false,
       name: 'Angule Ar Sucks',
       image: 'old_2.png',
       liked: null,
       likesYou: Math.random() >= 0.5,
       age: 63,
       id: 16,
       bio: 'Prone to fits of apathy. Introvert. Zombie ninja. Unapologetic troublemaker. Tv fanatic. Extreme food buff. Creator.',
       location: 'Sanford',
       distance: "40 miles",
       lastActive: "13 minutes ago",
   },
   {
       profileOpen: false,
       name: 'Dr. Test Tickle',
       image: 'old.png',
       liked: null,
       likesYou: Math.random() >= 0.5,
       age: 59,
       id: 17,
       bio: 'Evil social media specialist. Thinker. Passionate bacon scholar. Incurable internet fanatic.',
       location: 'Orange City',
       distance: "45 miles",
       lastActive: "11 minutes ago",
   },
   {
       profileOpen: false,
       name: 'Pervy Longstockings',
       image: 'peppy.png',
       liked: null,
       likesYou: Math.random() >= 0.5,
       age: 22,
       id: 18,
       bio: 'Passionate music junkie. Proud troublemaker. Gamer. Avid pop culture geek. Evil social media practitioner. Explorer.',
       location: 'Casadaga',
       distance: "50 miles",
       lastActive: "35 minutes ago",
   },
   {
       profileOpen: false,
       name: "Dev Sadness",
       image: 'wise.png',
       liked: null,
       likesYou: Math.random() >= 0.5,
       age: 64,
       id: 19,
       bio: 'Hipster-friendly internet junkie. Wannabe student. Twitter practitioner.',
       location: 'New Smyrna Beach',
       distance: "60 miles",
       lastActive: "45 minutes ago",
   },
];