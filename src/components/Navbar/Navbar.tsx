import { Avatar, Button } from "@adev/ui-kit";
import style from "./Navbar.module.scss";
import { UserMIcon } from "@alfalab/icons-glyph/UserMIcon";
import { ClockRepeatCcwLineMIcon } from "@alfalab/icons-glyph/ClockRepeatCcwLineMIcon";
import { BasketLineMIcon } from "@alfalab/icons-glyph/BasketLineMIcon";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { Contacts } from "../Contacts/Contacts";

export const Navbar = () => {
  const user = JSON.parse(window.localStorage.getItem("authFormData") ?? "{}");
  return (
    <div className={style.container}>
      <div className={style.column}>
        <Link to={"/"}>
          <Button view="clear">
            <svg
              className={style["button-text"]}
              width={32}
              height={32}
              fill="currentColor"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                id="soft--ice--cream_1_"
                d="M19,31.36h-6c-0.179,0-0.331-0.132-0.356-0.31l-0.956-6.69H11c-0.165,0-0.309-0.112-0.349-0.273
	l-0.973-3.892c-1.82-0.472-3.038-1.921-3.038-3.785c0-1.873,1.21-3.236,3.117-3.644C9.078,12.243,8.64,11.422,8.64,10.5
	c0-1.577,1.283-2.86,2.86-2.86c0.044,0,0.086,0.008,0.125,0.022c0.039-0.014,0.081-0.022,0.125-0.022h0.493
	C11.851,6.967,11.64,6.062,11.64,5.5c0-2.266,1.719-3.85,5.254-4.844c0.019-0.006,0.038-0.01,0.058-0.013
	c0.042-0.006,0.083-0.004,0.123,0.005c0.051,0.011,0.099,0.033,0.139,0.062c0,0,0,0,0.001,0l0,0
	c0.043,0.032,0.078,0.073,0.104,0.122c0.02,0.037,0.033,0.077,0.038,0.119c0.003,0.019,0.004,0.038,0.004,0.056
	c0.002,1.824,0.632,2.272,1.249,2.469l0.185,0.059C19.997,3.917,21.36,4.349,21.36,6c0,0.605-0.211,1.217-0.566,1.705
	c1.598,0.271,2.691,1.364,2.691,2.795c0,1.018-0.329,1.767-1.021,2.295c1.98,0.497,2.896,2.104,2.896,3.615
	c0,1.853-1.244,3.33-3.041,3.796l-0.97,3.881c-0.04,0.161-0.185,0.273-0.35,0.273h-0.688l-0.956,6.69
	C19.331,31.229,19.179,31.36,19,31.36z M13.312,30.64h5.375l0.897-6.279h-7.17L13.312,30.64z M11.281,23.64h9.438l0.825-3.3
	c-0.149,0.014-0.302,0.021-0.456,0.021H11.006c-0.188,0-0.372-0.01-0.552-0.027L11.281,23.64z M11.006,13.36
	c-1.682,0-3.646,0.799-3.646,3.05c0,1.901,1.5,3.229,3.646,3.229h10.082c2.025,0,3.552-1.388,3.552-3.229
	c0-1.518-1.084-3.05-3.507-3.05H17.22c-0.199,0-0.36-0.161-0.36-0.36s0.161-0.36,0.36-0.36h3.913c0.034,0,0.068,0,0.102,0
	c1.086-0.4,1.53-1.024,1.53-2.141c0-1.239-1.16-2.139-2.761-2.14c-0.004,0-0.015,0-0.023,0c-0.052-0.002-0.101-0.017-0.145-0.039
	c-0.043-0.022-0.083-0.053-0.115-0.093c-0.028-0.035-0.05-0.075-0.063-0.119c-0.014-0.042-0.02-0.085-0.017-0.128
	c0.003-0.052,0.017-0.101,0.039-0.145s0.053-0.083,0.093-0.115c0.006-0.005,0.013-0.01,0.02-0.015C20.184,7.42,20.64,6.803,20.64,6
	c0-1.07-0.784-1.373-2.063-1.778l-0.186-0.059c-1.083-0.346-1.641-1.205-1.736-2.686C13.728,2.379,12.36,3.664,12.36,5.5
	c0,0.584,0.305,1.684,0.774,2.14H15c0.199,0,0.36,0.161,0.36,0.36c0,0.199-0.161,0.36-0.36,0.36h-1.997c-0.002,0-0.004,0-0.007,0
	H11.75c-0.044,0-0.086-0.008-0.125-0.022C11.586,8.352,11.544,8.36,11.5,8.36c-1.18,0-2.14,0.96-2.14,2.14s0.96,2.14,2.14,2.14H12
	c0.199,0,0.36,0.161,0.36,0.36s-0.161,0.36-0.36,0.36H11.006z"
              />
              <rect
                id="_Transparent_Rectangle"
                style={{ fill: "none" }}
                width="32"
                height="32"
              />
            </svg>
          </Button>
        </Link>
        <SearchBar></SearchBar>
      </div>
      <div className={style.nav_items}>
        <Link to="/orders">
          <Button
            view="clear"
            labelClassName={style["icon"]}
            contentLeft={
              <ClockRepeatCcwLineMIcon
                className={style.font}
              ></ClockRepeatCcwLineMIcon>
            }
            className={style.button}
          >
            <div className={style["button-text"]}>Заказы</div>
          </Button>
        </Link>

        <Link to="/cart">
          <Button
            view="clear"
            labelClassName={style["icon"]}
            contentLeft={
              <BasketLineMIcon className={style.font}></BasketLineMIcon>
            }
            className={style.button}
          >
            <div className={style["button-text"]}>Корзина</div>
          </Button>
        </Link>
        {user.name ? (
          <Link to={"/account"}>
            <Button view="clear" className={style.button}>
              <Avatar text={user.name} rounded size="xs"></Avatar>
            </Button>
          </Link>
        ) : (
          <Link to={"/auth"}>
            <Button
              view="clear"
              contentLeft={<UserMIcon className={style.font}></UserMIcon>}
              labelClassName={style["icon"]}
              className={style.button}
            >
              <div className={style["button-text"]}>Войти</div>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
