import RegisterForm from "./RegisterForm"


const Register = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
        <div className={`border-2 border-gray-200 bg-white/10 dark:border-gray-800 dark:bg-black/10 bg-clip-padding backdrop-blur-lg backdrop-filter w-[350px] sm:w-[500px] h-fit p-5 bg-white rounded-lg flex flex-col items-center justify-center`}>
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <p className="text-md pt-3 text-gray-400 font-semibold text-center">Create an account</p>

          <div className={`w-full flex flex-col items-center justify-center`}>
            <RegisterForm />
          </div>
        </div>
    </section>
  )
}

export default Register