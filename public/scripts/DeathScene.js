
class DeathScene extends Phaser.Scene {
  constructor() {
    super("Death");
  }
  
  prelaod() {}
  
  create() {
    this.deathStrokeThickness = 50;
    this.deathFontSize = 40;
    let camera = this.cameras.main;
    // Transition fade effect
    camera.fade(1000);
    camera.fadeIn(1000);
    camera.flash(1000);

    // create title text

    // this.logo=this.add.image()
    this.deathText = this.add
      .text(this.scale.width / 2, this.scale.height / 2, "YOU DIED", {
        fontFamily: "titleFont",
        fill: "#ff0000",
      })
      .setFontSize(this.deathFontSize);
    this.deathText.setOrigin(0.5);

    this.tweens.add({
      targets: this.deathText,
      alpha: {
        start: 1,
        from: 1,
        to: 0,
        delay: 2000,
        duration: 2000,
        ease: "Linear",
      },
      completeDelay: 4000, //it will only fire after animation is completed AND after this number of seconds
      onComplete: () => {
        //This is a callback function that will only fire after the animation is completed
        this.scene.sleep("Ui");
        this.scene.start("Title");
      },
    });

    this.startText = this.add
    .text(250, this.scale.height / 2 + 200, "Press E to restart", {
      fontFamily: "titleFont",
      fontSize: "30px",
      fill: "#ffffff",
    })
    .setAlpha(0);
  this.tweens.add({
    targets: this.startText,
    alpha: { value: 1, duration: 1100, ease: "Linear" },
    yoyo: true,
    loop: -1,
  });
  
    // time to end and return to Title
    // this.dialogsTimer = this.time.addEvent({
    //   delay: 5000,
    //   callback: () => {
    //     // this.scene.remove("Death");
    //     this.scene.start("Title");
    //   },
    // });

    // Title frozen if Pressing directly to title, and too soon
    this.input.keyboard.on("keydown-" + "E", () => {
      this.scene.sleep("Ui");
      this.scene.start("Title");
    });
  }

  update() {
    console.log("Deathhh");
    if (this.deathFontSize < 120) {
      this.deathText.setFontSize(this.deathFontSize++);
    }
  }
}
