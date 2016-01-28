function HitCircleGraphicsComponent(id, scene, options)
{
    this.initialize(id, scene, options);
}

HitCircleGraphicsComponent.prototype.initialize = function(id, scene, options)
{
    this.loaded = false;

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

    if(options)
    {
        if(options.position)
            this.mesh.position.set(options.position.x, options.position.y, options.position.z);

        if(options.onLoad)
            options.onLoad(scene);
    }

    this.loaded = true;
};

HitCircleGraphicsComponent.prototype.update = function()
{
};