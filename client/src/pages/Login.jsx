// McgPr7oX7v1mMcbN
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [showPassword, setShowPassword] = useState(false);

  const [isLoginTab, setIsLoginTab] = useState(true);

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  console.log("Users Login Data is : ", loginData);
  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup successful.");
    }
    if (registerError) {
      toast.error(registerError.data.message || "Signup Failed");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful.");
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError.data.message || "login Failed");
    }
  }, [
    loginIsLoading,
    registerIsLoading,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);

  return (
    <div className="flex items-center w-full justify-center custom_background min-h-screen ">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle className="text-center font-extrabold text-2xl my-1">
                Create an Account
              </CardTitle>
              <CardDescription className="text-center text-sm text-gray-500 mb-6">
                Let's get you all set up so you can start your learnin journey!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Eg. patel"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Eg. patel@gmail.com"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>

                <div style={{ position: "relative" }}>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={signupInput.password}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    placeholder="Eg. xyz"
                    required="true"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-5">
              <Button
                className="w-full"
                disabled={registerIsLoading}
                onClick={() => handleRegistration("signup")}
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Signup"
                )}
              </Button>

              <TabsList className="w-full ">
                <TabsTrigger
                  value="login"
                  className="w-full"
                  onClick={() => setIsLoginTab(false)}
                >
                  Already Have an Account ?{" "}
                  <span className="ml-1 text-blue-600 font-bold">SignIn</span>
                </TabsTrigger>
              </TabsList>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="text-center font-extrabold text-lg my-1">
                Welcome Back!
              </CardTitle>
              <CardDescription className="text-center text-sm text-gray-500 mb-5">
                Welcome back! Please fill your details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="Eg. patel@gmail.com"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <div style={{ position: "relative" }}>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginInput.password}
                    onChange={(e) => changeInputHandler(e, "login")}
                    placeholder="Eg. xyz"
                    required="true"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-5">
              <Button
                className="w-full"
                disabled={loginIsLoading}
                onClick={() => handleRegistration("login")}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
              <TabsList className="w-full ">
                <TabsTrigger value="signup" className="w-full">
                  Don't have an account?{" "}
                  <span className="ml-1 text-blue-600 font-bold">SignUp</span>
                </TabsTrigger>
              </TabsList>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Login;
