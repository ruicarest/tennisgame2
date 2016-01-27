function Scene()
{
}

Scene.prototype.initialize = function()
{
    // Create THREE scene:
    this.scene = new THREE.Scene();

    // Initialize cameras:
    this.initializeCameras();

    // Initialize lights:
    this.initializeLights();

    // Initialize scene objects:
    this.initializeSceneObjects();
};

Scene.prototype.render = function(graphics)
{
    graphics.render(this.scene, this.mainCamera);
};

Scene.prototype.update = function()
{
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
};

Scene.prototype.onResizeRenderer = function(width, height)
{
    this.mainCamera.aspect = width / height;
    this.mainCamera.updateProjectionMatrix();
};

Scene.prototype.initializeCameras = function()
{
    // Setup main camera:
    this.mainCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    //this.mainCamera.position.x = -600;
    //this.mainCamera.position.y = 460;
    this.mainCamera.position.z = 5;
};
Scene.prototype.initializeLights = function ()
{
    // Setup a directional light:
    this.directionalLight = new THREE.DirectionalLight(0xffeedd);
    this.directionalLight.position.set(-400, 300, 90);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
};
Scene.prototype.initializeSceneObjects = function()
{
    // Create a cube and add it to the scene:
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial( { color: 0x00FF00 } );
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
};