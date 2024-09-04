import UseCallback from './All-Hooks/UseCallback/UseCallback'
import UserProfile from './All-Hooks/UseContext/UserProfile'
import UseEffect from './All-Hooks/UseEffect/UseEffect'
import UseMemo from './All-Hooks/UseMemo/UseMemo'
import UseReducer from './All-Hooks/UseReducer/UseReducer'
import UseRef from './All-Hooks/UseRef/UseRef'
import UseState from './All-Hooks/UseState/UseState'

function App() {

  return (
    <>
      <h1 className='heading'>React All Hooks</h1>
      <UseState />
      <UseEffect />
      <UseRef />
      <UseMemo />
      <UseCallback />
      {/* <UseContext /> exchange to <UserProfile/> */}
      <UserProfile />
      <UseReducer />
    </>
  )
}

export default App
