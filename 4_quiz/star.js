'use strict';

window.onload = function () {
  // 바깥은 행, 안은 열
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      document.write('*');
    }
    document.write('<br>');
  }

  document.write('<hr>');
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  // for(let i=5;i>0;i--){
  //   for(let j=0;j<i;j++){
  //     document.write("*")
  //   }
  //   document.write("<br>")
  // }

  for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      document.write('&nbsp');
    }
    for (let k = 0; k < i + 1; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  for (let i = 0; i < 5; i++) {
    for (let k = 0; k < i; k++) {
      document.write('&nbsp');
    }
    for (let j = 0; j < 5 - i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 4 - i; k++) {
      document.write('&nbsp');
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      document.write('&nbsp');
    }
    for (let k = 0; k < 9 - 2 * i; k++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  for (let i = 0; i < 5; i++) {
    for (let j = 4; j > i; j--) {
      document.write('&nbsp');
    }
    for (let j = 0; j <= i; j++) {
      document.write('*');
    }
    for (let j = 1; j <= i; j++) {
      document.write('*');
    }

    document.write('<br>');
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
      document.write('&nbsp');
    }
    for (let j = 4; j > i; j--) {
      document.write('*');
    }
    for (let j = 3; j > i; j--) {
      document.write('*');
    }
    document.write('<br>');
  }
};
