var application;

window.onload = function initialize()
{
    // Create Application:
    application = new Application();

    setupEvents();

    run();
};

function run()
{
    requestAnimationFrame(run);

    application.run();
}

function setupEvents()
{
    window.onresize = function ()
    {
        application.onResize(window.innerWidth, window.innerHeight);
    };
}