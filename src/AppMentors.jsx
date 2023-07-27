import React, { useReducer } from "react";
import { personReducer } from "./reducer/person-reducer";

const init = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};

export default function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, init);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          dispatch({ type: "updated", prev, current });
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt(`누구를 추가하고싶으신가요?`);
          const title = prompt(`그분의 직업은?`);
          dispatch({ type: "added", name, title });
        }}
      >
        멘토 추가
      </button>
      <button
        onClick={() => {
          const name = prompt(`누구를 삭제하고싶으신가요?`);
          dispatch({ type: "deleted", name });
        }}
      >
        멘토 삭제
      </button>
    </div>
  );
}
