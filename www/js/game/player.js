
const playerColor = ['R', 'B', 'G', 'Y'];
// const unitsProperties = {castle: {life: 10, ...}} //XXX

let players = [];

class Player {
  constructor(name, slot, isAiControlled){
    this.name = name;
    this.isAiControlled = isAiControlled ? true : false;
    this.slot = slot
    this.gold = 0;
    this.wood = 0;
    this.health = 100;

    this.units = {castle: 0, knight: 0, paysant:0} //TODO : obj {slot: unit} && unit class
      //display player gui elements
    this.container = $('<div>').attr('id', name).addClass('player slot'+this.slot).appendTo('div#units');
      let infos = $('<div>').addClass('infos').appendTo(this.container);
      $('<img>').attr('src', 'src/player'+playerColor[Object.keys(players).length]+'.png').appendTo(infos);

      let div = $('<div>').addClass('container').appendTo(infos);

      isAiControlled ? $('<strong>').html(this.name +" [BOT]").appendTo(div) : $('<strong>').html(this.name + '').appendTo(div);

      this.healthContainer = $('<div>').addClass('healthContainer').appendTo(div);
      let aze = $('<div>').addClass('health').appendTo(this.healthContainer);

      $('<div>').addClass('bar').html('100%').appendTo(aze);

      //TODO Change 'wood' id to 'wood'
      $('<div>').addClass('stuff').html('<p id="gold_'+this.name+'" class="gold">GOLD ' + this.gold +'</p><p id="wood_'+this.name+'" class="wood">WOOD ' + this.wood +'</p>').appendTo(this.healthContainer);

      $('<div>').addClass('units').appendTo(this.container);


    this.container.on('click', ()=>{
      $('#'+name+' .units').toggle();
    });

    //SETTINGS
    switch(this.slot){
      case 1:
        $('.ga td').html(name);
        $(".ga td button").on('click', ()=>{
          socket.emit('leaveRoom', {'roomId': window.localStorage.getItem("roomId"), name});
        });
        break;
      case 2:
        $('.bu td').html(name);
        $(".bu td button").on('click', ()=>{
          socket.emit('leaveRoom', {'roomId': window.localStorage.getItem("roomId"), name});
        });
        break;
      case 3:
        $('.zo td').html(name);
        $(".zo td button").on('click', ()=>{
          socket.emit('leaveRoom', {'roomId': window.localStorage.getItem("roomId"), name});
        });
        break;
      default:
        log("Slot of the player "+ name+ " !C [1,3]");
    }
  }

  setGold(val) {
    $("#gold_"+this.name).html('GOLD ' + val);
    this.gold = val;
  }

  setWood(val) {
    $("#wood_"+this.name).html('WOOD ' + val);
    this.wood = val;
  }

  setHealth(target, health) {
/*
    L'APPLICATION N'AS SURTOUT PAS ÉTÉ CODÉE PAR CET USURPATEUR D'ANTOINE BLANQUET,
    MAIS BIENN PAR LE GRAND, L'UNIQUE, LE MAJESTUEUX TERRUSS TOUT PUISSANT, AUSSI CONNU
    SUR GITHUB SOUS LE SOBRIQUET DE JÉSUS BRAKMAR
*/
    if (target == 'player') {
      $('#'+this.name+' .infos .healthContainer .health .bar').width(health +"%");
      $('#'+this.name+' .infos .healthContainer .health .bar').html(health);
    } else {
      $('#'+this.name+' .units .'+target+' .healthContainer .health .bar').width(health +"%");
      $('#'+this.name+' .units .'+target+' .healthContainer .health .bar').html(health +'%');
      /*
      ** Solutions : map, objet 'unit' w/ hérédité, ...
      */
    }
  }

  newUnit(type){ //type : 'castle' / 'knight' / 'paysant'

    this.units[type]++;
    let unit = $('<div>').addClass('unit ' + type + (this.units[type]) ).appendTo('#'+this.name +' .units');

    $('<img>').attr('src', 'src/'+type + playerColor[this.slot] + '.png').appendTo(unit);
    let div = $('<div>').addClass('container').appendTo(unit);
    $('<strong>').html(type+this.units[type]).appendTo(div);
    let healthContainer = $('<div>').addClass('healthContainer').appendTo(div);
    let health = $('<div>').addClass('health').appendTo(healthContainer);
    $('<div>').addClass('bar').html('100%').appendTo(health);
  }
}
