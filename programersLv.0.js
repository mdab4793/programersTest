//5월19일
//두수의곱
function solution(num1, num2) {
  var answer = 0;
  return num1 * num2;
}
//두수의차
function solution(num1, num2) {
  var answer = 0;
  return num1 - num2;
}
//몫구하기
function solution(num1, num2) {
  return Math.floor(num1 / num2);
}
//나이출력
function solution(age) {
  var answer = 2022 - age + 1;
  return answer;
}
//숫자비교하기
function solution(num1, num2) {
  if (num1 == num2) {
    return 1;
  } else {
    return -1;
  }
}
//나머지구하기
function solution(num1, num2) {
  var answer = -1;
  return num1 % num2;
}
//두수의합
function solution(num1, num2) {
  var answer = num1 + num2;
  return answer;
}
//두수의나눗셈
function solution(num1, num2) {
  var answer = (num1 / num2) * 1000;
  const result = Math.floor(answer);

  return result;
}
//각도기
function solution(angle) {
  if (0 < angle && angle < 90) {
    return 1;
  } else if (90 === angle) {
    return 2;
  } else if (90 < angle && angle < 180) {
    return 3;
  } else if (angle === 180) {
    return 4;
  }
}
//짝수의합
function solution(n) {
  let answer = 0;
  //i는 2
  //i는 n보다 작거나 같다.
  //i는 2를 더한값을 다시 i에할당하는 의미.(i=i+2)
  //i에 재할당되므로 i가 4,6,8이된다.
  //answer은 0 =+ i
  // 2 =+ i, 4=+i 이럭식으로된다.
  //2=+2, 2=+4 ...

  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }
  return answer;
}
//배열의 평균값
function solution(numbers) {
  var answer = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return answer / numbers.length;
}
//양꼬치
function solution(n, k) {
  //양꼬치
  const sheep = 12000;
  //음료수
  const drink = 2000;
  //서비스는 양꼬치 10개당 1개 서비스  Math.floor는 나눗셈이아니라 값을 정수로 반올림하고자 할때 사용(소수점버릴때사용)
  const service = Math.floor(n / 10);
  const a = (k - service) * drink;

  var answer = n * sheep + a;

  return answer;
}
//5월22일

//소문자로 바꾸기
function solution(myString) {
  var answer = myString.toLowerCase();
  return answer;
}
//문자열을 정수로 변환하기
function solution(n_str) {
  var answer = parseInt(n_str);
  return answer;
}
//정수부분
function solution(flo) {
  var answer = Math.floor(flo);
  return answer;
}

//n의배수
function solution(num, n) {
  if (num % n === 0) {
    return 1;
  } else {
    return 0;
  }
}

//공배수
function solution(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  } else {
    return 0;
  }
}
//flag에 따라 다른 값 반환하기
function solution(a, b, flag) {
  if (flag == true) {
    return a + b;
  }
  if (flag == false) return a - b;
}
//문자열로변환

function solution(n) {
  var answer = n.toString();
  return answer;
}
//대문자로바꾸기
function solution(myString) {
  var answer = myString.toUpperCase();
  return answer;
}
//배열뒤집기
function solution(num_list) {
  var answer = num_list.reverse();

  return answer;
}
//배열자르기
function solution(numbers, num1, num2) {
  const answer = numbers.slice(num1, num2 + 1);
  return answer;
}

//배열의 원소의 길이
//입출력 예 #1["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.
//입출력 예 #2 ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.
function solution(strlist) {
  var answer = strlist.map((element) => element.length);
  return answer;
}
