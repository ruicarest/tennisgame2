function Player()
{
}

Player.create = function(scene)
{
    var graphics = new PlayerGraphicsComponent(scene);
    var physics = null;
    return new GameObject(graphics, physics);
};
