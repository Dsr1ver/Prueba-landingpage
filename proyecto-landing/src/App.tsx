import { Header } from "./components/header";

function App() {
  return (
    <main className="border border-white w-[375px] m-auto">
      <section className="bg-Navy-850 p-6 h-[420px]">
        <Header />
        <img
          src="/public/images/illustration-intro.png"
          alt="intro illustration"
        />
        <img src="/public/images/bg-curvy-mobile.svg" alt="bg curvy mobile" />
      </section>
    </main>
  );
}

export default App;
