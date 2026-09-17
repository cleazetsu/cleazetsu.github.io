$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 610, 200, 20, "blue");
    createPlatform(200, 390, 200, 20, "red")
    createPlatform(400, 500, 200, 20, "green")
    createPlatform(600, 500, 20, 100, "green")
    createPlatform(600, 600, 100, 20, "green")
    createPlatform(400, 280, 450, 20, "brown")
    createPlatform(900, 450, 325, 20, "teal")
    createPlatform(180, 610, 20, 150, "blue")




    // TODO 3 - Create Collectables
    createCollectable("diamond", 650, 550);
    createCollectable("diamond", 300, 700);
    createCollectable("diamond", 1050, 405);



    
    // TODO 4 - Create Cannons
    createCannon("top", 730, 900);
    createCannon("right", 450, 800);
    createCannon("bottom", 300, 850);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
