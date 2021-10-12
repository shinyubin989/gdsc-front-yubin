export const dummyCategoryName = (categoryNum) => {
  switch(categoryNum){
    case 1: return "자유게시판";
    case 2: return "비밀게시판";
    case 3: return "졸업생게시판";
    case 4: return "새내기게시판";
    case 5: return "시사 이슈";
    case 6: return "정보게시판";
    default: return;
  }
};

export const dummyPin = [
  {
      title: "자유게시판",
      isOn: true,
      isNew: true,
      id: "1",
  },
  {
      title: "비밀게시판",
      isOn: true,
      isNew: true,
      id: "2",
  },
  {
      title: "졸업생게시판",
      isOn: false,
      isNew: true,
      id: "3",
  },
  {
      title: "새내기게시판",
      isOn: true,
      isNew: true,
      id: "4",
  },
  {
      title: "시사 이슈",
      isOn: true,
      isNew: true,
      id: "5",
  },
  {
      title: "정보게시판",
      isOn: false,
      isNew: true,
      id: "6",
  },
];

export const dummyCategoryPosts = (categoryNum) => {
  switch(categoryNum) {
    case 1: 
      return [
        {
          id: "1",
          profileUrl: "",
          nick: "익명",
          date: "09/05 00:39",
          title: "gdsc 자유게시판 첫번째 게시글",
          contents: "자유게시판 첫번째 게시글의 내용입니다~~",
          category: "자유게시판",
          comments: 3,
          like: 0,
        },
      ];
    
    case 2:
      return [
        {
          id: "1",
          profileUrl: "",
          nick: "익명",
          date: "09/05 00:39",
          title: "gdsc 비밀게시판 첫번째 게시글",
          contents: "비밀게시판 첫번째 게시글의 내용입니다~~",
          category: "비밀게시판",
          comments: 2,
          like: 0,
        },
      ];

    case 3:
      return [
        {
          id: "1",
          profileUrl: "",
          nick: "익명",
          date: "09/05 00:39",
          title: "gdsc 졸업생게시판 첫번째 게시글",
          contents: "졸업생게시판 첫번째 게시글의 내용입니다~~",
          category: "졸업생게시판",
          comments: 3,
          like: 0,
        },
      ];

    case 4:
      return [
        {
          id: "1",
          profileUrl: "",
          nick: "익명",
          date: "09/05 00:39",
          title: "gdsc 새내기게시판 첫번째 게시글",
          contents: "새내기게시판 첫번째 게시글의 내용입니다~~",
          category: "새내기게시판",
          comments: 23,
          like: 30,
        },
      ];
    
    case 5:
      return [
        {
          id: "1",
          profileUrl: "",
          nick: "익명",
          date: "09/05 00:39",
          title: "gdsc 시사이슈게시판 첫번째 게시글",
          contents: "시사이슈게시판 첫번째 게시글의 내용입니다~~",
          category: "시사이슈게시판",
          comments: 3,
          like: 10,
        },
      ];

    case 6:
      return [
        {
          id: "1",
          profileUrl: "",
          nick: "익명",
          date: "09/05 00:39",
          title: "gdsc 정보게시판 첫번째 게시글",
          contents: "정보게시판 첫번째 게시글의 내용입니다~~",
          category: "정보게시판",
          comments: 0,
          like: 0,
        },
      ];

    default:
      return;
  }
};




/*
[
  {
    profileUrl: "",
    nick: "익명",
    date: "09/05 00:39",
    title: "gdsc 자유게시판 첫번째 게시글",
    contents: "자유게시판 첫번째 게시글의 내용입니다~~",
    category: "자유게시판",
    comments: 3,
    like: 0,
  },
];

export const dummySecretCategoryPosts = [
  {
    profileUrl: "",
    nick: "익명",
    date: "09/05 00:39",
    title: "gdsc 비밀게시판 첫번째 게시글",
    contents: "비밀게시판 첫번째 게시글의 내용입니다~~",
    category: "비밀게시판",
    comments: 2,
    like: 0,
  },
];
export const dummyGraduateCategoryPosts = [
  {
    profileUrl: "",
    nick: "익명",
    date: "09/05 00:39",
    title: "gdsc 졸업생게시판 첫번째 게시글",
    contents: "졸업생게시판 첫번째 게시글의 내용입니다~~",
    category: "졸업생게시판",
    comments: 3,
    like: 0,
  },
];
export const dummyFreshmanCategoryPosts = [
  {
    profileUrl: "",
    nick: "익명",
    date: "09/05 00:39",
    title: "gdsc 새내기게시판 첫번째 게시글",
    contents: "새내기게시판 첫번째 게시글의 내용입니다~~",
    category: "새내기게시판",
    comments: 23,
    like: 30,
  },
];
export const dummyIssueCategoryPosts = [
  {
    profileUrl: "",
    nick: "익명",
    date: "09/05 00:39",
    title: "gdsc 시사이슈게시판 첫번째 게시글",
    contents: "시사이슈게시판 첫번째 게시글의 내용입니다~~",
    category: "시사이슈게시판",
    comments: 3,
    like: 10,
  },
];
export const dummyInformationCategoryPosts = [
  {
    profileUrl: "",
    nick: "익명",
    date: "09/05 00:39",
    title: "gdsc 정보게시판 첫번째 게시글",
    contents: "정보게시판 첫번째 게시글의 내용입니다~~",
    category: "정보게시판",
    comments: 0,
    like: 0,
  },
];

*/



export const dummyHot = [
  {
    title: "나 오늘 생일이다",
    date: "14:18",
    like: 10,
    comments: 20,
  },
  {
    title: "ITM 너무 좋은 학과인듯",
    date: "15:30",
    like: 20,
    comments: 10,
  },
  {
    title: "집가고 싶다",
    date: "00:00",
    like: 101,
    comments: 5,
  },
  {
    title: "여자친구랑 헤어졌다 ㅜㅜ",
    date: "20:01",
    like: 30,
    comments: 5,
  },
];

export const dummyPin = [
  {
    title: "자유게시판",
    isOn: true,
    isNew: true,
  },
  {
    title: "비밀게시판",
    isOn: true,
    isNew: true,
  },
  {
    title: "졸업생게시판",
    isOn: false,
    isNew: true,
  },
  {
    title: "새내기게시판",
    isOn: true,
    isNew: true,
  },
  {
    title: "시사 이슈",
    isOn: true,
    isNew: true,
  },
  {
    title: "정보게시판",
    isOn: false,
    isNew: true,
  },
];

export const dummyMessage = [
  {
    nick: "익명",
    date: "09/10 19:06",
    title: "GDSC 모집 기간이 지났기 때문에 지금은 지원이 힘들 것 같습니다.",
    id: "2",
  },
  {
    nick: "익명",
    date: "09/10 19:06",
    title: "gdsc는 열정만 있으시다면 누구든 지원가능합니다.",
    id: "3",
  },
  {
    nick: "익명",
    date: "07/20 15:06",
    title: "죄송합니다. 방금 다른 사람이 사갔습니다.",
    id: "5",
  },
  {
    nick: "익명",
    date: "07/10 12:06",
    title: "싫어요. 하기 싫어요.",
    id: "6",
  },
  {
    nick: "GDSC 리드",
    date: "06/15 20:02",
    title: "지원해주시면 감사하겠습니다.",
    id: "8",
  },
];

export const dummyDetailMessage = [
  {
    isFrom: false,
    date: "09/10 19:05",
    contents:
      "서울과학기술대학교 GDSC에서는 Machine Learning, Android, Web 총 3개의 커리큘럼중 하나를 선택한 다음 스터디를 진행합니다. 그 이후 토요일에는 멤버들이 선정한 주제로 스터디를 진행합니다.",
  },
  {
    isFrom: true,
    date: "09/10 19:00",
    contents: "GDSC에서는 주로 어떤일을 하나요?",
  },
  {
    isFrom: false,
    date: "09/10 18:00",
    contents: "Google Developer Student Club동아리 입니다.",
  },
  {
    isFrom: true,
    date: "09/10 15:00",
    contents: "GDSC란 무엇인가요?",
  },
];
