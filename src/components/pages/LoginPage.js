import Button from "components/button/Button";
import Input from "components/input/Input";
import Label from "components/input/Label";
import LayoutSign from "components/layout/LayoutSign";
import LogoBookWorm from "components/logo/LogoBookWorm";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const naviagte = useNavigate();
  const {
    control, //mac dinh
    handleSubmit, //sử dụng để lấy value
    formState: { errors, isValid },
    watch,
    reset,
    register,
    //mac dinh
  } = useForm({
    mode: onchange,
    // defaultValues: {
    //   status: status.approve,
    // },
    // resolver: yupResolver(schema),
  });
  const handleLogin = (value) => {
    console.log("🚀 ~ file: loginPage.js:22 ~ handleLogin ~ value", value);
  };
  return (
    <LayoutSign>
      <form
        className="bg-white p-5 shadow-xl rounded w-full"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="mb-6">
          <Label className={"mb-2"} name="email">
            Email
          </Label>
          <Input
            name={"email"}
            type="email"
            placeholder={"Please enter your email"}
            control={control}
          ></Input>
        </div>
        <div className="mb-6">
          <Label className={"mb-2"} name="password">
            Password
          </Label>
          <Input
            name={"password"}
            placeholder={"******************"}
            control={control}
            type={"password"}
          ></Input>
        </div>
        <Button className={"w-full"} type="submit">
          Sign in
        </Button>
        <p className="font-medium cursor-pointer text-sm text-primary hover:text-red-800 text-center transition-all py-5 border-b">
          Forgot Password?
        </p>
        <p className="text-center">
          <Button
            className={"my-5"}
            bgColor="light-primary"
            onClick={() => naviagte("/register")}
          >
            Create new account
          </Button>
        </p>
      </form>
    </LayoutSign>
  );
};

export default LoginPage;
