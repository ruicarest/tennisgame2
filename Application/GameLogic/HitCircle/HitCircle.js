function HitCircle()
{
}

HitCircle.create = function(id, scene, options)
{
    return new GameObject(
        {
            graphics: new HitCircleGraphicsComponent(id, scene, options),
            collider: new HitCircleColliderComponent()
        }
    );
};