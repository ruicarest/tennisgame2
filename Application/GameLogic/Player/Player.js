function Player()
{
}

Player.create = function(id, scene, parentId)
{
    var graphics = new PlayerGraphicsComponent(id, scene, parentId);
    var physics = null;
    return new GameObject(graphics, physics);
};
