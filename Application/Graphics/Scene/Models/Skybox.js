function Skybox()
{
}

Skybox.prototype.initialize = function(scene)
{
    // Select shader:
    var equirectShader = THREE.ShaderLib["equirect"];

    // Create material:
    var equirectMaterial = new THREE.ShaderMaterial({
        fragmentShader: equirectShader.fragmentShader,
        vertexShader: equirectShader.vertexShader,
        uniforms: equirectShader.uniforms,
        depthWrite: false,
        side: THREE.BackSide
    });

    // Create geometry:
    var geometry = new THREE.BoxGeometry(1000, 1000, 1000);

    // Create mesh:
    this.mesh = new THREE.Mesh(geometry, equirectMaterial);

    // Add skybox to mesh:
    scene.add(this.mesh);
};