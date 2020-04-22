---
layout: post
title: Dynamic Programing 1로 만들기(baekjoon online judge)
tag: algorithm,Dynamic Programing,baekjoon
---

# 문제

정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.

- X가 3으로 나누어 떨어지면, 3으로 나눈다.

- X가 2로 나누어 떨어지면, 2로 나눈다.

- 1을 뺀다.

정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.

---

## 바보인가?

우선 처음에 생각했을 때 단순히 3먼저 나누고 안되면 2로 나누고 1 빼면
최소 값을 만족하는거 아닌가 하고 생각했다.

```python
num = int(input())
answer = 0

for num > 0:
    if num % 3 == 0:
        num /= 3
        answer += 1
    elif num % 2 ==0:
        num /= 2
        answer += 1
    else:
        num -= 1
        answer += 1
print(answer)
```
하지만 이 방법은 문제가 있었는데 1로 빼고 3으로 나누는 경우가 더 빨리 되는 경우라면 어떨까? 그렇다고 다 1로 빼고 3으로 나누거나 2로 나누면 더 빠를까? 모두 예측일 뿐이고 실제 결과에서는 어떻게 될 지 모른다. 그냥 직접 다 해보자.

## Dynamic Programming

```python
num = int(input())
result = list()
result.append(set())
result[0].add((num,0))
check = True
temp = 0
while check:
    check = False
    result.append(set())
    for d in result[temp]:
        if d[0] != 1:
            if d[0] % 3 == 0:
                result[temp+1].add((d[0]//3,d[1] + 1))
            if d[0] % 2 == 0:
                result[temp+1].add((d[0]//2,d[1] + 1))
            result[temp+1].add((d[0]-1,d[1]+1))
            check = True
        else:
            check = False
            break
    temp = temp + 1

print(min(result[-1] | result[-2])[1])
```

백준에 예전 코드가 있어서 가져와 봤다. set으로 중복된는걸 방지하고 각 숫자 추가해서 계산하는 형식

## BFS로도 풀어보자

```python
def getMin(num):
    answer = 0
    q = list()
    q.append(num)
    visited = [False for i in range(1000001)]
    if num != 1:
        while True:
            answer += 1
            for i in range(len(q)):
                tmp = q.pop(0)
                if (not visited[tmp // 3]) and tmp % 3 == 0:
                    if tmp // 3 == 1:
                        return answer
                    else:
                        q.append(tmp//3)
                        visited[tmp//3] = True
                if (not visited[tmp// 2]) and tmp % 2 == 0:
                    if tmp //2 == 1:
                        return answer
                    else:
                        q.append(tmp//2)
                        visited[tmp//2] = True
                if (not visited[tmp -1]):
                    if tmp -1 == 1:
                        return answer
                    else:
                        q.append(tmp-1)
                        visited[tmp-1] = True
                visited[tmp] = True
    else:
        return answer

num = int(input())
print(getMin(num))
```

BFS를 이용해 모든 경우를 체크하고 넘어가는 형태로 visited에 방문했는지 확인하고 안하면 큐에 추가 하는 형태이다. 백준은 queue 모듈이 사용 안되는지 런타임 오류가 난다
그냥 리스트로 하고 `pop(0)` 으로 큐 구현했다.