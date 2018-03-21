
//                              -----Introduction-----
// When writing and building scenes/setting in Three.JS, you need three basic objects
// to be present, the Renderer, camera and scene. Each has a specific function though the
// scene is where most of your work will be placed




//Introduce Renderer (This will render the object into the scene.)
//                        As you can see we are using the WebGL Renderer, though there are others
//                       \/
var renderer = new THREE.WebGLRenderer({canvas: document.getElementByID('canvas'),antialias:true}
renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

//Introduce Camera (This is the perspective you will see the object from.)
//                      For this we will use the Perspective Camera which is one of many options.
//                      \/
var camera = new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,0.1,3000);

//Introduce Scene (This is where you will be placing the objects.)
var scene = new THREE.Scene();

//This essentially is
renderer.render(scene,camera);
