/*
const names = [ 'KokosQ GIF.gif', 'KokosQroll.gif', 'KróliQus GIF.gif', 'Seduces you.gif', 'KroliQ March.gif',
  'Amogus-hm.png', 'KokosQ.png', 'KokosQ2.png', 'Kroliq Map.png', 'KróliQ Beach.jpg',
  'KróliQ Deepfried.png', 'Króliqus.png', 'MelonQ.png', 'XD.png', 'KokosQ Island.png',
  'carrot.png', 'egg.png', 'golden_carrot.png', 'rabbit.png', 'cooked_rabbit.png', 'totem_of_undying.png'
]; */

function add_img( names, name, id ) { 
	var img = document.createElement('img');

    img.src = './Images/' + name;
    img.className = 'image'; 

    img.addEventListener.onclick = "fullscreen(name)"
    img.setAttribute( "onclick", "fullscreen( " + names + ", '"+name+"', "+id+")" )

	document.getElementById('grid').appendChild(img);
}

function addImgBackground(names) {
  var img = document.createElement('img');

    img.src = './Images/' + names[ Math.floor( Math.random() * names.length ) ];
    img.className = "background-image"

    img.style.setProperty( '--x' , Math.random() * 100 + 'vw' );
    img.style.setProperty( '--y' , 'calc(' + Math.random() + ' * var(--page-length) )' );
    img.style.setProperty( '--rotation' , Math.random() * 180 - 90 + 'deg' );

  document.getElementById('body').appendChild(img);
}

function nextimage( names, id) {
  document.getElementById("fullscreen").remove();
  if( id < 0  )
    id = names.length - 1;
  if( id >= names.length )
    id = 0;
  fullscreen( names[id], id );
}

function closefullscreen() {
  document.getElementById("fullscreen").remove();
}

function fullscreen( names, name, id ) {

  var truename = name.substring(0,name.length-4);

  truename = truename.replace( /_/g , ' ' );

  var div = document.createElement("div"); 
    div.id = 'fullscreen'; 
  document.body.appendChild(div);

  var title = document.createElement("div");
    title.id = 'fullscreen-title'
    title.innerHTML = truename; 
  div.appendChild(title);
  
  var closebutton = document.createElement('div');
    closebutton.setAttribute( "onclick", "closefullscreen()" );
    closebutton.id = "close-button";
  title.appendChild(closebutton);

  var img = document.createElement("img");
    img.src = './Images/' + name;
    img.id = 'fullscreen-image'
  div.appendChild(img);

  var button = document.createElement("div");
    button.setAttribute( "onclick", "nextimage("+ names + ", " + (id+1) + ")" );
    button.id = "right-button";
  div.appendChild(button);

  var antibutton = document.createElement("div");
    antibutton.setAttribute( "onclick", "nextimage("+ names + ", " + (id-1) + ")" );
    antibutton.id = "left-button"
  div.appendChild(antibutton);
}

function display() {

  const names = getdata();

  const pageLength = 300 + names.length/3 * 400;
  document.body.style.setProperty( '--page-length' , pageLength + 'px' )  

  for( let i=0;i<names.length;i++)
  {
    add_img( names, names[i], i );
  }
  for( let i=0;i<pageLength/16;i++)
    addImgBackground(names);
}

async function getdata() {
  const response = await fetch('./list.json')
  const data = await response.json();
  return data;
}