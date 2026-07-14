import LoginBanner from "./components/LoginBanner/LoginBanner";
import LoginForm from "./components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-12">
      <LoginBanner />
      <LoginForm />
    </div>
  );
}
