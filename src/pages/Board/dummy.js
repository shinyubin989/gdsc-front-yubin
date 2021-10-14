export const categoryList = [
  {
    id:1,
    categoryName: "자유게시판",
    
  },
  {
    id:2,
    categoryName: "비밀게시판",
  },
  {
    id:3,
    categoryName: "졸업생게시판",
  },
  {
    id:4,
    categoryName: "새내기게시판",
  },
  {
    id:5,
    categoryName: "시사이슈게시판",
  },
  {
    id:6,
    categoryName: "정보게시판",
  },
]


export const dummyPost = [
  {
    id: 1,
    nickname: "익명",
    date: "10/07 17:13",
    title: "gdsc 게시글 첫번째",
    content:"gdsc 첫번 째 게시글 입니다. 모두들 만나서 반가워요",
    to: "/board/detail/1",
    like: 0,
    comment: [
      {
        id:1,
        nickname: "익명",
        comment: "gdsc very good",
        date: "10/07 17:13",
        like: 2,
      },
      {
        id:2,
        nickname: "익명",
        content: "그쵸 gdsc재밌어요",
        date: "10/07 17:13",
        like: 0,
      },
      {
        id:3,
        nickname: "익명",
        content: "나두할걸~",
        date: "10/07 17:13",
        like: 0,
      },
    ]
  },
];
