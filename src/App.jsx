import Cabecera from './componentes/Cabecera/Cabecera'
import Roles from './componentes/Roles/Roles'
import Dashboard from './componentes/Dashboard/Dashboard'
function App() {
  const usuario = 'Alejandro'
  const token = 'abc123xyz456'
  const menu = 'Principal'
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Cabecera usuario={usuario}></Cabecera>
        </div>
      </div>
      <div className='row'>
        <div className='col-4'>
          <Roles token={token}></Roles>
        </div>
        <div className='col-8'>
          <Dashboard menu={menu}></Dashboard>
        </div>
      </div>
    </div>
  )

}

export default App;