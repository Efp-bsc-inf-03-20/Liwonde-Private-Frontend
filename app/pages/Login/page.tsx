'use client';
import LoginForm from "@/app/Components/LoginForm";
import { useRouter ,usePathname,useSearchParams} from "next/navigation";
export default function LoginPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleLoginSuccess = () => {
    console.log("Login successful")
  };
  const redirectToAdmin = () => {
    router.push("/pages/dashboard");
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
