export default function Home() {
  return `
    <h1>Home</h1>
    <p>풀스택을 지향하는 개발자 김민승의 개인 페이지입니다!</p>
    <div>
        <button onclick="router('/about')">About</button>
        <button onclick="router('/portFolio')">portFolio</button>
      </div>
    `;
}
