function Mouse()
{
    this.initialize();
}

Mouse.prototype.initialize = function()
{
    // Initialize mouse position to 0 and mouse buttons to false:
    this.position = [ 0.0, 0.0 ];
    this.buttons = [ false, false, false ];
    this.wheel = 0.0;

    // Initialize a set of observers:
    this.observers = new Set();

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
        mouse.onMove(mouseEvent.x, mouseEvent.y);
    };
    window.onwheel = function(wheelEvent)
    {
        mouse.onWheel(wheelEvent.wheelDelta);
    };
};

Mouse.prototype.onMove = function(positionX, positionY)
{
    this.position[0] = positionX;
    this.position[1] = positionY;
};
Mouse.prototype.onWheel = function(deltaWheel)
{
    this.wheel += deltaWheel;
};
Mouse.prototype.onButtonDown = function(index)
{
    this.buttons[index] = true;
};
Mouse.prototype.onButtonUp = function(index)
{
    this.buttons[index] = false;
};

Mouse.prototype.isButtonDown = function(index)
{
    return this.buttons[index];
};

Mouse.prototype.addObserver = function(observer)
{
    this.observers.add(observer);
};
Mouse.prototype.removeObserver = function(observer)
{
    this.observers.remove(observer);
};

Mouse.prototype.notifyKeyDown = function(keyIndex)
{
    for(var i = 0; i < this.observers.size(); i++)
        this.observers.get(i).onKeyDown(keyIndex);
};