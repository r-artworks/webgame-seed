class Halu extends Phaser.Sprite {
	constructor(game) {
		super(game, 0, 0, "halu");
		this.animations.add('normal', Phaser.Animation.generateFrameNames('halu_', 1, 30, '.png', 4), 30, true);
		this.game.stage.addChild(this);
		this.animations.play('normal');
	}
}

export default Halu;
