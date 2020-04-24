const config = {
     width : 800,
     height :600,
     type : Phaser.AUTO,
     physics: {
            default : 'arcade',
            arcade : {
                gravity: {y : 0}
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



function preload ()  {
    // Chargement des assets
    //Personnage
    this.load.image('billyLD',  'assets/BillyLDs.png')// Regarde en bas BillyLDs

    //Monde
    this.load.image('monde0',  'assets/monde0.png')
    this.load.image('monde1',  'assets/monde1.png')

    //Ennemis
    //Items
}
function create  ()  {
    world = this.add.image(400, 300,'monde0')
    //Ajout de la carte
    this.add.image(400, 300,'monde0')//zone jouable
    this.add.image(400, 300,'monde1')//zone de détourage
    
    //Ajout du personnage
    billy = this.physics.add.image(500, 200, 'billyLD')
    billy.body.collideWorldBounds = true;
    cursors =this.input.keyboard.createCursorKeys()
    
}
function update  ()  {
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















 /*this.load.image('billyLR',  'assets/BillyLR.png')// Regarde à droite
    this.load.image('billyLL',  'assets/BillyLL.png')// Regarde à gauche
    this.load.image('billyLT',  'assets/BillyLT.png')// Regarde en haut
    this.load.image('billyWD',  'assets/BillyWD.png')//Marche en bas
    this.load.image('billyWD1',  'assets/BillyWD1.png')//Marche en bas
    this.load.image('billyWL',  'assets/BillyWL.png')//Marche a gauche
    this.load.image('billyWR',  'assets/BillyWR.png')//Marche a droite
    this.load.image('billyWT1',  'assets/BillyWT1.png')//Marche en haut
    this.load.image('billyWT',  'assets/BillyWT.png')//Marche en haut
    this.load.image('billyHit',  'assets/BillyHit.png')//Dégats
    this.load.image('billyHit1',  'assets/BillyHit1.png')*/