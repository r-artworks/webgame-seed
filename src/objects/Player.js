import MovieClip from 'engine/drawables/MovieClip'

class Player extends MovieClip {
	constructor(game) {
		super(game, {
			id: 'sprites',
			animations: [
				{ name: 'normal', key: 'player', from: 1, to: 30 }
			]
		});

		this.animations.play('normal');
	}
}

export default Player;
