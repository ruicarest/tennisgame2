function GameObject(components)
{
    this.initialize(components);
}

GameObject.prototype.initialize = function(components)
{
    this.graphics = !components.graphics ? null : components.graphics;
    this.physics = !components.physics ? null : components.physics;
    this.collider = !components.collider ? null : components.collider;
};

GameObject.prototype.update = function()
{
    if(this.physics)
        this.physics.update();

    if(this.graphics)
        this.graphics.update();
};