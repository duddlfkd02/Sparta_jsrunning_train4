//2. 스코프

//1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName() {
  var name = "yuno2";
  function a() {
    console.log(name);
  }
  return a();
}

myName(); // 출력값: yuno2
//이유: name 변수에 yuno2가 할당되고 두번째 함수 a 가 실행되면서 할당된 yuno2가 출력된다.

//2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
  var x = 1;

  if (true) {
    var x = 2;
  }

  console.log(x);
}

test(); // 출력값: 2
//이유 : var는 재선언이 가능하기 때문에 처음에 1을 할당하였다고 해도 if문에서 2로 재선언 해주었기 때문에 2가 출력된다.

//3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj = {
  name: "yuno",
  method: function () {
    const arrow = () => {
      console.log(`화살표 함수 : ${this.name}`);
    };
    function normal() {
      console.log(`일반 함수 : ${this.name}`);
    }
    arrow();
    normal();
  },
};

nameObj.method();
//화살표 함수 : yuno
// 일반 함수 : undefined

// function의 this는 명시해주지 않으면 항상 전역객체를 나타낸다.
// 늘 전역객체를 바라보는 현상을 막기 위해 나온 화살표함수로 호출하면 지정되지 않고 this자체가 없다.
// 따라서 상위에서 참조하여 결과를 보여주게 된다.
