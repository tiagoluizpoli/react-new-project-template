import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'nome', headerName: 'Nome', width: 150, sortable: true },
  { field: 'segmento', headerName: 'Segmento', width: 300, sortable: true },
  { field: 'classificacao', headerName: 'Classificação', width: 180, sortable: true },
  { field: 'usuario', headerName: 'Usuário', width: 180, sortable: true },
];
export const rows = [
  {
    id: 1,
    nome: 'Cliente 1',
    segmento: 'Instituição Publica Federal',
    classificacao: 'Gold 1',
    usuario: 'John Doe',
  },
  {
    id: 2,
    nome: 'Cliente 2',
    segmento: 'Instituição Publica Estadual',
    classificacao: 'Platinium 2',
    usuario: 'Jane Doe',
  },
];
