"use strict";
// 1) Par o impar
function parImpar() {
    const num = Number(document.getElementById("num").value);
    const res = num % 2 === 0 ? "Es par" : "Es impar";
    document.getElementById("res1").textContent = res;
}
// 2) Tiempo (MRUV simplificado)
function tiempo() {
    const v0 = Number(document.getElementById("vel").value);
    const a = Number(document.getElementById("acel").value);
    const d = Number(document.getElementById("dist").value);
    const t = (Math.sqrt(v0 * v0 + 2 * a * d) - v0) / a;
    document.getElementById("res2").textContent = `Tiempo: ${t.toFixed(2)} s`;
}
// 3) Precio con IVA (21%)
function precioIVA() {
    const precio = Number(document.getElementById("precio").value);
    const total = precio * 1.21;
    document.getElementById("res3").textContent = `Total: $${total.toFixed(2)}`;
}
// 4) MB a KB
function convertir() {
    const mb = Number(document.getElementById("mb").value);
    const kb = mb * 1024;
    document.getElementById("res4").textContent = `${kb} KB`;
}
// 5) Área cuadrado
function areaCuadrado() {
    const lado = Number(document.getElementById("lado").value);
    const area = lado * lado;
    const res = area > 25 ? "Mayor a 25" : "Menor o igual a 25";
    document.getElementById("res5").textContent = res;
}
// 6) Segundos del día
function segundos() {
    const hora = Number(document.getElementById("hora").value);
    const seg = hora * 3600;
    document.getElementById("res6").textContent = `${seg} segundos`;
}
// 7) Área triángulo (catetos)
function areaTriangulo() {
    const a = Number(document.getElementById("cat1").value);
    const b = Number(document.getElementById("cat2").value);
    const area = (a * b) / 2;
    document.getElementById("res7").textContent = `Área: ${area}`;
}
