var application;

window.onload = function initialize()
{
    // Initialize Application:
    application = new Application();
    application.initialize();

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