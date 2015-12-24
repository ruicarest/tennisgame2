function Input()
{
    this.initialize();
}

Input.prototype.initialize = function()
{
    // Create keyboard and subscribe to events:
    this.keyboard = new Keyboard();
    this.keyboard.keyDownEvent.subscribe(this.Keyboard_onKeyDown);
    this.keyboard.keyUpEvent.subscribe(this.Keyboard_onKeyUp);

    // Create mouse and subscribe to events:
    this.mouse = new Mouse();
    this.mouse.buttonDownEvent.subscribe(this.Mouse_onButtonDown);
    this.mouse.buttonUpEvent.subscribe(this.Mouse_onButtonUp);
};

Input.prototype.Keyboard_onKeyDown = function(sender, eventArgs)
{
    console.log("Key Down: " + eventArgs.keyCode);
};
Input.prototype.Keyboard_onKeyUp = function(sender, eventArgs)
{
    console.log("Key Up: " + eventArgs.keyCode);
};

Input.prototype.Mouse_onButtonDown = function(sender, eventArgs)
{
    console.log("Button Down: " + eventArgs.buttonIndex);
};
Input.prototype.Mouse_onButtonUp = function(sender, eventArgs)
{
    console.log("Button Up: " + eventArgs.buttonIndex);
};