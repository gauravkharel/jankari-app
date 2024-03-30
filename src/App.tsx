import Header from "./components/Header"
import Profiles from "./components/Profiles"
// import UserForm from "./components/UserForm"
// import UserTable from "./components/UserTable"

const App = () => {
  return (
    <div className="bg-slate-100">
      <Header />
      {/* <UserForm />
      <UserTable /> */}
      <Profiles />
    </div>
  )
}

export default App