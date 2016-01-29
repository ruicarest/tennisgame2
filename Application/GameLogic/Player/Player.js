function Player()
{
}

Player.create = function(id, scene, options)
{
    return new GameObject(
        {
            graphics: new PlayerGraphicsComponent(id, scene, options)
        }
    );
};
