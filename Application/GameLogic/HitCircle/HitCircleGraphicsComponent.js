function HitCircleGraphicsComponent(id, scene, options)
{
    this.initialize(id, scene, options);
}

HitCircleGraphicsComponent.prototype.initialize = function(id, scene, options)
{
    this.loaded = new Utils.Event();
    if(options && options.subscriber && options.handler)
        this.loaded.subscribe(options.subscriber, options.handler);

    var material = new THREE.MeshBasicMaterial({
        color: 0x880000,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5
    });

    var radius = 0.2;
    var segments = 32;
    var circleGeometry = new THREE.CircleGeometry(radius, segments);

    this.mesh = new THREE.Mesh(circleGeometry, material);
    this.mesh.name = id;
    this.mesh.rotation.x = Math.PI / 2;
    scene.add(id, this.mesh, options ? options.parentId : null);

    if(options && options.position)
        this.mesh.position.set(options.position.x, options.position.y, options.position.z);

    this.loaded.raise(this, null);
};

HitCircleGraphicsComponent.prototype.update = function()
{
};