import LoginForm from "@/app/Components/LoginForm";
import { useRouter } from "next/router";
export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // Handle successful login, if needed
  };

  const redirectToAdmin = () => {
    router.push("/admin");
  };

  const redirectToDepartment = (departmentId: string) => {
    router.push(`/department/${departmentId}`);
  };

  return (
    <div>
      <LoginForm
        onLoginSuccess={handleLoginSuccess}
        redirectToAdmin={redirectToAdmin}
        redirectToDepartment={redirectToDepartment}
      />
    </div>
  );
}
