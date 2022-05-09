function esperarPor(tempo) {
  const futuro = Date.now() + tempo;
  while (Date.now() < futuro) {}
}

//primeiro experimento (fila de execução)
setTimeout(() => console.log("Exec #01"), 8000);
setTimeout(() => {
  esperarPor(300);
  console.log("Exec #02");
}, 300); //prioridade

//stack
esperarPor(5000); // espera 5 segundos
console.log("Fim!!!");

/**
 * anotações;
 * 1.   Atraves de uma simples aplicação entendemos como funciona o setTimeout entre stack e queue.
 *
 * 2.   Neste outro modelo percebo em runtime que o setTimeout é executado na fila de execução (event queue).
 * 
 * 3.   Nesta aplicação interpretador executa 5 segundos da stack, logo depois que a stack estiver vazia, 
 *      em runtime executa no event queue 3 segundos e depois executa a proxima função (4 segundos).
 * 
 * 4.   Assim a ordem de prioridade é:
 *      a.  fim!!!
 *      b.  Exec #02
 *      c.  Exec #01
 */
