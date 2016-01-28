function RacketGraphicsComponent(id, scene, options)
{
    this.initialize(id, scene, options);
}

RacketGraphicsComponent.prototype.initialize = function(id, scene, options)
{
    var component = this;
    this.loaded = false;
    this.load(
        function()
        {
            component.mesh.geometry.center();
            component.mesh.geometry.scale(0.01, 0.01, 0.01);

            scene.add(id, component.mesh, options ? options.parentId : null);

            if(options)
            {
                if(options.position)
                    component.mesh.position.set(options.position.x, options.position.y, options.position.z);

                if(options.onLoad)
                    options.onLoad(scene);
            }
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