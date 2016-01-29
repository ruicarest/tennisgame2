Utils.Map = function()
{
    this.initialize();
};

Utils.Map.prototype.initialize = function()
{
    this.keySet = new Utils.Set();
    this.objects = {};
};

Utils.Map.prototype.contains = function(key)
{
    return this.keySet.contains(key);
};

Utils.Map.prototype.get = function(key)
{
    return this.objects[key];
};
Utils.Map.prototype.set = function(key, value)
{
    this.objects[key] = value;
    this.keySet.add(key);
};

Utils.Map.prototype.keys = function()
{
    return this.keySet;
};

Utils.Map.prototype.size = function()
{
    return this.keySet.size();
};

Utils.Map.prototype.foreach = function(handler)
{
    for(var i = 0; i < this.keySet.size(); i++)
        handler(this.objects[this.keySet.get(i)]);
};