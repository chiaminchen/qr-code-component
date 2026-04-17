import qrCodeImage from './assets/image-qr-code.png';

function App() {
  return (
    <main>
      <article className="bg-white font-outfit w-full max-w-xs p-4 rounded-card shadow-card">
        <img
          className="rounded-image w-full"
          src={qrCodeImage}
          alt="QR code leading to Frontend Mentor"
          width="288"
          height="288"
        />
        <div className="text-center px-4 py-6 flex flex-col gap-4">
          <h1 className="text-title leading-tight font-bold text-slate-dark">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-body leading-relaxed tracking-wider text-slate-medium">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </article>
    </main>
  );
}

export default App;
