function Set()
{
    this.initialize();
}

Set.prototype.initialize = function ()
{
    this.objects = [];
};

Set.prototype.add = function(object)
{
    // If object is not contained in the array:
    if(!this.contains(object))
    {
        // Add it to the array:
        this.objects.push(object);

        return true;
    }

    return false;
};
Set.prototype.remove = function(object)
{
    // Search for the object:
    var index = this.objects.indexOf(object);

    // If observer is contained in the array:
    if(index !== -1)
    {
        // Remove it from the array:
        this.objects.splice(index, 1);

        return true;
    }

    return false;
};
Set.prototype.contains = function(object)
{
    return this.objects.indexOf(object) !== -1;
};
Set.prototype.get = function(index)
{
    return this.objects[index];
};
Set.prototype.size = function()
{
    return this.objects.length;
};