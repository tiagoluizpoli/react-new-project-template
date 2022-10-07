import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

export const Filters = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Filtros</Typography>
      <Stack
        direction={'row'}
        justifyContent="space-between"
      >
        <Stack
          direction={'row'}
          spacing={2}
        >
          <Box sx={{ width: '250px' }}>
            <TextField
              label="Name"
              id="filled-size-small"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box sx={{ width: '250px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Segmento</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Segmento"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: '250px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Classificação</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Classificação"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
        <Button
          variant="contained"
          startIcon={<FilterAltIcon />}
        >
          Aplicar Filtro
        </Button>
      </Stack>
    </Stack>
  );
};
