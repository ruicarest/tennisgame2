function PlayerLoader()
{
}

PlayerLoader.prototype.load = function(onLoad)
{
    this.onLoad = onLoad;

    var playerLoader = this;
    var loader = new THREE.ColladaLoader();
    loader.load(
        "./squash/player/wip2.dae",
        function(collada)
        {
            playerLoader.traverse(collada);
            playerLoader.traverse2(collada);
        }
    );
};

PlayerLoader.prototype.traverse = function(collada)
{
    var playerLoader = this;
    collada.scene.traverse(
        function(child)
        {
            var geometry;
            var material;

            if (child.name.indexOf("racket") !== -1)
            {
                geometry = new THREE.SphereGeometry(10, 32, 32);
                material = new THREE.MeshBasicMaterial({
                    color: 0x0000ff
                });

                var sphere = new THREE.Mesh(geometry, material);
                child.add(sphere);
            }

            if (child instanceof THREE.Bone)
            {
                if (child.name.indexOf("joint18") !== -1)
                {
                    geometry = new THREE.BoxGeometry(10, 10, 10);

                    if (playerLoader.handBoneRight)
                    {
                        material = new THREE.MeshBasicMaterial({
                            color: 0x00ff00
                        });
                    }

                    // Blue right hand:
                    else
                    {
                        material = new THREE.MeshBasicMaterial({
                            color: 0x0000ff
                        });
                    }

                    var cube = new THREE.Mesh(geometry, material);
                    child.add(cube);

                    if (playerLoader.handBoneRight === undefined)
                        playerLoader.handBoneRight = child;
                    else
                        playerLoader.handBoneLeft = child;
                }
            }
        }
    );
};
PlayerLoader.prototype.traverse2 = function(collada)
{
    var playerLoader = this;
    collada.scene.traverse(
        function(child)
        {
            if (child instanceof THREE.Mesh)
            {
                child.geometry.computeFaceNormals();
                child.geometry.computeVertexNormals();
            }

            if (child instanceof THREE.SkinnedMesh)
            {
                for (var i = 0; i < child.material.materials.length; i++)
                {
                    var m = child.material.materials[i];
                    m.skinning = true;

                    if (child.material.materials[i].name.indexOf("lambert3_001") !== -1)
                    {
                        m.transparent = true;
                        m.opacity = 0.0;
                        m.skinning = false;
                        m.castShadow = true;
                        m.visible=false;
                    }

                    m.shading = THREE.SmoothShading;
                }

                child.material.skinning = true;
                child.material.shading = THREE.SmoothShading;

                child.scale.x = child.scale.y = child.scale.z = 1;
                child.rotation.y = Math.PI / 2;
                child.updateMatrix();

                child.castShadow = true;
                child.name = "player1";

                playerLoader.skinnedMesh = child;

                playerLoader.onLoad();
            }
        }
    );
};