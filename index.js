var createScene = function (r, g, b) {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene0 = new BABYLON.Scene(engine);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene0);
    light.intensity = 0.7;

    var box = BABYLON.MeshBuilder.CreateBox("Box", {size: 2}, scene0);
    var mat = new BABYLON.StandardMaterial("mat", scene0);
    mat.diffuseColor = new BABYLON.Color3(r, g, b);
    box.material = mat;
    scene0.createDefaultEnvironment();

    return scene0;
};