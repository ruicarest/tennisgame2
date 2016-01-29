function Application()
{
    this.initialized = new Utils.Event();
}

Application.MILLISECONDS_PER_UPDATE = 12;

Application.prototype.initialize = function()
{
    // Initialize scene:
    this.graphics = new Graphics();
    this.scene = new Scene();

    this.previousMilliseconds = new Date().getTime();
    this.lag = 0.0;

    // Input
    this.input = new Input();
    this.input.keyboardInputEvent.subscribe(this, this.onKeyboardInput);
    this.input.mouseInputEvent.subscribe(this, this.onMouseInput);

    this.gameManager = new GameManager();
    this.gameManager.initialized.subscribe(this, this.onInitialized);
    this.gameManager.initialize(this.scene);
};

Application.prototype.run = function()
{
    var currentMilliseconds = new Date().getTime();
    var elapsedMilliseconds = currentMilliseconds - this.previousMilliseconds;
    this.previousMilliseconds = currentMilliseconds;
    this.lag += elapsedMilliseconds;

    this.processInput();

    while(this.lag >= Application.MILLISECONDS_PER_UPDATE)
    {
        // Update:
        this.update();
        this.lag -= Application.MILLISECONDS_PER_UPDATE;
    }

    // Render:
    this.render();
};

Application.prototype.render = function()
{
    // Render scene:
    this.scene.render(this.graphics);
};
Application.prototype.update = function()
{
    // Update game objects:
    this.gameManager.update();
};
Application.prototype.processInput = function()
{
    this.gameManager.processInput(this.input);
};

Application.prototype.onResize = function(width, height)
{
    this.graphics.resizeRenderer(width, height);
    this.scene.onResizeRenderer(width, height);
};

Application.prototype.onKeyboardInput = function(sender, eventArgs)
{
    /*console.log("Key: " + eventArgs.keyCode + " | Hold: " + eventArgs.holdTime);

     switch ( eventArgs.keyCode ) {
     case 88:                    //x
     hittedCircle = 2;
     break;
     case 67:                    //c
     hittedCircle = 0;
     break;
     case 86:                    //v
     hittedCircle = 3;
     break;
     case 66:                    //b
     hittedCircle = 1;
     break;
     default:
     hittedCircle = -1;
     break;

     }

     if ( hittedCircle !== -1 )
     checkHitCirclesCollision();*/
};
Application.prototype.onMouseInput = function(sender, eventArgs)
{
    console.log("Mouse: " + eventArgs.buttonCode + " | Hold: " + eventArgs.holdTime);
};

Application.prototype.onInitialized = function(sender, eventArgs)
{
    this.initialized.raise(this, eventArgs);
};