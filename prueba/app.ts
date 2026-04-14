
function parImpar(): void {
  const num = Number((document.getElementById("num") as HTMLInputElement).value);
  const res = num % 2 === 0 ? "Es par" : "Es impar";
  document.getElementById("res1")!.textContent = res;
}

function tiempo(): void {
  const v0 = Number((document.getElementById("vel") as HTMLInputElement).value);
  const a = Number((document.getElementById("acel") as HTMLInputElement).value);
  const d = Number((document.getElementById("dist") as HTMLInputElement).value);

  const t = (Math.sqrt(v0 * v0 + 2 * a * d) - v0) / a;

  document.getElementById("res2")!.textContent = `Tiempo: ${t.toFixed(2)} s`;
}

function precioIVA(): void {
  const precio = Number((document.getElementById("precio") as HTMLInputElement).value);
  const total = precio * 1.21;

  document.getElementById("res3")!.textContent = `Total: $${total.toFixed(2)}`;
}

function convertir(): void {
  const mb = Number((document.getElementById("mb") as HTMLInputElement).value);
  const kb = mb * 1024;

  document.getElementById("res4")!.textContent = `${kb} KB`;
}

function areaCuadrado(): void {
  const lado = Number((document.getElementById("lado") as HTMLInputElement).value);
  const area = lado * lado;

  const res = area > 25 ? "Mayor a 25" : "Menor o igual a 25";
  document.getElementById("res5")!.textContent = res;
}

function segundos(): void {
  const hora = Number((document.getElementById("hora") as HTMLInputElement).value);

  const seg = hora * 3600;

  document.getElementById("res6")!.textContent = `${seg} segundos`;
}

function areaTriangulo(): void {
  const a = Number((document.getElementById("cat1") as HTMLInputElement).value);
  const b = Number((document.getElementById("cat2") as HTMLInputElement).value);

  const area = (a * b) / 2;

  document.getElementById("res7")!.textContent = `Área: ${area}`;
}