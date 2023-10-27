export default function about() {
  return `
  <h1 >about</h1>
  <p>Welcome to the about page!</p>
  <div>
      <button onclick="router('/main.html')">Home</button>
      <button onclick="router('/about')">About</button>
      <button onclick="router('/portFolio')">portFolio</button>
    </div>
  `;
}
