import RegisterForm from "./components/RegisterForm/RegisterForm";
import RegisterHeader from "./components/RegisterHeader/RegisterHeader";

export default function RegisterPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto w-full max-w-140">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </main>
  );
}
