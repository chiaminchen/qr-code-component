import qrCodeImage from './assets/image-qr-code.png';

function App() {
  return (
    <main className="bg-white font-outfit w-[320px] p-4 rounded-[20px] shadow-card">
      <img className="rounded-[10px]" src={qrCodeImage} alt="QR code" />
      <section className="text-center px-4 py-6 flex flex-col gap-4">
        <h1 className="text-[22px]/[1.2] font-bold text-slate-dark">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[15px]/[1.4] tracking-[0.2px] text-slate-medium">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </section>
    </main>
  );
}

export default App;
