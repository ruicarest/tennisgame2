function CourtModel()
{
}

CourtModel.prototype.initialize = function(scene)
{
    var model = this;

    this.loaded = false;

    var loader = new CourtLoader();
    loader.load(
        function()
        {
            model.mesh = loader.mesh;
            model.mesh.rotateOnAxis(new THREE.Vector3(0.0, 1.0, 0.0), THREE.Math.degToRad(359.5));
            model.mesh.rotateOnAxis(new THREE.Vector3(0.0, 1.0, 0.0), THREE.Math.degToRad(90));
            model.mesh.scale.set(0.01, 0.01, 0.01);
            model.mesh.updateMatrix();
            model.mesh.updateMatrixWorld(true);

            scene.add(model.mesh);

            model.loaded = true;
        }
    );
};