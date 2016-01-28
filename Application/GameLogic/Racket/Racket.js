function Racket()
{
}

Racket.create = function(scene)
{
    var graphics = new RacketGraphicsComponent(scene);
    var physics = null;
    return new GameObject(graphics, physics);
};