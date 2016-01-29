function AnimationManager()
{
    this.initialize();
}

AnimationManager.prototype.initialize = function()
{
    this.clock = new THREE.Clock();
    this.clock.start();
};

AnimationManager.prototype.update = function()
{
    THREE.AnimationHandler.update(this.clock.getDelta());
};