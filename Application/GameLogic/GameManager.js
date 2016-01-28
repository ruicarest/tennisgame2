function GameManager(scene)
{
    this.initialize(scene);
}

GameManager.prototype.initialize = function(scene)
{
    this.initializeGameObjects(scene);
};

GameManager.prototype.update = function()
{
    for(var i = 0; i < this.gameObjects.size(); i++)
        this.gameObjects.get(i).update();
};

GameManager.prototype.initializeGameObjects = function(scene)
{
    this.gameObjects = new Utils.Set();

    var gameManager = this;
    var initializeHitCircles = function()
    {
        gameManager.gameObjects.add(HitCircle.create("HitCircle0", scene, { position: new THREE.Vector3(-2.9, -2.28, -4.4) }));
        gameManager.gameObjects.add(HitCircle.create("HitCircle1", scene, { position: new THREE.Vector3(-2.9, -2.28, 2.7) }));
        gameManager.gameObjects.add(HitCircle.create("HitCircle2", scene, { position: new THREE.Vector3(2.9, -2.28, -4.4) }));
        gameManager.gameObjects.add(HitCircle.create("HitCircle3", scene, { position: new THREE.Vector3(2.9, -2.28, 2.7) }));
    };

    //this.gameObjects.add("Player", Player.create(scene));
    this.gameObjects.add(Racket.create("Racket", scene));
    this.gameObjects.add(Court.create("Court", scene, { onLoad: initializeHitCircles }));
};