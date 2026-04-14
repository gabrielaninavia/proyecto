// 1) Par o impar
function parImpar(): void {
  const num = Number((document.getElementById("num") as HTMLInputElement).value);

  document.getElementById("r1")!.textContent =
    num % 2 === 0 ? "Par" : "Impar";
}

// 2) Primos con Math.sqrt + array
function primos(): void {
  let x = Number((document.getElementById("x") as HTMLInputElement).value);
  const n = Number((document.getElementById("n") as HTMLInputElement).value);

  let lista: number[] = [];

  while (lista.length < n) {
    let esPrimo = true;

    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        esPrimo = false;
        break;
      }
    }

    if (x > 1 && esPrimo) {
      lista.push(x);
    }

    x++;
  }

  document.getElementById("r2")!.textContent = lista.join(", ");
}

// 3) Es dígito
function digito(): void {
  const c = (document.getElementById("char") as HTMLInputElement).value;

  const esNumero = c >= "0" && c <= "9";

  document.getElementById("r3")!.textContent =
    esNumero ? "Es dígito" : "No es dígito";
}

// 4) Peso en la luna
function luna(): void {
  const peso = Number((document.getElementById("peso") as HTMLInputElement).value);

  const resultado = peso * 0.17;

  document.getElementById("r4")!.textContent =
    `Peso en la luna: ${resultado.toFixed(2)} kg`;
}

// 5) Billetes con array
function cambio(): void {
  let dinero = Number((document.getElementById("dinero") as HTMLInputElement).value);

  const valores = [1000, 500, 200, 100, 50, 20, 10, 5, 1];
  let resultado = "";

  for (let v of valores) {
    let cantidad = Math.floor(dinero / v);

    if (cantidad > 0) {
      resultado += `${cantidad} de ${v} | `;
      dinero = dinero % v;
    }
  }

  document.getElementById("r5")!.textContent = resultado;
}