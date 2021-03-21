import LoginModal from "./Auth/LoginModal";
import RegisterModal from "./Auth/RegisterModal";

export default function LoginRegisterPage() {
  return (
    <div className="login-page">
      <LoginModal />
      <RegisterModal />
    </div>
  );
}
