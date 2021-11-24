import { useNavigate } from "react-router-dom";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login__left">
        <form
          className="login__form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Title className="login__title">Human Budget</Title>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button
            variant="default"
            className="login__button"
            onClick={() => {
              navigate("/");
            }}
          >
            Log in
          </Button>
        </form>
      </div>
      <div className="login__right">
        <div className="login__info">
          <Title className="info__headline">
            The easiest way to manage your money
          </Title>
          <p className="info__text">
            Budget your incomes, expenses and know how much you have left over
            each month
          </p>
        </div>
        <div className="login__signup">
          <Title>Are you a new user?</Title>
          <a href="/signup">Sign up now</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
