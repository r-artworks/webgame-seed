import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(500, 500, Phaser.AUTO, 'content');
		this.state.add('GameState', GameState);
		this.state.start('GameState');
	}
}

new Game();
