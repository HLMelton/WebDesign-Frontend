var container;
var camera, scene, renderer;
var plane;

var mouse,raycaster,isShiftDown = false;

var cubeGeometry = new THREE.BoxGeometry (50,50,50);
var cubeMaterial = new THREE.MeshLambertMaterial({cololr:0x00ff80,overdraw:0.5});

var objects = [];

init();
render();

function init(){

  container = document.createElement('div');
  document.body.appendChild(container);


//-----Place the Camera and face it towards the proper object-----
  camera = new THREE.PerspectiveCamera(40,window.innerWidth / window.innerHeight,1,10000);
  camera.position.set(500,800,15);
  //This was the original orientation of the camera
  //camera.lookAt(new THREE.Vector3());
  camera.lookAt(0,0,0);

//Set the scene background color
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

//Establish the grid
var gridhelper = new THREE.GridHelper(1000,20);
scene.add(gridhelper);

raycaster = new THREE.Raycaster();
mouse = new THREE.Vector2();

var geometry = new THREE.PlaneBufferGeometry(1000,1000);
geometry.rotateX(-Math.PI/2);

plane = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({visable:false}));

scene.add(plane);
objects.push(plane);
var material = new THREE.MeshBasicMaterial({color:0xff0000,wireframe:true});

//Its about to get Lit(as in I'm adding Lights, duh)
var ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0x808080);

//We need a x,y and z because it is 3d space
directionalLight.position.x = Math.random() -0.5;
directionalLight.position.y = Math.random() -0.5;
directionalLight.position.z = Math.random() -0.5;
directionalLight.position.normalize();
scene.add(directionalLight);

renderer = new THREE.CanvasRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
container.appendChild(renderer.domElement);
}

function render() {
  renderer.render(scene,camera);
}
