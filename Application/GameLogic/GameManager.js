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

    //this.gameObjects.add("Player", Player.create(scene));
    this.gameObjects.add(Racket.create("Racket", scene));
    this.gameObjects.add(Court.create("Court", scene, { onLoad: Utils.createDelegate(this, this.initializeHitCircles) }));
};
GameManager.prototype.initializeHitCircles = function(scene)
{
    this.gameObjects.add(HitCircle.create("HitCircle0", scene, { parentId: "Court", position: new THREE.Vector3(0.0, 0.0, 0.0) }));
    this.gameObjects.add(HitCircle.create("HitCircle1", scene, { parentId: "Court", position: new THREE.Vector3(0.0, 0.0, 0.0) }));
    this.gameObjects.add(HitCircle.create("HitCircle2", scene, { parentId: "Court", position: new THREE.Vector3(0.0, 0.0, 0.0) }));
    this.gameObjects.add(HitCircle.create("HitCircle3", scene, { parentId: "Court", position: new THREE.Vector3(0.0, 0.0, 0.0) }));
};