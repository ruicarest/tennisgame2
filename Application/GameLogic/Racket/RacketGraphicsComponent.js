function RacketGraphicsComponent(scene)
{
    this.initialize(scene);
}

RacketGraphicsComponent.prototype.initialize = function(scene)
{
    var component = this;
    this.loaded = false;
    this.load(
        function()
        {
            component.mesh.geometry.center();
            component.mesh.geometry.scale(0.01, 0.01, 0.01);

            scene.add(component.mesh);
        }
    )
};

RacketGraphicsComponent.prototype.update = function()
{
};

RacketGraphicsComponent.prototype.load = function(onLoad)
{
    var component = this;
    var loader = new THREE.ObjectLoader();
    loader.load(
        './squash/player/scene1.json',
        function(geometry)
        {
            component.mesh = geometry.children[0];
            onLoad();
        }
    );
};