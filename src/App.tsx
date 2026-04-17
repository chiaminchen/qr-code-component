import qrCodeImage from './assets/image-qr-code.png';

function App() {
  return (
    <main>
      <article className="font-outfit rounded-card shadow-card w-full max-w-xs bg-white p-4">
        <img
          className="rounded-image w-full"
          src={qrCodeImage}
          alt="QR code leading to Frontend Mentor"
          width="288"
          height="288"
        />
        <div className="flex flex-col gap-4 px-4 py-6 text-center">
          <h1 className="text-title text-slate-dark leading-tight font-bold">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-body text-slate-medium leading-relaxed tracking-wider">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </article>
    </main>
  );
}

export default App;
