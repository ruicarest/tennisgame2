function Scene()
{
    this.initialize();
}

Scene.prototype.initialize = function()
{
    this.loaded = false;

    // Create THREE scene:
    this.scene = new THREE.Scene();

    this.meshes = {};

    // Initialize cameras:
    this.initializeCameras();

    // Initialize lights:
    this.initializeLights();
};

Scene.prototype.render = function(graphics)
{
    graphics.render(this.scene, this.mainCamera);
};

Scene.prototype.add = function(id, object, parentId)
{
    this.meshes[id] = object;

    if(!parentId)
        this.scene.add(object);
    else
        this.meshes[parentId].add(object);
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
    this.mainCamera.position.y = 1.5;
    this.mainCamera.position.z = 5.5;
    this.mainCamera.rotateX(THREE.Math.degToRad(-35));
};
Scene.prototype.initializeLights = function ()
{
    // Setup a directional light:
    this.directionalLight = new THREE.DirectionalLight(0xffeedd);
    this.directionalLight.position.set(-400, 300, 90);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
};