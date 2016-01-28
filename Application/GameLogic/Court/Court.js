function Court()
{
}

Court.create = function(id, scene, parentId)
{
    var graphics = new CourtGraphicsComponent(id, scene, parentId);
    var physics = null;
    return new GameObject(graphics, physics);
};
