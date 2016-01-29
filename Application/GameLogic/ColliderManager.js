function ColliderManager()
{
}

ColliderManager.checkCollision = function(gameObject1, gameObject2)
{
    var mesh1 = gameObject1.graphics.mesh;
    var mesh2 = gameObject2.graphics.mesh;
    var collider = gameObject1.collider;

    if(collider.checkCollision(mesh1, mesh2))
        return true;

    return false;
};