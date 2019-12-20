function setup() {
	createCanvas(200, 200);
	strokeWeight(2);
}
function draw() {
	var fechaHora = new Date();
	var horas = fechaHora.getHours();
	var minutos = fechaHora.getMinutes();
	var segundos = fechaHora.getSeconds();
	background(220);
	translate(100,100)
	for (var i=0;i<60;i++){
		if (i % 5 == 0) {
			stroke(0);
			line(0, -40, 0, -60);
		}
		if (i == (horas % 12 * 5)) {
			stroke(255,0,0);
			line(0, -40, 0, -70);
		}
		if (i == minutos) {
			stroke(0,0,255);
			line(0, -40, 0, -70);
		}
		if (i == segundos) {
			stroke(255);
			line(0, -40, 0, -60);
		}
		rotate(PI / 30.0);
	}
}