class Label extends Phaser.Text {
	constructor(game) {
		super(game, 0, 0, '', { font: "45px Calibri", fill: "#969696", align: "center" });

		this.game.stage.addChild(this);
	}
}

export default Label;
