function Racket()
{
}

Racket.create = function(id, scene, parentId)
{
    var graphics = new RacketGraphicsComponent(id, scene, parentId);
    var physics = null;
    return new GameObject(graphics, physics);
};