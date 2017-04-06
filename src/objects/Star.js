class Star extends Phaser.Sprite {
	constructor(game) {
		super(game, 0, 0, "star");
		this.game.stage.addChild(this);
	}
}

export default Star;
