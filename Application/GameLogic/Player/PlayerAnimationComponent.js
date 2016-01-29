function PlayerAnimationComponent(graphics)
{
    this.initialize(graphics);
}

PlayerAnimationComponent.animationSegments =
    [
        {   // 0
            name: "idle",
            t0: 0.0,
            tn: 2.4
        },
        {   // 1
            name: "other",
            t0: 2.4,
            tn: 5
        },
        {   // 2
            name: "walk_front",
            t0: 6.17,
            tn: 12.2
        },
        {   // 3
            name: "right_to_left_opened",
            t0: 14.3,
            tn: 17.2
        },
        {   // 4
            name: "right_to_left_from_top",
            t0: 18.5,
            tn: 20
        },

        {   // 5
            name: "left_to_right_from_bottom",
            t0: 20.5,
            tn: 22.5
        },
        {   // 6
            name: "walk_back",
            t0: 24.0,
            tn: 29.6
        },
        {   // 7
            name: "low_right_to_left",
            t0: 30.5,
            tn: 32.5
        },
        {   // 8
            name: "serve_high_right_to_left",
            t0: 32.5,
            tn: 35.0
        },
        {   // 9
            name: "low_left_to_right",
            t0: 35.0,
            tn: 37.0
        },
        {   // 10
            name : "test",
            t0: 0.1,
            tn: 2.4,
        }
];

PlayerAnimationComponent.prototype.initialize = function(graphics)
{
    this.graphics = graphics;
    this.currentAnimation = 0;
};

PlayerAnimationComponent.prototype.play = function()
{
    this.graphics.animation.play();
};
PlayerAnimationComponent.prototype.stop = function()
{
    this.graphics.animation.stop();
};

PlayerAnimationComponent.prototype.update = function()
{
    var startTime = PlayerAnimationComponent.animationSegments[this.currentAnimation].t0;
    var endTime = PlayerAnimationComponent.animationSegments[this.currentAnimation].tn;

    var animation = this.graphics.animation;
    if (animation.currentTime <= startTime || animation.currentTime > endTime)
    {
        /*if (animation.currentTime > endTime)
        {
            this.currentAnimation = 0;
            animation.currentTime = 0;
            startTime = PlayerAnimationComponent.animationSegments[this.currentAnimation].t0;
        }*/

        animation.stop();
        animation.play(startTime); // play the animation not looped, from t0
    }
};