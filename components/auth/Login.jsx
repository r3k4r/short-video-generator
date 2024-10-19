
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className=" w-full flex flex-col items-center justify-center">
        <div className={`border-2 border-gray-200 dark:border-gray-800 bg-white/10 dark:bg-black/10 bg-clip-padding backdrop-blur-sm backdrop-filter w-[350px] sm:w-[500px] h-fit p-5 bg-white rounded-lg flex flex-col items-center justify-center`}>
          <h1 className="text-3xl font-bold text-center">Sign In</h1>
          <p className="text-md pt-3 text-gray-400 font-semibold text-center">Enter your email and password to sign in</p>

          <div className={`w-full flex flex-col items-center justify-center`}>
            <LoginForm />
          </div>
        </div>
    </section>
  )
}

export default Login