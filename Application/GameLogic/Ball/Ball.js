function Ball()
{
}

Ball.create = function(scene)
{
    var graphics = new BallGraphicsComponent(scene);
    var physics = null;
    return new GameObject(graphics, physics);
};