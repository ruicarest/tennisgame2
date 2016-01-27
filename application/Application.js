function Application()
{
}

Application.MILLISECONDS_PER_UPDATE = 12;

Application.prototype.initialize = function()
{
    // Initialize graphics object:
    this.graphics = new Graphics();
    this.graphics.initialize();

    // Initialize scene:
    this.scene = new Scene();
    this.scene.initialize();

    this.previousMilliseconds = new Date().getTime();
    this.lag = 0.0;
};

Application.prototype.run = function()
{
    var currentMilliseconds = new Date().getTime();
    var elapsedMilliseconds = currentMilliseconds - this.previousMilliseconds;
    this.previousMilliseconds = currentMilliseconds;
    this.lag += elapsedMilliseconds;

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
    // Update scene:
    this.scene.update();
};

Application.prototype.onResize = function(width, height)
{
    this.graphics.resizeRenderer(width, height);
    this.scene.onResizeRenderer(width, height);
};