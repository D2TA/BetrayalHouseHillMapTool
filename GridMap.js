// Patch 0.1
// Initial Board Generation
PlayerNames = ['','Ox Bellows','Missy Debourde', 'Peter Akimoto', 'Jenny LeCerc', 'Vivian Lopez', 'Father Rhinehardt']
initialGridValue = 15;

var PlayerStats = {
    "Player01":
        {PlayerID: 01,
        PlayerName: 'Ox Bellows',
        SpeedDefaultPosition: 5,
        SpeedArray: [0, 2, 2, 2, 3, 4, 5, 5, 6],
        MightDefaultPosition: 3,
        MightArray: [0, 4, 4, 5, 6, 6, 7, 8, 8],
        SanityDefaultPosition: 3,
        SanityArray: [0, 2, 2, 3, 3, 5, 5, 6, 6],
        KnowledgeDefaultPosition: 3,
        KnowledgeArray: [0, 2, 2, 3, 3, 5, 5, 6, 6]
        },
    "Player02":
        {PlayerID: 02,
        PlayerName: 'Missy Debourde',
        SpeedDefaultPosition: 3,
        SpeedArray: [0, 3, 4, 5, 6, 6, 6, 7, 7],
        MightDefaultPosition: 4,
        MightArray: [0, 2, 3, 3, 3, 4, 5, 6, 7],
        SanityDefaultPosition: 3,
        SanityArray:[0, 1, 2, 3, 4, 5, 5, 6, 7],
        KnowledgeDefaultPosition: 4,
        KnowledgeArray: [0, 2, 3, 4, 4, 5, 6, 6]
    },
    "Player03":
        {PlayerID: 03,
        PlayerName: 'Peter Akimoto',
        SpeedDefaultPosition: 4,
        SpeedArray: [0, 2, 2, 2, 4, 6, 6, 7, 7],
        MightDefaultPosition: 3,
        MightArray: [0, 2, 3, 3, 4, 5, 5, 6, 8],
        SanityDefaultPosition: 4,
        SanityArray:[0, 3, 4, 4, 4, 5, 6, 6, 7],
        KnowledgeDefaultPosition: 3,
        KnowledgeArray: [0, 3, 4, 5, 6, 7, 7, 8]
    },
    "Player04":
        {PlayerID: 04,
        PlayerName: 'Jenny LeClerc',
        SpeedDefaultPosition: 4,
        SpeedArray: [0, 2, 3, 4, 4, 4, 5, 6, 8],
        MightDefaultPosition: 3,
        MightArray: [0, 3, 4, 4, 4, 4, 5, 6, 8],
        SanityDefaultPosition: 5,
        SanityArray:[0, 1, 1, 2, 4, 4, 4, 5, 6],
        KnowledgeDefaultPosition: 3,
        KnowledgeArray: [0, 2, 3, 3, 4, 4, 5, 6, 8]
    },
    "Player05":
    {PlayerID: 05,
    PlayerName: "Vivian Lopez",
    SpeedDefaultPosition: 4,
    SpeedArray: [0, 3, 4, 4, 4, 4, 6, 7, 8],
    MightDefaultPosition: 3,
    MightArray: [0, 2, 2, 3, 4, 4, 5, 6, 6],
    SanityDefaultPosition: 3,
    SanityArray:[0, 4, 4, 4, 5, 6, 7, 8, 8],
    KnowledgeDefaultPosition: 4,
    KnowledgeArray: [0, 4, 5, 5, 5, 5, 6, 6, 7]
    },
    "Player06":{
    PlayerID: 06,
    PlayerName: "Father Rhinehardt",
    SpeedDefaultPosition: 3,
    SpeedArray: [0, 2, 3, 3, 4, 5, 6, 7, 7],
    MightDefaultPosition: 3,
    MightArray: [0, 1, 2, 3, 4, 4, 5, 5, 7],
    SanityDefaultPosition: 5,
    SanityArray:[0, 3, 4, 5, 5, 6, 7, 7, 8],
    KnowledgeDefaultPosition: 4,
    KnowledgeArray:[0, 1, 3, 3, 4, 5, 6, 6, 8]
    }
}

function start(){
    RandomCharacter("Player01")
    RandomCharacter("Player02")
    RandomCharacter("Player03")
    RandomCharacter("Player04")
    RandomCharacter("Player05")
    RandomCharacter("Player06")
}

// Random Character Generator
function RandomCharacter(PlayerID){
    var randomValue = Math.floor(Math.random()*491)
    document.getElementById(PlayerID).src = 'CharacterPortrait/' + randomValue + '.png';
}

function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {

            if (columns == 10 && rows == 6 ){
                $("#container").append("<div class='grid'> <img src='TilePortait/Entrance.jpg'/> </div>");          
            } else if (columns == 9 && rows == 6 ){
                $("#container").append("<div class='grid'> <img src='TilePortait/Hallway.jpg'/> </div>");         
            } else if (columns == 8 && rows == 6 ){
                $("#container").append("<div class='grid'> <img src='TilePortait/GroundStair.jpg'/> </div>");    
            } else if (columns == 4 && rows == 4 ){
                $("#container").append("<div class='grid'> <img src='TilePortait/UpperLanding.jpg'/> </div>");    
            } else if (columns == 4 && rows == 10 ){
                $("#container").append("<div class='grid'> <img src='TilePortait/BasementLanding.jpg'/> </div>");    
            } else {
                $("#container").append("<div class='grid' ondrop='drop(event)' ondragover='allowDrop(event)'></div>");
            }  
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};


$(document).ready(function() {
    createGrid(initialGridValue);
// Grid Functionality
        // Insert Tile
    $(".grid").click(function(){
        if (TileLog.length > 1 && ! $(this).find('img').length ){
            $(this).append('<img src=' + "'" + 'TilePortait/' + TileLogImg[TileLogImg.length - 1] + "'" + '/>'); 
        } else if ($(this).find('img').length ){
            alert('A tile already exists here, insert it somewhere else');
        }

    });
        // Player Flip
    $(".PlayerPortrait").click(function(){
        var idValue = $(this).attr("id");
        RandomCharacter(idValue);
    });
    
});

function HauntingActivate(){
    document.body.style.backgroundColor = 'rgb(27, 27, 27)';
};

function DiceRoll(PlayerID){
    var SpeedValue = document.getElementById(PlayerID).value;
    Roll = [];
    for (var i = 1; i <= SpeedValue; i ++){
        Roll.push( Math.floor(Math.random()*3) );
    };
    document.getElementById("DiceValue").innerHTML = 'Dice Roll for ' 
        + PlayerNames[PlayerID.substring(PlayerID.length - 6, PlayerID.length).replace('Value','')] 
        + ' : ' +  Roll;
    document.getElementById("TotalDiceValue").innerHTML = 'Total Dice Value Rolled: ' + Roll.reduce(function(total,num) {return total + num});
};

// Random Tile Generator 
TileLog = [''];
TileLogImg = [''];
PlacedTile = [];
var TileList = [
    "RoofLanding.jpg",
    "SpiralStairs.jpg",
    "StormCellar.jpg",
    "TreeHouse.jpg",
    "WindowWalk.jpg"
];

function RandomTile(){
    var randomTile = TileList[Math.floor(Math.random()*TileList.length)];
    TileLogImg.push(randomTile);
    TileLog.push( (TileLog.length) + ') ' + randomTile.replace('.jpg','') + "<br>");                      //Example Value:    1) StormCellar.jpg
    document.getElementById("RandomTileValue").src = "TilePortait/" + randomTile;
    TileLogString = TileLog.toString();
    document.getElementById("TileLog").innerHTML = TileLogString.replace(/,/g,'');
    document.getElementById("TileLog").scrollTop = document.getElementById("TileLog").scrollHeight;
    return(TileLog);
};

