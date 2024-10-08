import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SimpleTable from './components/SimpleTable';
import data from './MOCK_DATA.json';
import otherData from './countries.json';
import dayjs from 'dayjs';
import UsersTable from './components/UsersTable';

const App = () => {
  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
      footer: 'Mi ID',
    },
    {
      header: 'Nombres Completos',
      columns: [
        {
          header: 'Nombres',
          accessorKey: 'name',
          footer: 'Mi nombre',
        },
        {
          header: 'Apellido',
          accessorKey: 'lastname',
          footer: 'Mi apellido',
        },
      ],
    },
    {
      header: 'Email',
      accessorKey: 'email',
      footer: 'Mi email',
    },
    {
      header: 'Country',
      accessorKey: 'country',
      footer: 'Mi país',
    },
    {
      header: 'Day of Birth',
      accessorKey: 'dateOfBirth',
      footer: 'Mi fecha de nacimiento',
      cell: info => dayjs(info.getValue()).format('DD/MM/YYYY'),
    },
  ];

  const otherColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
      footer: 'ID',
    },
    {
      header: 'País',
      accessorKey: 'country',
      footer: 'País',
    },
    {
      header: 'Código de país',
      accessorKey: 'countrycode',
      footer: 'Código de país',
    },
    {
      header: 'Correo Electrónico',
      accessorKey: 'email',
      footer: 'Correo Electrónico',
    },
  ];

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Main Table</Link>
            </li>
            <li>
              <Link to='/other-table'>Other Table</Link>
            </li>
            <li>
              <Link to='/users-table'>Users Table</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path='/'
            element={<SimpleTable data={data} columns={columns} />}
          />
          <Route
            path='/other-table'
            element={<SimpleTable data={otherData} columns={otherColumns} />}
          />
          <Route
            path='/users-table'
            element={<UsersTable data={otherData} columns={otherColumns} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
