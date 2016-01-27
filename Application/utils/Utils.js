function Utils()
{
}

Utils.createDelegate = function (object, method)
{
    return function()
    {
        return method.apply(object, arguments);
    };
};