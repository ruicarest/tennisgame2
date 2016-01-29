var application;

window.onload = function initialize()
{
    // Create Application:
    application = new Application();
    application.initialized.subscribe(null, onInitialize);
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
function onInitialize()
{
    $("#loading").hide();
    document.getElementById("loading").style.display = "none";

    run();
}