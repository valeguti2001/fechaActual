

function setup() {
  
	createCanvas(800, 400);
  angleMode(DEGREES);

}

function draw() {


	let elipseCntrR = 0;
	let elipseCntrG = 0;
	let elipseCntrB = 0;

	let elipseDerR = 0;
	let elipseDerG = 0;
	let elipseDerB = 0;

	let elipseIzqR = 0;
	let elipseIzqG = 0;
	let elipseIzqB = 0;

	let m = month();
	let d = day();
	let y = year();

	let h = hour();
	let min = minute();
	let s = second();
	let mil = millis();
	

  // h =< 5
	if ( s < 11 ) {
    // Noche
		background(39, 44, 82);

		elipseCntrR = 38;
		elipseCntrG = 77;
		elipseCntrB = 0;

		elipseDerR = 51;
		elipseDerG = 93;
		elipseDerB = 13;

		elipseIzqR = 68;
		elipseIzqG = 111;
		elipseIzqB = 27;

    // Color elipse satelite
    fill(244, 244, 244);
    //       X    Y  ancho alto
    ellipse(200, 100, 100, 100);
	}

  // h >= 6 && h <= 10
	else if ( s >= 12 && s <= 23 ) {
    // Mañana
		background(182, 224, 223);

		elipseCntrR = 121;
		elipseCntrG = 202;
		elipseCntrB = 45;

		elipseDerR = 147;
		elipseDerG = 213;
		elipseDerB = 85;

		elipseIzqR = 174;
		elipseIzqG = 228;
		elipseIzqB = 124;

    // Color elipse satelite
    fill(255, 244, 161);
    //       X    Y  ancho alto
    ellipse(200, 200, 100, 100);
	}

  // h >= 11 && h <= 16
  else if ( s >= 24 && s <= 35 ) {
    // Tarde
    background(97, 196, 224);

    elipseCntrR = 80;
    elipseCntrG = 161;
    elipseCntrB = 3;

    elipseDerR = 95;
    elipseDerG = 177;
    elipseDerB = 19;

    elipseIzqR = 114;
    elipseIzqG = 189;
    elipseIzqB = 43;

    // Color elipse satelite
    fill(246, 218, 60);
    //       X    Y  ancho alto
    ellipse(200, 100, 100, 100);
  }

  // h >= 17 && h <= 19
  else if ( s >= 36 && s <= 48 ) {
    // Tarde tarde
    background(55, 148, 175);

    elipseCntrR = 44;
    elipseCntrG = 90;
    elipseCntrB = 0;

    elipseDerR = 62;
    elipseDerG = 117;
    elipseDerB = 11;

    elipseIzqR = 85;
    elipseIzqG = 140;
    elipseIzqB = 33;

    // Color elipse satelite
    fill(219, 139, 48);
    //       X    Y  ancho alto
    ellipse(200, 250, 100, 100);
  }

  else {
    // Noche
    background(39, 44, 82);

    elipseCntrR = 38;
    elipseCntrG = 77;
    elipseCntrB = 0;

    elipseDerR = 51;
    elipseDerG = 93;
    elipseDerB = 13;

    elipseIzqR = 68;
    elipseIzqG = 111;
    elipseIzqB = 27;

    // Color elipse satelite
    fill(244, 244, 244);
    //       X    Y  ancho alto
    ellipse(200, 100, 100, 100);
  }



	// Que el borde de las elipses sea 0
	noStroke();

	// Color elipse cntr
	fill(elipseCntrR, elipseCntrG, elipseCntrB);
	//       X    Y  ancho alto
	ellipse(380, 425, 600, 300);

	// Color elipse der
	fill(elipseDerR, elipseDerG, elipseDerB);
	//       X    Y  ancho alto
	ellipse(700, 490, 800, 400);


	// Color elipse izq
	fill(elipseIzqR, elipseIzqG, elipseIzqB);
	//      X   Y  ancho alto
	ellipse(80, 460, 700, 400);



  // parde der
	// Color cuadrado der
	//   R  G  B  transparencia
	fill(0, 0, 0, 60);
	//    X   Y  ancho alto
	rect(400, 0, 400, 400);


  // textos parte der
  // color blanco
  fill(255);
  // tamaño del texto
  textSize(20);
  // pone el texto dia / mes / año, pos x pos y
  text('Día / Mes / Año', 540, 50);

  // pone la hora hora:min:seg:mil, pos x pos y
  text(h + ':' + min + ':' + s + ':' + mil, 545, 360);

  // tamaño de la fecha
  textSize(50);
  // pone la fecha d/m/y, pos x pos y
  text(d + '/' + m + '/' + y, 500, 100);



  // borde del reloj
  let colorBorde = 0;

  // circulo del fondo
  // grosor
  strokeWeight(8);
  // color
  stroke(255);
  // no tiene relleno
  noFill();
  //      X   Y  ancho alto
  ellipse(600, 225, 200, 200);


  // circulo pequeño, generado con el mouse
  // grosor
  strokeWeight(4);
  // color
  stroke(colorBorde);
  let end = map(mouseX, 0, width, 0, 360);
  arc(600, 225, 200, 200, 0, end);

  function keyTyped() {
    if (key === 'q') {
      colorBorde = 255;
    } else if (key === 'w') {
      colorBorde = 100;
    } else if (key === 'e') {
      colorBorde = 0;
    }
  }

  // reloj

  // Drogas y manecillas del reloj
  // Mover a la posición X y Y
  translate(600, 225);
  // Rotar las figuras 
  rotate(-90);


  // Grosor manecillas
  strokeWeight(4);
  noFill();


  // Color manecillas seg
  stroke(180, 4, 5);
  // Que recorra segun los seg 
  let secondAngle = map(s, 0, 60, 0, 360);
  push();
  // que rote segun los datos de los seg
  rotate(secondAngle);
  // Pos x, y, largo, ancho
  line(0, 0, 90, 0);
  pop();


  // Color manecillas min
  stroke(255, 130, 13);
  let minuteAngle = map(min, 0, 60, 0, 360);
  push();
  // que rote segun los datos de los min
  rotate(minuteAngle);
  // Pos x, y, largo, ancho
  line(0, 0, 70, 0);
  pop();


  // Color manecillas horas
  stroke(255, 242, 56);
  let hourAngle = map(h % 12, 0, 12, 0, 360);
  push();
  // que rote segun los datos de la hora
  rotate(hourAngle);
  // Pos x, y, largo, ancho
  line(0, 0, 50, 0);
  pop();


  // la pequeña bolita del centro del reloj
  // color blanco
  fill(255);
  // sin borde
  noStroke();
  // pos x y diametro alto diametro ancho
  ellipse(0, 0, 5, 5);

}

