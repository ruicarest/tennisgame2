function GameManager(scene)
{
    this.initialize(scene);
}

GameManager.prototype.initialize = function(scene)
{
    this.initializeGameObjects(scene);
};

GameManager.prototype.initializeGameObjects = function(scene)
{
    this.gameObjects = new Utils.Set();

    //this.gameObjects.add(Player.create(scene));
    this.gameObjects.add(Racket.create(scene));
    this.gameObjects.add(Court.create(scene));
};

GameManager.prototype.update = function()
{
    for(var i = 0; i < this.gameObjects.size(); i++)
        this.gameObjects.get(i).update();
};