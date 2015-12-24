Utils.Event = function()
{
    this.initialize();
};
Utils.Event.EventPair = function(subscriber, handler)
{
    this.subscriber = subscriber;
    this.handler = handler;
};

Utils.Event.prototype.initialize = function()
{
    this.subscribers = new Utils.Set();
};

Utils.Event.prototype.subscribe = function(subscriber, handler)
{
    this.subscribers.add(new Utils.Event.EventPair(subscriber, handler));
};
Utils.Event.prototype.unsubscribe = function(subscriber, handler)
{
    this.subscribers.remove(new Utils.Event.EventPair(subscriber, handler));
};

Utils.Event.prototype.raise = function(sender, eventArguments)
{
    for(var i = 0; i < this.subscribers.size(); i++)
    {
        var pair = this.subscribers.get(i);
        var delegate = Utils.createDelegate(pair.subscriber, pair.handler);
        delegate(sender, eventArguments);
    }
};