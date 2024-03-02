import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    // Validate name
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    // Validate password
    if (password.length < 8) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    // Send data to server
    try {
      const response = await axios.post(
        "https://server.ultrapureengineering.com/api/register",
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        form.reset();
        navigate("/login");
      }
    } catch (error) {
      toast.error("Failed to register, please try again");
    }
  };
  return (
    <>
      <div className="hero py-8">
        <div className="hero-content flex-col">
          <h1 className="text-2xl uppercase">Please Register Now</h1>
          <div className="card shadow-2xl bg-slate-100">
            <form
              onSubmit={handleSubmit}
              className="card-body lg:w-[500px] w-full"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn border-0 bg-warning text-white hover:bg-primary"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <p className="text-center">
                Already Have an Account?{" "}
                <span
                  className="text-primary cursor-pointer font-bold"
                  onClick={() => navigate("/login")}
                >
                  Please Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
