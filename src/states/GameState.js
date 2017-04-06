import Star from 'objects/Star'
import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {

	create() {
		const center = { x: this.game.world.centerX, y: this.game.world.centerY }
		const text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
		text.anchor.set(0.5);

		new Star(this.game, 0, 0)
	}

	preload() {
		this.load.image('star', 'assets/star.png');
	}

}

export default GameState;
