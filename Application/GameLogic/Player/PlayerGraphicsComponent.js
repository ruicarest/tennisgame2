function PlayerGraphicsComponent()
{
}

PlayerGraphicsComponent.prototype.initialize = function(scene)
{
    this.loaded = false;

    var component = this;

    var loader = new PlayerLoader();
    loader.load(
        function()
        {
            component.skinnedMesh = loader.skinnedMesh;
            component.animation = new THREE.Animation(component.skinnedMesh, component.skinnedMesh.geometry.animation);
            component.handBoneRight = loader.handBoneRight;
            component.handBoneLeft = loader.handBoneLeft;


            component.skinnedMesh.position = new THREE.Vector3(0.0, 0.0, 0.0);
            component.skinnedMesh.scale.set(0.01, 0.01, 0.01);
            component.skinnedMesh.updateMatrix();
            component.skinnedMesh.updateMatrixWorld(true);

            scene.add(component.skinnedMesh);

            component.loaded = true;
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