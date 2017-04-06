class Star extends Phaser.Sprite {

	constructor(game, x, y) {
		super(game, x, y, "star");
		this.game.stage.addChild(this);
	}

}

export default Star;
