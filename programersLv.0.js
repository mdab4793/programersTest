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
//flag에 따라 다른 값 반환하기
function solution(a, b, flag) {
  if (flag == true) {
    return a + b;
  }
  if (flag == false) return a - b;
}
