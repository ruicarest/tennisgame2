function RacketLoader()
{
}

RacketLoader.load = function(scene)
{
    var loader = new THREE.ObjectLoader();
    loader.load(
        './squash/player/scene1.json',
        function(geometry)
        {
            var racket = geometry.children[0];
            racket.geometry.center();
            racket.geometry.scale(0.01, 0.01, 0.01);

            scene.add(racket);
        }
    );
};