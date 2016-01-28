function Graphics()
{
    this.initialize();
}

Graphics.prototype.initialize = function()
{
    // Initialize renderer:
    this.initializeRenderer();
};

Graphics.prototype.render = function(scene, camera)
{
    this.renderer.render(scene, camera);
};

Graphics.prototype.resizeRenderer = function(width, height)
{
    this.renderer.setSize(width, height);
};

Graphics.prototype.initializeRenderer = function()
{
    // Create renderer:
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.autoClearDepth = false;
    this.renderer.autoClearColor = false;
    this.renderer.sortObjects = false;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    // Set size of renderer element:
    this.resizeRenderer(window.innerWidth, window.innerHeight);

    // Add renderer to HTML:
    document.body.appendChild(this.renderer.domElement);
};