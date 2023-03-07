export default function Home() {
  return (
    <main className="chat-container">
      <p className="sender"></p>
      <p className="receiver"></p>
      <form>
        <input type="text" placeholder="Enter message here" />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
