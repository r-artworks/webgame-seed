import Label from 'engine/drawables/Label'

class RainbowText extends Label {
	constructor(game, text) {
		super(game);

		this.text = text;
		this._speed = 125; //ms
		this._colorIndex = 0;
		this._colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

		this._colorize();
		this._startTimer();

		this.game.stage.addChild(this);
	}

	update() {
		this.x = this.game.world.centerX;
		this.y = this.game.world.centerY;
	}

	_startTimer() {
		this.game.time.events.loop(this._speed, this._colorize, this).timer.start();
	}

	_colorize() {
		for (let i = 0; i < this.text.length; i++) {
			if (this._colorIndex === this._colors.length) {
				this._colorIndex = 0;
			}

			this.addColor(this._colors[this._colorIndex], i);
			this._colorIndex++;
		}
	}
}

export default RainbowText;
