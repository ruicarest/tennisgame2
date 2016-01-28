function CourtGraphicsComponent(scene)
{
    this.initialize(scene);
}

CourtGraphicsComponent.prototype.initialize = function(scene)
{
    var model = this;
    this.loaded = false;
    this.load(
        function()
        {
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

CourtGraphicsComponent.prototype.update = function()
{
};

CourtGraphicsComponent.prototype.load = function(onLoad)
{
    var component = this;
    var loader = new THREE.ColladaLoader();
    loader.load(
        'squash/court2.DAE',
        function(result)
        {
            var posNew;
            result.scene.traverse(
                function(child)
                {
                    // scenario positioning - NOT WORKING - UUID & ID ARE NOT STATIC
                    if (child.uuid == "D6C69FCC-C655-4A1D-B0E3-B6321524B1F4")
                    {
                        console.log("pivot");

                        posNew = child.position;
                    }

                    if (child instanceof THREE.Mesh)
                    {
                        if (child.name != "bbox")
                        {
                            var helper2 = new THREE.BoundingBoxHelper(child, 0x00ff00);
                            helper2.update();
                            helper2.rotation.y = Math.PI / 2;
                            helper2.name = "bbox";
                            helper2.position.set(0.0, 0.0, 0.0);
                        }

                        child.receiveShadow = true;
                        child.name = "court";

                        console.log("colladaModel:");
                        console.log(child);

                        component.mesh = child;

                        onLoad();
                    }
                }
            );
        }
    );
};