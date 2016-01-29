function GameManager(scene)
{
    this.initialized = new Utils.Event();

    if(scene)
        this.initialize(scene);
}

GameManager.prototype.initialize = function(scene)
{
    this.loadedObjectCount = 0;
    this.scene = scene;
    this.raycaster = new Raycaster(scene);
    this.animationManager = new AnimationManager();
    this.initializeGameObjects(scene);
};

GameManager.prototype.update = function()
{
    this.gameObjects.foreach(
        function(gameObject)
        {
            gameObject.update();
        }
    );

    this.animationManager.update();
};
GameManager.prototype.processInput = function(input)
{
    var mouse = input.mouse;

    // Set raycaster origin:
    this.raycaster.setMousePosition(new THREE.Vector2(mouse.position[0], mouse.position[1]));

    // Positioning the mouse cursor:
    var court = this.gameObjects.get("Court").graphics.mesh;
    var intersections = this.raycaster.intersectObject(court, false);
    if (intersections.length > 0)
    {
        var intText = "Intersected :\n";

        for (var i = 0; i < intersections.length; i++)
        {
            intText += intersections[i].object.name + " faceIndex:" + intersections[i].faceIndex + "\n";

            if (intersections[i].object.name.indexOf(court.name) > -1 && (intersections[i].faceIndex === 14 || intersections[i].faceIndex === 15 || intersections[i].faceIndex === 13))
            {
                var position = this.gameObjects.get("MousePointer").graphics.mesh.position;
                position.set(intersections[i].point.x, intersections[i].point.y + 0.01, intersections[i].point.z);
                break;
            }
        }
    }
};
GameManager.prototype.onMouseInput = function(buttonCode, holdTime)
{
    var mousePointer = this.gameObjects.get("MousePointer");
    if(ColliderManager.checkCollision(mousePointer, this.gameObjects.get("HitCircle0")))
    {
        // TODO
        console.log("Hit 0!");
    }
    else if(ColliderManager.checkCollision(mousePointer, this.gameObjects.get("HitCircle1")))
    {
        console.log("Hit 1!");
    }
    else if(ColliderManager.checkCollision(mousePointer, this.gameObjects.get("HitCircle2")))
    {
        console.log("Hit 2!");
    }
    else if(ColliderManager.checkCollision(mousePointer, this.gameObjects.get("HitCircle3")))
    {
        console.log("Hit 3!");
    }

    // Else if intersection with the floor
    //      Move player
};

GameManager.prototype.initializeGameObjects = function(scene)
{
    this.gameObjects = new Utils.Map();

    this.gameObjects.set("Court", Court.create("Court", scene, { subscriber: this, handler: this.onGameObjectLoaded }));
};
GameManager.prototype.initializeHitCircles = function(scene)
{
    this.gameObjects.set("Player", Player.create("Player", scene, { subscriber: this, handler: this.onGameObjectLoaded }));
    this.gameObjects.set("Racket", Racket.create("Racket", scene, { subscriber: this, handler: this.onGameObjectLoaded }));
    this.gameObjects.set("HitCircle0", HitCircle.create("HitCircle0", scene, { position: new THREE.Vector3(-2.9, -2.28, -4.4), subscriber: this, handler: this.onGameObjectLoaded }));
    this.gameObjects.set("HitCircle1", HitCircle.create("HitCircle1", scene, { position: new THREE.Vector3(-2.9, -2.28, 2.7), subscriber: this, handler: this.onGameObjectLoaded }));
    this.gameObjects.set("HitCircle2", HitCircle.create("HitCircle2", scene, { position: new THREE.Vector3(2.9, -2.28, -4.4), subscriber: this, handler: this.onGameObjectLoaded }));
    this.gameObjects.set("HitCircle3", HitCircle.create("HitCircle3", scene, { position: new THREE.Vector3(2.9, -2.28, 2.7), subscriber: this, handler: this.onGameObjectLoaded }));
    this.gameObjects.set("MousePointer", HitCircle.create("MousePointer", scene, { position : new THREE.Vector3(0.0, 0.0, 0.0), subscriber: this, handler: this.onGameObjectLoaded }));
};
GameManager.prototype.onGameObjectLoaded = function(sender, handler)
{
    if(sender === this.gameObjects.get("Court").graphics)
        this.initializeHitCircles(this.scene);

    if(++this.loadedObjectCount === this.gameObjects.size())
        this.initialized.raise(this, null);
};