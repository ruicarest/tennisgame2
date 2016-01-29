function HitCircleColliderComponent()
{
}

HitCircleColliderComponent.prototype.checkCollision = function(mesh1, mesh2)
{
    var distanceToRedX = Math.abs(mesh1.position.x - mesh2.position.x);
    var distanceToRedZ = Math.abs(mesh1.position.z - mesh2.position.z);

    var distanceRadius = 0.2; // TODO use geometry radius
    if (distanceToRedX < distanceRadius && distanceToRedZ < distanceRadius)
        return true;

    return false;
};