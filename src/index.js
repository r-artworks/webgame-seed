import GameState from 'states/GameState';

const getScreenWidth = () => window.innerWidth * window.devicePixelRatio;
const getScreenHeight = () => window.innerHeight * window.devicePixelRatio;

class Game extends Phaser.Game {
	constructor() {
		super(getScreenWidth(), getScreenHeight(), Phaser.AUTO, 'content');
		this.state.add('GameState', GameState);
		this.state.start('GameState');

		window.addEventListener('resize', () => {
			this.scale.setGameSize(getScreenWidth(), getScreenHeight());
		});
	}
}

new Game();
