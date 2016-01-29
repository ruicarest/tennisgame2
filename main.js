var application;

window.onload = function initialize()
{
    // Create Application:
    application = new Application();
    application.initialized.subscribe(null, run);
    application.initialize();

    setupEvents();
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