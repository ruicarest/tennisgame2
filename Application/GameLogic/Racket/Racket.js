function Racket()
{
}

Racket.create = function(id, scene, options)
{
    return new GameObject(
        {
            graphics: new RacketGraphicsComponent(id, scene, options)
        }
    );
};