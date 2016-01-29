function Mouse()
{
    this.initialize();
}
Mouse.MouseEvent = function(buttonCode)
{
    this.buttonCode = buttonCode;
};

Mouse.prototype.initialize = function()
{
    // Initialize mouse position to 0 and mouse buttons to false:
    this.position = [ 0.0, 0.0 ];
    this.buttons = [ false, false, false ];
    this.wheel = 0.0;

    // Create event objects:
    this.buttonDownEvent = new Utils.Event();
    this.buttonUpEvent = new Utils.Event();

    // Subscribe to the window mouse related events:
    var mouse = this;
    window.onmousedown = function(mouseEvent)
    {
        mouse.onButtonDown(mouseEvent.button);
    };
    window.onmouseup = function(mouseEvent)
    {
        mouse.onButtonUp(mouseEvent.button);
    };
    window.onmousemove = function(mouseEvent)
    {
        mouse.onMove(mouseEvent.clientX, mouseEvent.clientY);
    };
    window.onwheel = function(wheelEvent)
    {
        mouse.onWheel(wheelEvent.wheelDelta);
    };
};

Mouse.prototype.onMove = function(positionX, positionY)
{
    this.position[0] = (positionX / window.innerWidth) * 2.0 - 1.0;
    this.position[1] = -(positionY / window.innerHeight) * 2.0 + 1.0;
};
Mouse.prototype.onWheel = function(deltaWheel)
{
    this.wheel += deltaWheel;
};
Mouse.prototype.onButtonDown = function(buttonCode)
{
    // Set button's value to true:
    this.buttons[buttonCode] = true;

    // Notify that a button was pressed:
    this.buttonDownEvent.raise(this, new Mouse.MouseEvent(buttonCode));
};
Mouse.prototype.onButtonUp = function(buttonCode)
{
    // Set button's value to false:
    this.buttons[buttonCode] = false;

    // Notify that a button was released:
    this.buttonUpEvent.raise(this, new Mouse.MouseEvent(buttonCode));
};

Mouse.prototype.isButtonDown = function(buttonCode)
{
    return this.buttons[buttonCode];
};