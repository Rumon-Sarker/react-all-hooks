import CustomHooks from './All-Hooks/CustomHooks/CustomHooks'
import UseCallback from './All-Hooks/UseCallback/UseCallback'
import UseContext from './All-Hooks/UseContext/UseContext'
import UserProfile from './All-Hooks/UseContext/UserProfile'
import UseEffect from './All-Hooks/UseEffect/UseEffect'
import UseLayoutEffect from './All-Hooks/UseLayoutEffect/UseLayoutEffect'
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
      {/* <UseReducer /> */}
      {/* <UseLayoutEffect /> */}
      {/* <CustomHooks /> */}
    </>
  )
}

export default App
