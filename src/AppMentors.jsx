import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
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
  });

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
          let index;
          person.mentors.forEach((el, i) => {
            if (el.name === prev) index = i;
          });
          if (index === undefined) {
            alert("이름을 다시입력하시오");
            return;
          }
          let result = { ...person };
          result.mentors[index].name = current;
          setPerson({ ...result });
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}
