Utils.Event = function()
{
    this.initialize();
};

Utils.Event.prototype.initialize = function()
{
    this.subscribers = new Utils.Set();
};

Utils.Event.prototype.subscribe = function(subscriber, handler)
{
    this.subscribers.add(Utils.createDelegate(subscriber, handler));
};
Utils.Event.prototype.unsubscribe = function(subscriber, handler)
{
    this.subscribers.remove(Utils.createDelegate(subscriber, handler));
};

Utils.Event.prototype.raise = function(sender, eventArguments)
{
    for(var i = 0; i < this.subscribers.size(); i++)
        this.subscribers.get(i)(sender, eventArguments);
};