function fn5(params) {
  console.log("timeout");
}

function fn4(params) {
  fn5();
}

function fn3() {
  setTimeout(() => fn4(), 8000);
  console.log("fn3");
}

function fn2() {
  fn3();
}

function fn1() {
  fn2();
}

function main() {
  fn1();
}

main();
console.log("Fim");

/**
 * anotações;
 * 1.  Atraves de uma simples aplicação entendemos como funciona o setTimeout entre stack e queue.
 * 
 * 2.  O "setTimeout" é metodo que chama uma função que executa após um tempo determinado. Assim quando o setTimeout é executado,
 *     o programa é pausado e o setTimeout é colocado na fila de execução (event queue).
 * 
 * 3. Apos executar o setTimeout, o programa é retornado para a execução. Assim liberando a fila de execução para a proxima função.
 */
