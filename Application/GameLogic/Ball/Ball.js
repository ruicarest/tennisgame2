function Ball()
{
}

Ball.create = function(scene)
{
    return new GameObject(
        {
            graphics: new BallGraphicsComponent(scene)
        }
    );
};