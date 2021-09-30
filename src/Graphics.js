import './App.css';

function makeCloud( scale, r, g, b, height ) {

    let randy = Math.random() * 100 / height  - 100 / height - 10
    let randdur = Math.random() * 20 + 50
    let randdel = -Math.random() * randdur

    let particle = document.createElement('div');
      particle.className = 'particle'
      particle.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
      particle.style.width = scale * 24 + 'vmin'
      particle.style.height = scale * 20 + 'vmin'
      particle.style.setProperty( '--y' , randy + 'vh' )
      particle.style.setProperty( '--duration' , randdur + 's' )
      particle.style.animationDelay = randdel + 's'
    document.body.appendChild(particle);

    let innerparticle = document.createElement('div');
        innerparticle.className = 'innerparticle'
        innerparticle.style.width = scale * 24 - 4 + 'vmin'
        innerparticle.style.height = scale * 20 - 4 + 'vmin'
        innerparticle.style.backgroundColor = 'rgb(' + (r-20) + ',' + (g-20) + ',' + (b-20) + ')'
        innerparticle.style.setProperty( '--y' , 'calc(' + randy + 'vh + 2vmin)' )
        innerparticle.style.setProperty( '--x' , '2vmin')
        innerparticle.style.setProperty( '--duration' , randdur + 's' )
        innerparticle.style.animationDelay = randdel + 's'
    document.body.appendChild( innerparticle );
}
  
function makeDroplet( scale, r, g, b ) {
    let particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.animationName = 'rain';
      particle.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
      particle.style.width = scale * scale * 3 + 'vmin'
      particle.style.height = scale * scale * 2.5 + 'vmin'
      particle.style.animationDelay = -Math.random() * 2 + 's'
      particle.style.setProperty( '--x' , Math.random() * 120 - 20 + 'vw' )
      particle.style.setProperty( '--duration' , ( Math.random() + 2 ) * scale + 's')
      particle.style.clipPath = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
      particle.style.zIndex = 3
    document.body.appendChild(particle);
}

function Graphics( weather ) {

    var particles = document.getElementsByClassName('particle');
    Array.from(particles).forEach( target => { document.body.removeChild( target ) } )

    var innerparticles = document.getElementsByClassName('innerparticle');
    Array.from(innerparticles).forEach( target => { document.body.removeChild( target ) } )
  
    switch( weather ) {
      case 'Snow' :

        document.getElementById('App').style.backgroundColor = 'rgb(119, 119, 119)'
        document.getElementById('bottombackground').style.backgroundColor = 'rgb(109, 109, 109)'
        document.getElementById('weather').style.backgroundColor = 'rgb(235, 235, 235)'
        document.getElementById('innerweather').style.backgroundColor = 'rgb(189, 189, 189)'

        for( let i=0;i<30;i++ ) {
          let rand = Math.random() + 0.5;
          makeCloud( rand, 99, 99, 99, 1 )
        }
        for( let i=0;i<25;i++ ) {
          let rand = 1 + Math.random()/2
          makeDroplet( rand , 235, 235, 235 )
        }
        break;
      case 'Thunderstorm' :
      case 'Rain' :
      case 'Drizzle' : 

        document.getElementById('App').style.backgroundColor = 'rgb(119, 119, 119)'
        document.getElementById('bottombackground').style.backgroundColor = 'rgb(109, 109, 109)'
        document.getElementById('weather').style.backgroundColor = 'rgb(99, 99, 99)'
        document.getElementById('innerweather').style.backgroundColor = 'rgb(59, 59, 59)'

        document.getElementById('bottombackground').style.clipPath = "polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)"

        for( let i=0;i<25;i++ ) {
            let rand = 0.75 + Math.random()/3
            makeDroplet( rand, 100, 148, 237 )
        }
        for( let i=0;i<30;i++ ) {
            let rand = Math.random() + 0.5;
            makeCloud( rand, 99, 99, 99, 1 )
        }
        break;
      case 'Clouds':

        document.getElementById('App').style.backgroundColor = 'rgb(199, 199, 199)'
        document.getElementById('bottombackground').style.backgroundColor = 'rgb(189, 189, 189)'
        document.getElementById('weather').style.backgroundColor = 'rgb(159, 159, 159)'
        document.getElementById('innerweather').style.backgroundColor = 'rgb(119, 119, 119)'

        document.getElementById('bottombackground').style.clipPath = "polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)"

        for( let i=0;i<50;i++ ) {
            let rand = Math.random() + 0.5;
            makeCloud( rand, 159, 159, 159, 1 )
        }
        break;
      case 'Fog' :
      case 'Smoke' :
      case 'Ash' :

        document.getElementById('App').style.backgroundColor = 'rgb(100, 148, 237)'
        document.getElementById('bottombackground').style.backgroundColor = 'rgb(189, 189, 189)'
        document.getElementById('weather').style.backgroundColor = 'rgb(159, 159, 159)'
        document.getElementById('innerweather').style.backgroundColor = 'rgb(119, 119, 119)'

        document.getElementById('bottombackground').style.clipPath = "polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)"
        
        for( let i=0;i<30;i++ ) {
          let rand = Math.random() * 2 + 0.5;
          makeCloud( rand , 159, 159, 159, 4 )
        }
        break;
      case 'Mist' :

        document.getElementById('App').style.backgroundColor = 'rgb(100, 148, 237)'
        document.getElementById('bottombackground').style.backgroundColor = 'rgb(90, 138, 227)'
        document.getElementById('weather').style.backgroundColor = 'rgb(235, 235, 235)'
        document.getElementById('innerweather').style.backgroundColor = 'rgb(189, 189, 189)'

        document.getElementById('bottombackground').style.clipPath = "polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)"

        for( let i=0;i<30;i++ ) {
          let rand = Math.random() * 2 + 0.5;
          makeCloud( rand , 235, 235, 235, 6 )
        }
        break;
      case 'Haze' :
      case 'Dust' :
      case 'Sand' :

        document.getElementById('App').style.backgroundColor = 'rgb(100, 148, 237)'
        document.getElementById('bottombackground').style.backgroundColor = 'rgb(235, 215, 185)'
        document.getElementById('weather').style.backgroundColor = 'rgb(225, 205, 175)'
        document.getElementById('innerweather').style.backgroundColor = 'rgb(185, 165, 135)'

        document.getElementById('bottombackground').style.clipPath = "polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)"

        for( let i=0;i<30;i++ ) {
          let rand = Math.random() * 2 + 0.5;
          makeCloud( rand , 225, 205, 175, 4 )
        }
        break;
      default:

        document.getElementById('App').style.backgroundColor = 'rgb(100, 148, 237)'
        document.getElementById('bottombackground').style.backgroundColor = 'rgb(90, 138, 227)'
        document.getElementById('weather').style.backgroundColor = 'rgb(255, 235, 0)'
        document.getElementById('innerweather').style.backgroundColor = 'rgb(209, 189, 0)'

        document.getElementById('bottombackground').style.clipPath = "polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)"

        for( let i=0;i<10;i++ ) {
            let rand = Math.random() + 0.2;
            makeCloud( rand , 235, 235, 235, 1 )
        }
        break;
    }
}

export default Graphics;