function Input()
{
    this.initialize();
}

Input.prototype.initialize = function()
{
    // Create keyboard and subscribe to events:
    this.keyboard = new Keyboard();
    this.keyboard.keyDownEvent.subscribe(this, this.Keyboard_onKeyDown);
    this.keyboard.keyUpEvent.subscribe(this, this.Keyboard_onKeyUp);

    // Create mouse and subscribe to events:
    this.mouse = new Mouse();
    this.mouse.buttonDownEvent.subscribe(this, this.Mouse_onButtonDown);
    this.mouse.buttonUpEvent.subscribe(this, this.Mouse_onButtonUp);

    // Initialize keyboard timestamps:
    this.keyboardTimestamps = [];
    this.keyboardTimestamps.length = 256;
    for(var i = 0; i < this.keyboardTimestamps.length; i++)
        this.keyboardTimestamps[i] = 0.0;

    // Initialize mouse timestamps:
    this.mouseTimestamps = [];
    this.mouseTimestamps.length = 3;
    for(var i = 0; i < this.mouseTimestamps.length; i++)
        this.mouseTimestamps[i] = 0.0;
};

Input.prototype.Keyboard_onKeyDown = function(sender, eventArgs)
{
    console.log("Key Down: " + eventArgs.keyCode);

    this.keyboardTimestamps[eventArgs.keyCode] = Date.now();
};
Input.prototype.Keyboard_onKeyUp = function(sender, eventArgs)
{
    console.log("Key Up: " + eventArgs.keyCode);

    var keyDownTimestamp = this.keyboardTimestamps[eventArgs.keyCode];
    var deltaTime = Date.now() - keyDownTimestamp;

    console.log("Key Input: " + eventArgs.keyCode + " pressed for " + deltaTime);
};

Input.prototype.Mouse_onButtonDown = function(sender, eventArgs)
{
    console.log("Button Down: " + eventArgs.buttonIndex);

    this.mouseTimestamps[eventArgs.buttonIndex] = Date.now();
};
Input.prototype.Mouse_onButtonUp = function(sender, eventArgs)
{
    console.log("Button Up: " + eventArgs.buttonIndex);

    var mouseDownTimestamp = this.mouseTimestamps[eventArgs.buttonIndex];
    var deltaTime = Date.now() - mouseDownTimestamp;

    console.log("Mouse Button Input: " + eventArgs.buttonIndex + " pressed for " + deltaTime);
};