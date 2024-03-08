namespace SpriteKind {
    export const Healer = SpriteKind.create()
    export const CLEANERPICKER = SpriteKind.create()
    export const MESS = SpriteKind.create()
    export const RAT_ATTACK = SpriteKind.create()
    export const FOOD_FOR_RAT = SpriteKind.create()
    export const THE_BIG_DEAL = SpriteKind.create()
    export const New_enemy = SpriteKind.create()
}
// Makes the mop sprite appear when "B" Button pressed by player.
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    MOP = sprites.create(assets.image`myImage0`, SpriteKind.CLEANERPICKER)
    MOP.setPosition(Chef_1.x + 5, Chef_1.y + 0)
    animation.runImageAnimation(
    MOP,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . c c c 6 9 c c c . . . . 
        . . . . c 6 9 9 9 9 9 c . . . . 
        . . . . c 5 4 5 4 5 4 c . . . . 
        . . . c c 5 4 5 4 5 4 c . . . . 
        . . . c 5 4 5 5 4 5 5 4 c . . . 
        . . . c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . c c c . . . . . . . . 
        . . . . c 9 9 c . . . . . . . . 
        . . . . c 6 9 c c . . . . . . . 
        . . . . c c 9 9 c . . . . . . . 
        . . . . . c 6 9 c c . . . . . . 
        . . . . . c c 9 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c c 9 9 c c c . . . 
        . . . . . . . c 6 9 9 9 9 c . . 
        . . . . . . . c 6 9 9 9 4 c . . 
        . . . . . . c 6 9 9 9 4 5 c . . 
        . . . . . . c 6 6 4 4 4 5 c . . 
        . . . . . . c 4 4 4 5 4 c . . . 
        . . . . . . c 4 5 4 5 c . . . . 
        . . . . . . c c c c c . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . c c c 6 9 c c c . . . . 
        . . . . c 6 9 9 9 9 9 c . . . . 
        . . . . c 5 4 5 4 5 4 c . . . . 
        . . . c c 5 4 5 4 5 4 c . . . . 
        . . . c 5 4 5 5 4 5 5 4 c . . . 
        . . . c c c c c c c c c c . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . . c 9 9 c . . . . 
        . . . . . . . c c 9 6 c . . . . 
        . . . . . . . c 9 9 c c . . . . 
        . . . . . . c c 9 6 c . . . . . 
        . . . . . . c 9 9 c c . . . . . 
        . . . . . . c 9 6 c . . . . . . 
        . . . c c c 9 9 c c . . . . . . 
        . . c 9 9 9 9 6 c . . . . . . . 
        . . c 4 9 9 9 6 c . . . . . . . 
        . . c 5 4 9 9 9 6 c . . . . . . 
        . . c 5 4 4 4 6 6 c . . . . . . 
        . . . c 4 5 4 4 4 c . . . . . . 
        . . . . c 5 4 5 4 c . . . . . . 
        . . . . . c c c c c . . . . . . 
        `],
    500,
    true
    )
    pause(1500)
    sprites.destroy(MOP)
})
// When the player overlaps with any kind of baked treats (except for the yellow healing cake), it will destroy the baked treat and add one to "numBAKEDTREATS"
sprites.onOverlap(SpriteKind.Player, SpriteKind.FOOD_FOR_RAT, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 500)
    numBAKEDTREATS = numBAKEDTREATS + 1
})
// Player has finished the game.
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    game.splash("You can finally go home!")
    game.gameOver(true)
})
// Mop attack that appears when the "A" Button is pressed by player.
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MOP_ATTACK = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . . . c 6 9 c . . . . . . 
        . . . . c c c 6 9 c c c . . . . 
        . . . . c 6 9 9 9 9 9 c . . . . 
        . . . . c 5 4 5 4 5 4 c . . . . 
        . . . c c 5 4 5 4 5 4 c . . . . 
        . . . c 5 4 5 5 4 5 5 4 c . . . 
        . . . c c c c c c c c c c . . . 
        `, SpriteKind.RAT_ATTACK)
    MOP_ATTACK.setPosition(Chef_1.x + 5, Chef_1.y + 0)
    animation.runImageAnimation(
    MOP_ATTACK,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c c c . 
        c c c c c c c c c c c c 9 6 c c 
        c 9 9 9 9 9 9 9 9 9 9 9 6 5 5 c 
        c 6 6 6 6 6 6 6 6 6 9 9 6 4 5 c 
        c c c c c c c c c c 9 6 5 4 5 c 
        . . . . . . . . c 9 9 6 5 5 4 c 
        . . . . . . . . c 9 6 4 4 5 4 c 
        . . . . . . . . c 9 6 5 4 5 4 c 
        . . . . . . . . c 6 4 5 5 4 c c 
        . . . . . . . . c c 4 4 5 4 c . 
        . . . . . . . . . c c 4 c c c . 
        . . . . . . . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        c c c c . . . . . . . . . . . . 
        c 6 9 c c . . . . . c c c . . . 
        c c 6 9 c c . . . . c 1 c . . . 
        . c c 6 9 c c . . . c 1 c c c c 
        . . c c 6 9 c c . . c 1 c c 1 c 
        . . . c c 6 9 c c . c c c c 1 c 
        c c c c c c 6 9 c c . . . c c c 
        c 1 1 1 c c c 6 9 c c c c c c . 
        c c c 1 1 c c c 6 9 c 9 9 6 c . 
        . . c c c c . c c 6 9 9 6 4 c c 
        c c c c c . . c c 9 9 6 4 5 4 c 
        c 1 1 1 c . c c 9 9 6 5 4 5 4 c 
        c c c c c . c 6 9 6 4 5 4 5 5 c 
        . . . . . . c 6 6 5 4 5 5 4 c c 
        . . . . . . c c 4 5 5 4 c c c . 
        . . . . . . . c c c c c c . . . 
        `],
    500,
    true
    )
    pause(1000)
    sprites.destroy(MOP_ATTACK)
})
// Once the player overlaps with the right amount of "numBAKEDTREATS" and Goal, it can overlap the King Enemy Rat to go to the next part of the game.
sprites.onOverlap(SpriteKind.Player, SpriteKind.THE_BIG_DEAL, function (sprite, otherSprite) {
    if (numBAKEDTREATS >= 21 && Goal >= 11) {
        game.showLongText("RAHHHHHHHHHHHH!!!!", DialogLayout.Bottom)
        game.showLongText("You have killed my people!", DialogLayout.Bottom)
        game.showLongText("NOW YOU SHALL PAY!", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`level`)
        tiles.placeOnTile(Chef_1, tiles.getTileLocation(25, 22))
        tiles.placeOnTile(ENEMY_KING_RAT, tiles.getTileLocation(6, 9))
        sprites.destroyAllSpritesOfKind(SpriteKind.FOOD_FOR_RAT)
        numBAKEDTREATS = 0
        doSomething(randint(5, 10))
    }
})
// Function spawn enemies on the second tile map for player to fight. 
function doSomething (num: number) {
    Enemy_list = [assets.image`rat enemy 1`, img`
        . . c c c c c c . . . . . . . . 
        . . c 8 8 8 8 c . . . . . . . . 
        . . c 8 3 3 8 c c c c c c . . . 
        . . c 8 3 3 8 8 8 c 3 3 c . . . 
        . . c 8 8 8 8 2 8 8 8 3 c . . . 
        . . c c c 8 8 8 8 8 8 c c . . . 
        . . . c c c 8 8 8 2 2 2 c c c . 
        . . . c 8 8 8 8 8 2 2 2 e e c . 
        . . . c 8 8 8 8 8 2 2 2 e e c . 
        . . . c 8 8 8 8 8 8 1 1 e e c . 
        . . . c 8 8 8 8 8 8 8 8 d c c . 
        . . . c 1 1 1 1 1 1 1 8 8 c . . 
        . . . c 2 2 2 2 2 2 2 c c c . . 
        . . . c 2 2 2 c 2 2 2 c . . . . 
        . . . c 3 3 c c c 3 3 c . . . . 
        . . . c c c c . c c c c . . . . 
        `, img`
        . . . c c c c c c c c c . . . . 
        . . . c 8 8 8 c 8 8 8 c . . . . 
        c c c c 8 3 3 c 3 3 8 c c c c . 
        c 8 8 c 8 3 8 8 8 3 8 c 8 8 c . 
        c 8 c c c c 2 8 2 c c c c 8 c . 
        c 8 8 c c c 8 8 8 c c c 8 8 c . 
        c 8 8 8 8 c 8 3 8 c 8 8 8 8 c . 
        c 8 8 8 8 8 8 8 8 8 8 8 8 8 c . 
        c c c 8 8 8 8 8 8 8 8 8 8 8 c . 
        . . c 8 8 8 8 8 8 8 8 8 c c c . 
        . . c c 8 8 8 8 8 8 8 c c . . . 
        . . . c c 8 8 8 8 8 c c . . . . 
        . . . c 8 8 8 8 8 8 8 c . . . . 
        . . c c 8 8 c c c 8 8 c c . . . 
        . . c 3 3 3 c . c 3 3 3 c . . . 
        . . c c c c c . c c c c c . . . 
        `]
    if (2 <= info.life()) {
        for (let index = 0; index < num; index++) {
            newRATENEMIES = sprites.create(Enemy_list._pickRandom(), SpriteKind.Enemy)
            tiles.placeOnRandomTile(newRATENEMIES, sprites.dungeon.floorDark2)
            newRATENEMIES.follow(Chef_1, 75)
            pause(2000)
        }
    }
}
// When the enemy sprites overlap with mop("A" button) it will destroy the enemy. 
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.RAT_ATTACK, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.spray, 500)
})
// When player overlaps with the yellow healing cake it will add a life to the player
sprites.onOverlap(SpriteKind.Player, SpriteKind.Healer, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
})
// When the Mop("B" button mop) overlaps with the sprite (MESS). It will destroy the MESS sprite and add to the Goal.
sprites.onOverlap(SpriteKind.MESS, SpriteKind.CLEANERPICKER, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    pause(1000)
    sprites.destroy(otherSprite)
    Goal = Goal + 1
})
// When the players finds the "King Evil Rat" the Rat will give a final speech and the player will go back to the first tile map.
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark2, function (sprite, location) {
    if (numBAKEDTREATS == 0 && Chef_1.overlapsWith(ENEMY_KING_RAT)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        game.showLongText("YOU'RE TIME IS OVER!!!", DialogLayout.Bottom)
        game.showLongText("Oh!", DialogLayout.Bottom)
        game.showLongText("Oh!", DialogLayout.Bottom)
        game.showLongText("Are those baked treats you have?", DialogLayout.Bottom)
        game.showLongText("How about this...", DialogLayout.Bottom)
        game.showLongText("You give me the baked treats, and I let you go home.", DialogLayout.Bottom)
        game.showLongText("Deal?", DialogLayout.Bottom)
        game.splash("It's the only way to go home...")
        tiles.setCurrentTilemap(tilemap`maze`)
        tiles.placeOnTile(Chef_1, tiles.getTileLocation(6, 26))
        sprites.destroy(ENEMY_KING_RAT)
    }
})
// When the player overlaps with any type of enemy it will take away a life and destroy that enemy.
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.follow(sprite, 55)
    pause(500)
})
let sprinkle_cake: Sprite = null
let list: Image[] = []
let newRATENEMIES: Sprite = null
let Enemy_list: Image[] = []
let MOP_ATTACK: Sprite = null
let MOP: Sprite = null
let numBAKEDTREATS = 0
let Goal = 0
let ENEMY_KING_RAT: Sprite = null
let Mess: Sprite = null
let STRAWBERRY_CAKE: Sprite = null
let magical_cheese: Sprite = null
let PINK_Healing_Cake: Sprite = null
let Healing_Cake: Sprite = null
let Rat__Enemy: Sprite = null
let Chef_1: Sprite = null
let newRATENEMY1 = null
let newRATENEMY2 = null
let newRATENEMY3 = null
game.splash("The bakery is closing")
game.splash("Theres no janitor to clean")
game.splash("Looks like its your new job.")
game.splash("Make sure you collect all the food.")
game.splash("Be careful with the rats...")
info.setLife(5)
Chef_1 = sprites.create(assets.image`chef`, SpriteKind.Player)
controller.moveSprite(Chef_1)
animation.runImageAnimation(
Chef_1,
[img`
    . c c c c c c c c c c c c c c . 
    . c 6 9 9 9 9 9 9 9 9 9 9 9 c . 
    . c 6 9 1 9 1 9 1 9 1 9 1 9 c . 
    . c 6 6 9 1 9 1 9 1 9 1 1 9 c . 
    . c c 6 9 1 9 1 9 1 9 1 9 c c . 
    . . c 6 6 6 6 6 6 6 6 6 6 c . . 
    . . c c 3 3 3 3 3 3 3 3 c c . . 
    . . . c 3 c c d d c c d c . . . 
    . . . c 3 d d d d d d d c . . . 
    . . . c 6 6 6 6 6 6 6 6 c . . . 
    . . . c 9 1 1 1 9 1 1 9 c . . . 
    . . . c 9 9 1 1 6 1 9 9 c . . . 
    . . . c d 9 1 1 9 1 9 d c . . . 
    . . . . c 9 1 1 6 1 9 c . . . . 
    . . . . c 6 6 6 6 6 6 c . . . . 
    . . . . c f f c c f f c . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . c c c c c c c c c c c c c c . 
    . c 6 9 9 9 9 9 9 9 9 9 9 9 c . 
    . c 6 9 1 9 1 9 1 9 1 9 1 9 c . 
    . c 6 6 9 1 9 1 9 1 9 1 1 9 c . 
    . c c 6 9 1 9 1 9 1 9 1 9 c c . 
    . . c 6 6 6 6 6 6 6 6 6 6 c . . 
    . . c c 3 3 3 3 3 3 3 3 c c . . 
    . . . c 3 c c d d c c d c . . . 
    . . . c 3 d d d d d d d c . . . 
    . . . c 6 6 6 6 6 6 6 6 c . . . 
    . . . c 9 9 1 1 6 1 9 9 c . . . 
    . . . c d 9 1 1 9 1 9 d c . . . 
    . . . . c 9 1 1 6 1 9 c . . . . 
    . . . . c 6 6 6 6 6 6 c . . . . 
    . . . . c f f c c f f c . . . . 
    `],
500,
true
)
Chef_1.setStayInScreen(true)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    `)
tiles.setCurrentTilemap(tilemap`maze`)
scene.cameraFollowSprite(Chef_1)
// Spawns a certain number of enemy sprites at random places of a certain type of tile. 
for (let index = 0; index < 15; index++) {
    Rat__Enemy = sprites.create(assets.image`RATS`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Rat__Enemy, assets.tile`myTile8`)
}
// Spawns a certain amount of the "Healing_Cake" sprite at random places of a certain type of tile. 
for (let index = 0; index < 10; index++) {
    Healing_Cake = sprites.create(assets.image`Yummy Treat`, SpriteKind.Healer)
    tiles.placeOnRandomTile(Healing_Cake, assets.tile`myTile8`)
}
// Spawns a certain amount of baked treat s sprites on random places of certain types of tiles. 
for (let index = 0; index < 7; index++) {
    PINK_Healing_Cake = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c . . c . . . . . . 
        . . . . . c 7 c c 7 c . . . . . 
        . . . . . c c 2 d c c . . . . . 
        . . . . c 3 3 2 2 3 3 c . . . . 
        . . . c 3 3 3 3 3 3 3 3 c . . . 
        . . . c 3 3 3 3 e 3 e 3 c . . . 
        . . . c 3 e 3 e 4 e 4 3 c . . . 
        . . c c e 4 e 4 4 4 4 3 c c . . 
        . . c d 4 4 4 4 4 4 4 e d c . . 
        . . c d d d d d d d d d d c . . 
        . . c c c c c c c c c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FOOD_FOR_RAT)
    tiles.placeOnRandomTile(PINK_Healing_Cake, assets.tile`myTile8`)
    magical_cheese = sprites.create(assets.image`Cheese fothe ratking`, SpriteKind.FOOD_FOR_RAT)
    tiles.placeOnRandomTile(magical_cheese, assets.tile`myTile8`)
    STRAWBERRY_CAKE = sprites.create(assets.image`cakeforratking`, SpriteKind.FOOD_FOR_RAT)
    tiles.placeOnRandomTile(STRAWBERRY_CAKE, assets.tile`myTile8`)
}
// Spawns a certain amount of "Mess" sprite on random places of the tile map but at certain tiles. 
for (let index = 0; index < 10; index++) {
    Mess = sprites.create(assets.image`WHAT A MESS`, SpriteKind.MESS)
    tiles.placeOnRandomTile(Mess, assets.tile`myTile8`)
}
ENEMY_KING_RAT = sprites.create(assets.image`THE EVIL RAT`, SpriteKind.THE_BIG_DEAL)
Goal = 0
tiles.placeOnTile(ENEMY_KING_RAT, tiles.getTileLocation(6, 26))
numBAKEDTREATS = 0
forever(function () {
    // Once the player has destroyed enough MESS sprites, it will show the text on the screen to let the player know and add one to "Goal" so it wont repeat every frame after the text.
    if (Goal == 10) {
        game.showLongText("You cleaned the whole place up! Good Job!", DialogLayout.Bottom)
        Goal = Goal + 1
    }
    // Once player has collected enough baked treat sprites it will show a text to let the player know and add one to "numBAKEDTREATS" so it wont repeat the text. 
    if (numBAKEDTREATS == 20) {
        game.showLongText("You've collected enough baked treats!", DialogLayout.Bottom)
        numBAKEDTREATS = numBAKEDTREATS + 1
    }
    // List of the baked treats that add to the variable "numBAKEDTREATS"
    list = [assets.image`Cheese fothe ratking`, assets.image`cakeforratking`]
    // Whenever the life of the player is less than 4 a new image will be added to the list to contribute to the variable "numBAKEDTREATS" , it will spawn in random type of tyle and only spawn every few seconds..
    if (info.life() < 4) {
        for (let index = 0; index < 5; index++) {
            sprinkle_cake = sprites.create(assets.image`treat`, SpriteKind.FOOD_FOR_RAT)
            tiles.placeOnRandomTile(sprinkle_cake, assets.tile`myTile8`)
            pause(5000)
        }
        list.push(assets.image`treat`)
    }
})
