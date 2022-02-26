### Figma 참조 모바일웹 쇼핑몰 [사이트](https://franz0406.github.io/mobile-shop/)

모바일 제작시 이미지 크기 중요! 제공된 이미지의 2배 혹은 그 이상도 준비 되어야 한다.  

# Input 태그 pattern  

스크립트 없이 HTML5 간단한 핸드폰 번호 입력 패턴 (IE 9이상 지원)  

`pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"`  

참고 사이트 [w3schools.com](https://www.w3schools.com/tags/att_input_pattern.asp)

---

# window.history() - 페이지 뒤로가기

웹 페이지에서 페이지뒤로가기나 앞으로가기 와 같은 기능.

```javascript
// 사용 예시
const goBack = document.getElementById('go-back');
goBack.addEventListener('click', ()=>{ window.history.back() });
```
- history.goback()  : 페이지 뒤로
- history.forward() : 페이지 앞으로
- history.go(-1)    : 페이지 뒤로 1
- history.go(1)     : 페이지 앞으로 1  

사용자가 어떠한 경로로 페이지에 접근하였든 히스토리 내역 체크!
```javascript
// history.length 의 기본값 1

element.addEventListener('click', (e) => {
    e.preventDefault();
    if(window.history.length > 1) {
        window.history.back();
        console.log("히스토리 있음");         
    } else {
        window.location.href = "";
        console.log("히스토리 없음");
    }
});
```
### 뒤로가기를 눌렀거나 히스토리를 감지해야 하는 경우 !!
```javascript
// BFCache 작동을 판단할 수 있는 이벤트 [ pageshow / pagehide ]
window.onpageshow = function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type == 2)){
        console.log('BFCahe로부터 복원됨');
    } else {
        console.log('새로 열린 페이지');
    }    
};
```

### 특정 영역 터치 드래그 이벤트 막기 
```javascript
document.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive:false }); 
```



