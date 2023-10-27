export default function portFolio() {
  return `
  <h1>portFolio</h1>
  <p>Welcome to the portFolio page!</p>
  <div>
      <button onclick="router('/about')">About</button>
      <button onclick="router('/portFolio')">portFolio</button>
    </div>
  `;
}
