function Raycaster(scene)
{
    this.initialize(scene);
}

Raycaster.prototype.initialize = function(scene)
{
    this.raycaster = new THREE.Raycaster();
    this.scene = scene;
};

Raycaster.prototype.setMousePosition = function(coordinates)
{
    this.raycaster.setFromCamera(coordinates, this.scene);
};

Raycaster.prototype.intersectObject = function(object, recursive)
{
    return this.raycaster.intersectObject(object, recursive);
};