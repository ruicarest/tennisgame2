function Player()
{
}

Player.create = function(id, scene, options)
{
    var graphics = new PlayerGraphicsComponent(id, scene, options);
    var animation = new PlayerAnimationComponent(graphics);

    return new GameObject(
        {
            graphics: graphics,
            animation: animation
        }
    );
};
