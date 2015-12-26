function Input()
{
    this.initialize();
}
Input.KeyboardEventArgs = function(keyCode, holdTime)
{
    this.keyCode = keyCode;
    this.holdTime = holdTime;
};
Input.MouseEventArgs = function(buttonCode, holdTime)
{
    this.buttonCode = buttonCode;
    this.holdTime = holdTime;
};

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
    for(var j = 0; j < this.mouseTimestamps.length; j++)
        this.mouseTimestamps[j] = 0.0;

    // Create event objects:
    this.keyboardInputEvent = new Utils.Event();
    this.mouseInputEvent = new Utils.Event();
};

Input.prototype.Keyboard_onKeyDown = function(sender, eventArgs)
{
    // Set timestamp of the key down event:
    this.keyboardTimestamps[eventArgs.keyCode] = Date.now();
};
Input.prototype.Keyboard_onKeyUp = function(sender, eventArgs)
{
    var keyCode = eventArgs.keyCode;

    // Get timestamp of the key down event:
    var keyDownTimestamp = this.keyboardTimestamps[keyCode];

    // Calculate how much time it passed since the key down event was raised:
    var holdTime = Date.now() - keyDownTimestamp;

    // Raise keyboard input event:
    this.keyboardInputEvent.raise(this, new Input.KeyboardEventArgs(keyCode, holdTime));
};

Input.prototype.Mouse_onButtonDown = function(sender, eventArgs)
{
    // Set timestamp of the button down event:
    this.mouseTimestamps[eventArgs.buttonCode] = Date.now();
};
Input.prototype.Mouse_onButtonUp = function(sender, eventArgs)
{
    var buttonCode = eventArgs.buttonCode;

    // Get timestamp of the button down event:
    var mouseDownTimestamp = this.mouseTimestamps[buttonCode];

    // Calculate how much time it passed since the button down event was raised:
    var holdTime = Date.now() - mouseDownTimestamp;

    // Raise mouse input event:
    this.mouseInputEvent.raise(this, new Input.MouseEventArgs(buttonCode, holdTime));
};