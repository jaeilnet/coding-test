# [Gold II] 가장 긴 증가하는 부분 수열 2 - 12015 

[문제 링크](https://www.acmicpc.net/problem/12015) 

### 성능 요약

메모리: 134084 KB, 시간: 596 ms

### 분류

이분 탐색(binary_search), 가장 긴 증가하는 부분 수열: O(n log n)(lis)

### 문제 설명

<p style="user-select: auto;">수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.</p>

<p style="user-select: auto;">예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {<strong style="user-select: auto;">10</strong>, <strong style="user-select: auto;">20</strong>, 10, <strong style="user-select: auto;">30</strong>, 20, <strong style="user-select: auto;">50</strong>} 이고, 길이는 4이다.</p>

### 입력 

 <p style="user-select: auto;">첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000,000)이 주어진다.</p>

<p style="user-select: auto;">둘째 줄에는 수열 A를 이루고 있는 A<sub style="user-select: auto;">i</sub>가 주어진다. (1 ≤ A<sub style="user-select: auto;">i</sub> ≤ 1,000,000)</p>

### 출력 

 <p style="user-select: auto;">첫째 줄에 수열 A의 가장 긴 증가하는 부분 수열의 길이를 출력한다.</p>

