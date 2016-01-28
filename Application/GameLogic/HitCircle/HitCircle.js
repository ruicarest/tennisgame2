function HitCircle()
{
}

HitCircle.create = function(id, scene, parentId, position)
{
    var graphics = new HitCircleGraphicsComponent(id, scene, parentId, position);
    var physics = null;
    return new GameObject(graphics, physics);
};