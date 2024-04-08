import LoginForm from "../components/LoginForm/LoginForm";
import PageTitle from "../components/PageTitle/PageTitle";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
      <p className="link-back-register">
        or <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
