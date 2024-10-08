import React from 'react';
import SimpleTable from './components/SimpleTable';
import data from './MOCK_DATA.json';
import dayjs from 'dayjs';

const App = () => {
  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
      footer: 'Mi ID',
    },
    // {
    //   header: 'Nombres y Apellidos',
    //   accessorFn: row => `${row.name} ${row.lastname}`,
    // },
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
    // {
    //   header: 'Nombres',
    //   accessorKey: 'name',
    //   footer: 'Mi nombre',
    // },
    // {
    //   header: 'Apellidos',
    //   accessorKey: 'lastname',
    //   footer: 'Mi apellido',
    // },
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

  return (
    <div>
      <SimpleTable data={data} columns={columns} />
    </div>
  );
};

export default App;
