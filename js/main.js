

document.addEventListener('DOMContentLoaded', loaded)
function loaded() {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.getElementById('content');
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
    console.log('done')
}
(() => {
    let modelViewer = document.querySelector('.main');
    let orbitCycle = [
        '75deg 55deg 4m',
        '-60deg 110deg 2m',
        '-180deg 90deg 2.4m',
        modelViewer.cameraOrbit
    ];
    setInterval(() => {
        let currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
        modelViewer.cameraOrbit =
            orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
    }, 4000); 
    })(); 

    window.onscroll = function () {
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        let about = document.querySelector('.about');
        let aboutTop = about.offsetTop;
        let aboutHeight = about.offsetHeight;
        if (windowScrollTop > (aboutTop + aboutHeight - windowHeight)) {
            document.querySelector('.main').classList.add('animation');
            let details = document.querySelectorAll('.informations-container .details');
            details.forEach((e)=> {
                e.classList.add('margin-bottom');
            })
        }
        else if(windowScrollTop < (aboutTop + aboutHeight - windowHeight -500)) {
            document.querySelector('.main').classList.remove('animation');
            let details = document.querySelectorAll('.informations-container .details');
            details.forEach((e)=> {
                e.classList.remove('margin-bottom');
            })
        }
    }