import { Button, Input, Island } from "@adev/ui-kit";
import { Navbar } from "../../components/Navbar/Navbar";
import style from "./Authorization.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthorizationForm {
  name: string;
  email: string;
}

export const Authorization = () => {
  const [form, setForm] = useState<Partial<AuthorizationForm>>({});
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <Island className={style.island}>
        <form
          className={style.container}
          onSubmit={(event) => {
            event.preventDefault;
            window.localStorage.setItem("authFormData", JSON.stringify(form));
            navigate("/account");
          }}
        >
          <Input
            defaultValue={form.name}
            label={"Имя"}
            onChange={(name: string) => {
              setForm({ ...form, name: name });
            }}
          ></Input>
          <Input
            label={"email"}
            defaultValue={form.email}
            onChange={(email: string) => {
              setForm({ ...form, email: email });
            }}
          ></Input>
          <Button onClick={() => {}} type="submit">
            Войти
          </Button>
        </form>
      </Island>
    </>
  );
};
