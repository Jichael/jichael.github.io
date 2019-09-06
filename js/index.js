let WebGLApp = null;

$(function (events, handler) {

    $('.webglbuild').on('click', '.playBtn', function () {

        let buildDiv = $(this).parent();
        let webglContainer = buildDiv.find('.webglApp');
        let closeButton = buildDiv.find('.quitBtn');
        $(this).hide();
        closeButton.show();
        LaunchWebGLApp(webglContainer);

    }).on('click', '.quitBtn', function () {

        let buildDiv = $(this).parent();
        let webglContainer = buildDiv.find('.webglApp');
        let playButton = buildDiv.find('.playBtn');
        $(this).hide();
        WebGLApp.Quit();
        WebGLApp = null;
        webglContainer.hide();
        playButton.show();

    });

});

let LaunchWebGLApp = function(webGLContainer){

    if(WebGLApp != null) {
        alert('There is already a WebGL application running.');
        return;
    }

    let appName = webGLContainer.attr('id');
    webGLContainer.css('width', '80%');
    webGLContainer.css('height', webGLContainer.width() * 9 / 16 + 'px');
    webGLContainer.show();
    WebGLApp = UnityLoader.instantiate(appName, 'WebGL/'+appName+'/Build/'+appName+'.json')
    webGLContainer.css('margin-left', '10%');
    webGLContainer.css('margin-top', '10px');
};
