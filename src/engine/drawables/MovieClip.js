class MovieClip extends Phaser.Sprite {
	constructor(game, { id, animations = [] }) {
		super(game, 0, 0, id);

		animations.forEach(({ name, from, to, key = id, fps = 30, loop = true }) => {
			this.animations.add(name, Phaser.Animation.generateFrameNames(key, from, to, '.png', 4), fps, loop);
		});

		this.game.stage.addChild(this);
	}
}

export default MovieClip;
