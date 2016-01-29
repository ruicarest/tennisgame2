function PlayerGraphicsComponent(id, scene, options)
{
    this.initialize(id, scene, options);
}

PlayerGraphicsComponent.prototype.initialize = function(id, scene, options)
{
    this.loaded = new Utils.Event();
    if(options && options.subscriber && options.handler)
        this.loaded.subscribe(options.subscriber, options.handler);

    var component = this;
    this.load(
        function()
        {
            component.animation = new THREE.Animation(component.mesh, component.mesh.geometry.animation);

            component.mesh.scale.set(0.01, 0.01, 0.01);
            component.mesh.translate(2.30, new THREE.Vector3(0, -1, 0));
            component.mesh.add(new THREE.AmbientLight(0x555555));
            component.mesh.rotateY(THREE.Math.degToRad(90));
            scene.add(id, component.mesh, options ? options.parentId : null);

            if(options && options.position)
                component.mesh.position.set(options.position.x, options.position.y, options.position.z);

            component.loaded.raise(component, null);
        }
    );

    //animation.play();
    //camera.lookAt(child.position);

    /*helper = new THREE.BoundingBoxHelper(player, 0xff0000);
     helper.update();
     helper.rotation.y = Math.PI / 2;
     helper.position.set(0, -elevationCourt / 2, 0);

     deltaX = Math.floor(Math.sin(player.rotation.y) * 1000);
     deltaZ = Math.floor(Math.cos(player.rotation.y) * 1000);
     focusX = player.position.x - deltaX;
     focusZ = player.position.z - deltaZ;
     directionalLight.position.set(
     directionalLight.position.x + player.position.x * 2,
     directionalLight.position.y + player.position.y * 2,
     directionalLight.position.z + player.position.z * 2
     );*/

    // TODO move to another place:
    // $("#loading").hide();
    //document.getElementById("loading").style.display = "none";
};

PlayerGraphicsComponent.prototype.update = function()
{
};

PlayerGraphicsComponent.prototype.load = function(onLoad)
{
    this.onLoad = onLoad;

    var component = this;
    var loader = new THREE.ColladaLoader();
    loader.load(
        "./squash/player/wip2.dae",
        function(collada)
        {
            component.traverse(collada);
            component.traverse2(collada);

            component.onLoad();
        }
    );
};
PlayerGraphicsComponent.prototype.traverse = function(collada)
{
    var component = this;
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

                    if (component.handBoneRight)
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

                    if (component.handBoneRight === undefined)
                        component.handBoneRight = child;
                    else
                        component.handBoneLeft = child;
                }
            }
        }
    );
};
PlayerGraphicsComponent.prototype.traverse2 = function(collada)
{
    var component = this;
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

                component.mesh = child;
            }
        }
    );
};