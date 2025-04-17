const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_xx':
      p.innerHTML = `<iframe src='./demo/w01_dom_xx/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_dom_xx':
      p.innerHTML = `<iframe src='./demo/w02_dom_xx/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_xx':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_xx/tictactoe_xx.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_xx':
      p.innerHTML = `<iframe src='./demo/w03_basics_xx/p1_xx/p1_xx.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_xx':
      p.innerHTML = `<iframe src='./demo/w04_basics_xx/p2_xx/p2_xx.html' width="100%" height="100%" />`;
      break;
  }
}

function showQuiz1(item) {
  switch (item) {
    case 'p1_86':
      p.innerHTML = `<iframe src='./exams/quiz1_86/p1_86/src/p1_86.html' width='100%' height='100%' />`;
      break;
    case 'p2_86':
      p.innerHTML = `<iframe src='./exams/quiz1_86/p2_86/src/p2_86.html' width='100%' height='100%' />`;
      break;
    case 'p3_86':
      p.innerHTML = `<iframe src='./exams/quiz1_86/p3_86/p3_86.html' width="100%" height="100%" />`;
      break;
    case 'p4_86':
      p.innerHTML = `<iframe src='./exams/quiz1_86/p4_86/p4_86.html' width="100%" height="100%" />`;
      break;
  }
}
