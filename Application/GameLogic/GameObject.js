function GameObject(components)
{
    this.initialize(components);
}

GameObject.prototype.initialize = function(components)
{
    this.animation = !components.animation ? null : components.animation;
    this.collider = !components.collider ? null : components.collider;
    this.graphics = !components.graphics ? null : components.graphics;
    this.physics = !components.physics ? null : components.physics;
};

GameObject.prototype.update = function()
{
    if(this.physics)
        this.physics.update();

    if(this.animation)
        this.animation.update();

    if(this.graphics)
        this.graphics.update();
};