![projects_youtube](https://user-images.githubusercontent.com/66510673/167373438-956a6691-4268-4ad1-b1c7-64a57294d272.jpg)

# Youtube Clone Coding
### **Live Demo :** https://hailie-youtube.netlify.app/

## **Description**
- Youtube에서 제공하는 API를 이용한 클론 코딩 프로젝트입니다.
- 검색, 인기 영상, 동영상 재생을 구현 했습니다. 

1. Skills: React, React Router, PostCSS
2. Use: Postman, Youtube data APIs, axios
3. Deploy: Netlify

## **How to Use**
![01](https://user-images.githubusercontent.com/66510673/167383919-87ccf8ba-b0e4-4ede-8b69-c58da5a1b32d.gif)
- 보고 싶은 인기 동영상을 클릭해서 재생해보세요!

![02](https://user-images.githubusercontent.com/66510673/167383284-317cd68d-f70d-4305-869d-88781f0ab2cd.gif)
- 보고 싶은 영상이 따로 있다면 상단 검색창에 검색해보세요!

![03-2](https://user-images.githubusercontent.com/66510673/167383855-e60829a8-c75e-4115-bdff-8e83387d0928.gif)
- 모바일 기기에서도 언제든지 영상을 재생할 수 있습니다!

## **About the Project**
1. popular 목록 API이용해서 보여주기
<img width="433" alt="스크린샷 2022-05-09 오후 7 39 03" src="https://user-images.githubusercontent.com/66510673/167393958-e0b16a17-6e8c-4d53-ba7f-b111a0dd766d.png">
- 포스트맨 사용해서 api 갖고오기 

2. 검색 기능 구현
- 클릭했을때(onClick 함수), Enter키를 눌렀을때(onKeyPress 함수) 각각 함수에 handleSearch 함수를 만들어 동일하게 검색기능이 부여되도록 만듦
```
  ({ onSearch }) => {
    const inputRef = useRef();
    const handleSearch = () => {
      const value = inputRef.current.value;
      // console.log(value);
      onSearch(value);
    }
    const onClick = () => {
      console.log('onClick');
      handleSearch();
    };
    
    const onKeyPress = (event) => {
      console.log('onKeyPress');
      if(event.key === 'Enter'){
        handleSearch();
      }
    };
```

<img width="906" alt="스크린샷 2022-05-09 오후 9 05 25" src="https://user-images.githubusercontent.com/66510673/167406411-9042375a-5cda-459a-b7cb-c8a02eacd662.png">
- query값을 받아온다

3. 검색 기능 리팩토링 
<img width="244" alt="image" src="https://user-images.githubusercontent.com/66510673/167405104-c8624a93-37bc-404c-bd92-8e4c2ac7a172.png">
- app 컴포넌트에 네트워크 통신 로직과 중요 키가 담겨있으므로 보안상의 문제 등 으로 따로 네트워크 통신 로직을 처리 할 수 있도록 한다. 

<img width="590" alt="스크린샷 2022-05-09 오후 9 01 09" src="https://user-images.githubusercontent.com/66510673/167406129-f2316500-cb79-40f0-929c-9950eae939ca.png">
<img width="245" alt="스크린샷 2022-05-09 오후 9 03 21" src="https://user-images.githubusercontent.com/66510673/167406138-915ad582-a480-4843-98d5-55146a9c3adb.png">
<img width="321" alt="image" src="https://user-images.githubusercontent.com/66510673/167406533-76d00f44-f7e9-4119-8ed4-1625d89eb309.png">


## Future scope
- channel Id 받아와 타이틀 옆에 channel 썸네일 업데이트 하기 
- 다크모드, 라이트모드 전환 가능 하도록 하기 

