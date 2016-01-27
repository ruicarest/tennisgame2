function Graphics()
{
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

    // Set size of renderer element:
    this.resizeRenderer(window.innerWidth, window.innerHeight);

    // Add renderer to HTML:
    document.body.appendChild(this.renderer.domElement);
};