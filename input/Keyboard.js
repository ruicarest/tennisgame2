function Keyboard()
{
    this.initialize();
}
Keyboard.KeyboardEventArgs = function(keyCode)
{
    this.keyCode = keyCode;
};

Keyboard.prototype.initialize = function()
{
    // Initialize an array of keys to false:
    this.keys = [];
    this.keys.length = 256;
    for(var i = 0; i < this.keys.length; i++)
        this.keys[i] = false;

    // Create event objects:
    this.keyDownEvent = new Utils.Event();
    this.keyPressEvent = new Utils.Event();
    this.keyUpEvent = new Utils.Event();

    // Subscribe to the window keyboard related events:
    var keyboard = this;
    window.onkeydown = function(event)
    {
        keyboard.onKeyDown(event.keyCode);
    };
    window.onkeyup = function(event)
    {
        keyboard.onKeyUp(event.keyCode);
    };
};

Keyboard.prototype.onKeyDown = function(keyCode)
{
    // If key is not being already pressed:
    if(!this.isKeyDown(keyCode))
    {
        // Set key value to true:
        this.keys[keyCode] = true;

        // Notify that a key, which wasn't being pressed, is pressed now:
        this.keyDownEvent.raise(this, new Keyboard.KeyboardEventArgs(keyCode));
    }

    // If key was already pressed:
    else
    {
        // Notify that key is continuously being pressed:
        this.keyPressEvent.raise(this, new Keyboard.KeyboardEventArgs(keyCode));
    }
};
Keyboard.prototype.onKeyUp = function(keyCode)
{
    // Set key value to false:
    this.keys[keyCode] = false;

    // Notify that a key was released:
    this.keyUpEvent.raise(this, new Keyboard.KeyboardEventArgs(keyCode));
};

Keyboard.prototype.isKeyDown = function(keyCode)
{
    return this.keys[keyCode];
};