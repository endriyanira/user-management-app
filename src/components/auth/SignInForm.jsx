import React, { useState } from "react";
import Container from "../Container/Container";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const SignInForm = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (e, key) => {
    setSignInForm({ ...signInForm, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    alert("submitted");
  };

  return (
    <Container>
      <SignInFormHeader />
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        {/* email */}
        <TextInput
          label={"Email address"}
          htmlFor={"grid-email"}
          placeholder={"youremail@mail.com"}
          name={"email"}
          required={true}
          type={"email"}
          value={signInForm.email}
          handleOnChange={(e) => handleChangeForm(e, "email")}
        />
        {/* password */}
        <TextInput
          label={"Password"}
          htmlFor={"grid-password"}
          placeholder={"*******"}
          name={"password"}
          required={true}
          type={"password"}
          value={signInForm.password}
          handleOnChange={(e) => handleChangeForm(e, "password")}
        />
        {/* button submit */}
        <Button
          type={"submit"}
          text={"Sign In"}
          className={
            "h-[40px] w-full px-3 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md before:ease-in-out after:ease-in-out shadow-blue-300 shadow-md"
          }
        />
        {/* sign in with google */}
      </form>
    </Container>
  );
};

const SignInFormHeader = () => {
  return (
    <div className="mb-8">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Sign In</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Please enter you details.
      </p>
    </div>
  );
};

export default SignInForm;
