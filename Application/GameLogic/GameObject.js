function GameObject()
{
}

GameObject.prototype.initialize = function(graphics, physics)
{
    this.graphics = graphics;
    this.physics = physics;
};

GameObject.prototype.update = function()
{
    if(this.physics)
        this.physics.update();

    if(this.graphics)
        this.graphics.update();
};