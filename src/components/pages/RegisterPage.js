import Button from "components/button/Button";
import Input from "components/input/Input";
import Label from "components/input/Label";
import LayoutSign from "components/layout/LayoutSign";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerService } from "services/userService";

const RegisterPage = () => {
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
  const handleReigster = async (value) => {
    const res = await registerService(value);
    console.log("🚀 ~ file: RegisterPage.js:29 ~ handleReigster ~ res:", res);
  };
  return (
    <LayoutSign>
      <form
        className="w-full p-5 bg-white rounded shadow-xl"
        onSubmit={handleSubmit(handleReigster)}
      >
        <div className="mb-6">
          <Label className={"mb-2"} name="full_name">
            Full name
          </Label>
          <Input
            name={"full_name"}
            placeholder={"Enter full name..."}
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
        <div className="mb-6">
          <Label className={"mb-2"} name="address">
            Address
          </Label>
          <Input
            name={"address"}
            placeholder={"Please enter your address"}
            control={control}
          ></Input>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <div className="mb-6">
            <Label className={"mb-2"} name="email">
              Email
            </Label>
            <Input
              name={"email"}
              placeholder={"Enter email..."}
              control={control}
            ></Input>
          </div>
          <div className="mb-6">
            <Label className={"mb-2"} name="phone_number">
              Phone
            </Label>
            <Input
              name={"phone_number"}
              placeholder={"Enter phone..."}
              control={control}
            ></Input>
          </div>
        </div>
        <Button className={"w-full"} type="submit">
          Sign up
        </Button>
        <p className="py-4 text-sm font-medium text-center transition-all border-b cursor-pointer text-primary hover:text-red-800"></p>
        <p className="text-center">
          <Button
            className={"my-5"}
            bgColor="light-primary"
            onClick={() => naviagte("/login")}
          >
            You already have an account ?
          </Button>
        </p>
      </form>
    </LayoutSign>
  );
};

export default RegisterPage;
