function Keyboard()
{
    this.initialize();
}

Keyboard.prototype.initialize = function()
{
    // Initialize an array of keys to false:
    this.keys = [];
    this.keys.length = 256;
    for(var i = 0; i < this.keys.length; i++)
        this.keys[i] = false;

    // Initialize a set of observers:
    this.observers = new Set();

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

Keyboard.prototype.onKeyDown = function(keyIndex)
{
    // If key is not being already pressed:
    if(!this.isKeyDown(keyIndex))
    {
        // Set key value to true:
        this.keys[keyIndex] = true;

        // Notify that a key, which wasn't being pressed, is pressed now:
        this.notifyKeyDown(keyIndex);
    }

    // If key was already pressed:
    else
    {
        // Notify that key is continuously being pressed:
        this.notifyKeyPress(keyIndex);
    }
};
Keyboard.prototype.onKeyUp = function(keyIndex)
{
    // Set key value to false:
    this.keys[keyIndex] = false;

    // Notify that a key was released:
    this.notifyKeyUp(keyIndex);
};

Keyboard.prototype.isKeyDown = function(keyIndex)
{
    return this.keys[keyIndex];
};

Keyboard.prototype.addObserver = function(observer)
{
    this.observers.add(observer);
};
Keyboard.prototype.removeObserver = function(observer)
{
    this.observers.remove(observer);
};

// This event occurs once when a user presses a key:
Keyboard.prototype.notifyKeyDown = function(keyIndex)
{
    for(var i = 0; i < this.observers.size(); i++)
        this.observers.get(i).onKeyDown(keyIndex);
};

// This event can occur multiple times when a user holds down the same key:
Keyboard.prototype.notifyKeyPress = function(keyIndex)
{
    for(var i = 0; i < this.observers.size(); i++)
        this.observers.get(i).onKeyPress(keyIndex);
};

// This event occurs once when a user releases a key:
Keyboard.prototype.notifyKeyUp = function(keyIndex)
{
    for(var i = 0; i < this.observers.size(); i++)
        this.observers.get(i).onKeyUp(keyIndex);
};