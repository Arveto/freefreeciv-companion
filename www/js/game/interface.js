
const playerColor = ['R', 'B', 'G', 'Y'];
// const unitsProperties = {castle: {life: 10, ...}} //XXX
class Player {
  constructor(name, id, gold, wood, health){
      //properties
    this.name = name;
    this.id = id;
    this.gold = gold || 0;
    this.wood = wood || 0;
    this.health = health || 100;

    this.units = {castle: 0, knight: 0, paysant:0} //TODO : obj {id: unit} && unit class

      //display player gui elements
    this.container = $('<div>').attr('id', name).addClass('player').appendTo('div#units');
      let infos = $('<div>').addClass('infos').appendTo(this.container);
      $('<img>').attr('src', '/src/player'+playerColor[this.id]+'.png').appendTo(infos);

      let div = $('<div>').addClass('container').appendTo(infos);
      $('<strong>').html(this.name).appendTo(div);

      this.healthContainer = $('<div>').addClass('healthContainer').appendTo(div);
      let aze = $('<div>').addClass('health').appendTo(this.healthContainer);

      $('<div>').addClass('bar').html('100%').appendTo(aze);

      //TODO Change 'wood' id to 'wood'
      $('<div>').addClass('stuff').html('<p id="gold_'+this.name+'" class="gold">GOLD ' + this.gold +'</p><p id="wood_'+this.name+'" class="wood">WOOD ' + this.wood +'</p>').appendTo(this.healthContainer);

      $('<div>').addClass('units').appendTo(this.container);


    this.container.on('click', () => {
      $('#'+name+' .units').toggle();
    })
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

    $('<img>').attr('src', 'src/'+type + playerColor[this.id] + '.png').appendTo(unit);
    let div = $('<div>').addClass('container').appendTo(unit);
    $('<strong>').html(type+this.units[type]).appendTo(div);
    let healthContainer = $('<div>').addClass('healthContainer').appendTo(div);
    let health = $('<div>').addClass('health').appendTo(healthContainer);
    $('<div>').addClass('bar').html('100%').appendTo(health);
  }

}
