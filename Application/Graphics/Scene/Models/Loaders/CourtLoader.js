function CourtLoader()
{
}

CourtLoader.prototype.load = function(onLoad)
{
    var courtLoader = this;
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
                        courtLoader.mesh = child;

                        console.log("colladaModel:");
                        console.log(child);

                        onLoad();
                    }
                }
            );
        }
    );
};