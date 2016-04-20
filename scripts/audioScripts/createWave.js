/**
 * Created by Alba on 20/04/2016.
 */

var wavesurfer;

function handleAudioFile( files ){
    createAudioWave( files[0] );
}

function createAudioWave( file ){
    destroyAudioWave(); //Para evitar dobles cargas

    //Crear Wave
    wavesurfer = Object.create(WaveSurfer);
    wavesurfer.init({ //Inicializar parámetros de objeto
        container: '#waveform',
        waveColor: 'midnightblue',
        interact: false,
        cursorColor: 'white'
        //scrollParent: true
    });
    wavesurfer.loadBlob( file ); //Cargar objeto de tipo "File" o "Blob"

    //Crear TimeLine
    wavesurfer.on('ready', function(){
        //Timeline
        var timeline = Object.create(WaveSurfer.Timeline);
        timeline.init({ //Inicializar parámetros de objeto
            wavesurfer: wavesurfer,
            container: '#waveform-timeline'
        });

        //Region
        // Add a region
        wavesurfer.addRegion({
            start: 0, // time in seconds
            end: 30, // time in seconds --- AQUI PONER LA DURACION DEL RECORRIDO DE LA CAMARA, CONTROLAR SI ES MAYOR
            color: 'hsla(200, 100%, 30%, 0.1)',
            resize: false
        });
    });
}

function destroyAudioWave() {
    if (typeof wavesurfer !== 'undefined') { // Si ya está creada, se elimina
        wavesurfer.destroy();
    }
}

