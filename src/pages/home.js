export default function Home() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="chat-container">
      <div className="sender">
        <p>I have sent a message</p>
      </div>
      <div className="receiver">
        <p>
          I have received the message jsjsj sj sjsjsj jsjs jsj kssks keldede
          lalkasnks{" "}
        </p>
      </div>
      <form id="chat-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter message here" />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
