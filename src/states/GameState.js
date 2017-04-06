import Star from 'objects/Star'
import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {
	create() {
		const text = new RainbowText(this.game, "- phaser -\nwith a sprinkle of\nES6 dust!");
		text.anchor.set(0.5);

		new Star(this.game)
	}

	preload() {
		this.load.image('star', 'assets/star.png');
	}
}

export default GameState;
