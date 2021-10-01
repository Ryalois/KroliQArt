
const names = []

function add_img( name, id ) { 
	var img = document.createElement('img');

    img.src = './Images/' + name;
    img.className = 'image'; 

    img.addEventListener.onclick = "fullscreen(name)"
    img.setAttribute( "onclick", "fullscreen( '"+name+"', "+id+")" )

	document.getElementById('grid').appendChild(img);
}

function addImgBackground() {
  var img = document.createElement('img');

    img.src = './Images/' + names[ Math.floor( Math.random() * names.length ) ];
    img.className = "background-image"

    img.style.setProperty( '--x' , Math.random() * 100 + 'vw' );
    img.style.setProperty( '--y' , 'calc(' + Math.random() + ' * var(--page-length) )' );
    img.style.setProperty( '--rotation' , Math.random() * 180 - 90 + 'deg' );

  document.getElementById('body').appendChild(img);
}

function nextimage(id) {
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

function fullscreen( name, id ) {

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
    button.setAttribute( "onclick", "nextimage("+(id+1)+")" );
    button.id = "right-button";
  div.appendChild(button);

  var antibutton = document.createElement("div");
    antibutton.setAttribute( "onclick", "nextimage("+(id-1)+")" );
    antibutton.id = "left-button"
  div.appendChild(antibutton);
}

async function display() {

  const response = await fetch('./list.json')
  names = await response.json();

  const pageLength = 300 + names.length/3 * 400;
  document.body.style.setProperty( '--page-length' , pageLength + 'px' )  

  for( let i=0;i<names.length;i++)
  {
    add_img( names[i], i );
  }
  for( let i=0;i<pageLength/16;i++)
    addImgBackground();

}