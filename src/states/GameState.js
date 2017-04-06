import Star from 'objects/Star';
import Player from 'objects/Player';
import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {
	create() {
		const text = new RainbowText(this.game, "- phaser -\nwith a sprinkle of\nES6 dust!");
		text.anchor.set(0.5);

		new Star(this.game);
		new Player(this.game);
	}

	preload() {
		this.load.image('star', 'assets/star.png');
		this.load.atlas('sprites', 'assets/sprites.png', 'assets/sprites.json');
	}
}

export default GameState;
