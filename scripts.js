var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 200;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.maxDistance = 500;
controls.minDistance = 75;
controls.rotateSpeed = .75;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-150, 0, 150);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(150, 0, 150);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(150, 0, -150).normalize();

var light = new THREE.AmbientLight( 0x404040, 1.5 ); // soft white light
scene.add( light );

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/assets/');
mtlLoader.setPath('/assets/');
mtlLoader.load('mesh-resize-paint.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/assets/');
    objLoader.load('mesh-resize-paint.obj', function (object) {

        scene.add(object);
        object.position.y -= 60;

    });
});

var mtlLoader_2 = new THREE.MTLLoader();
mtlLoader_2.setTexturePath('/assets/');
mtlLoader_2.setPath('/assets/');
mtlLoader_2.load('mat.mtl', function (materials) {

    materials.preload();

    var objLoader_2 = new THREE.OBJLoader();
    objLoader_2.setMaterials(materials);
    objLoader_2.setPath('/assets/');
    objLoader_2.load('mat.obj', function (object) {

        scene.add(object);
        object.position.y -= 55;
        object.position.z = 40;
        object.position.x -= 70;
    });
});

var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();