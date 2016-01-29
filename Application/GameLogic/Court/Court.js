function Court()
{
}

Court.create = function(id, scene, options)
{
    return new GameObject(
        {
            graphics: new CourtGraphicsComponent(id, scene, options)
        }
    );
};
