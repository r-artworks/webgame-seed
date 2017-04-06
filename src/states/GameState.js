import Star from 'objects/Star';
import Halu from 'objects/Halu';
import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {
	create() {
		const text = new RainbowText(this.game, "- phaser -\nwith a sprinkle of\nES6 dust!");
		text.anchor.set(0.5);

		new Star(this.game);
		new Halu(this.game);
	}

	preload() {
		this.load.image('star', 'assets/star.png');
		this.load.atlas('halu', 'assets/demo.png', 'assets/demo.json');
	}
}

export default GameState;
