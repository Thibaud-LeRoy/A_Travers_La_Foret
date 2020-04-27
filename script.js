const config = {
     width : 800,
     height :600,
     type : Phaser.AUTO,
     physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0},
            debug: false
        }
    },                 
     input: {
        gamepad: true
            },
     scene: {
         preload : preload,
         create  : create,
         update  : update
            }
}

const game = new Phaser.Game(config)
let billy
let cursors
let world
let arbre
let enemy
let Contour


function preload ()  {
    //-----------------Chargement des assets------------------   
    
    //Personnage
    let BillyLD   = this.load.image('billyLD' ,  'assets/BillyLD.png' )      // Regarde en bas
    let BillyLT   = this.load.image('billyLT' ,  'assets/BillyLT.png' )      // Regarde en haut
    let BillyLL   = this.load.image('billyLL' ,  'assets/BillyLL.png' )      // Regarde à gauche
    let BillyLR   = this.load.image('billyLR' ,  'assets/BillyLR.png' )      // Regarde à droite
    let BillyWL   = this.load.image('billyWL' ,  'assets/BillyWL.png' )      // Marche à gauche
    let BillyWR   = this.load.image('billyWR' ,  'assets/BillyWR.png' )      // Marche à droite
    let BillyWD   = this.load.image('billyWD' ,  'assets/BillyWD.png' )      // Marche vers le bas  
    let BillyWT   = this.load.image('billyWT' ,  'assets/BillyWT.png' )      // Marche vers le haut  
    let BillyWD1  = this.load.image('billyWD1',  'assets/BillyWD1.png')     // Marche vers le bas   
    let BillyWT1  = this.load.image('billyWT1',  'assets/BillyWT1.png' )      // Marche vers le haut  
    
    this.load.spritesheet('dude','assets/billy_sprite.png',{frameWidth : 32, frameHeight : 48})
    //Monde
    this.load.image('monde0',  'assets/monde0.png')
    Contour = this.load.image('contour', 'assets/monde1.png')
    this.load.image('arbre',  'assets/Arbre.png')

    //Ennemis
    this.load.image('enemy', 'assets/enemy.png')
  
    //Items
}


function create  ()  {
    const dude = this.add.sprite(100,100,'dude',0);
    this.anims.create({
        key :'walk',
        repeeat : -1,
        frameRate : 5,
        frames : this.anims.generateFrameNames('dude',{start : 1, end:3})
    });
    dude.play('walk');




//------ DEBUG SOURIS-----------
    let x = this.input.x;
    let y = this.input.y;
    this.input.on('pointerup', function(data) {   
        console.log(data.upX, data.upY);
    },this)


    world = this.add.image(400, 300,'monde0')//Ajout de la carte
    this.add.image(400, 300,'contour')//zone non jouable
    
    
    //Ajout du personnage
    billy = this.physics.add.image(500, 200, 'billyLD').setScale(0.5);
    enemy = this.physics.add.image(20,20,'enemy').setScale(.5);
    console.log(enemy)
    arbre = this.add.image(652,155,'arbre');

    billy.body.collideWorldBounds = true;
    cursors =this.input.keyboard.createCursorKeys()


    //rectangle rivière + arbre zone 2 & 3 
    // x 0 y 76
    // x 511 y 12
    
}

function update  ()  {
  

//-------------Déplacements du personnage jouable-----------
  

    billy.setVelocity(0)
    if (cursors.up.isDown){
        console.log('touche haut appuyé')
        billy.setVelocity(0, -100)
    }
    if (cursors.down.isDown){
        console.log('touche bas appuyé')
        billy.setVelocity(0, 100)
    }
    if (cursors.left.isDown){
        console.log('touche gauche appuyé')
        billy.setVelocity(-100, 0)
    }
    if (cursors.right.isDown){
        console.log('touche droite appuyé')
        billy.setVelocity(100,0)
    }
 


}
//-------------Déplacements des personnages non jouables-----------
