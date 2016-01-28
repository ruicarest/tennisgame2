function Court()
{
}

Court.create = function(scene)
{
    var graphics = new CourtGraphicsComponent(scene);
    var physics = null;
    return new GameObject(graphics, physics);
};
