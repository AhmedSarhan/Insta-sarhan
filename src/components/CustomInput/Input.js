import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
export default function Input({
  half,
  name,
  label,
  type,
  autoFocus,
  handleShowPass,
  handleChange,
}) {
  return (
    <Grid item xs={half ? 6 : 12} md={12}>
      <TextField
        name={name}
        label={label}
        variant="outlined"
        onChange={handleChange}
        autoFocus={autoFocus}
        xs={6}
        required
        fullWidth
        type={type}
        InputProps={
          name === 'password' || name === 'confirmPassword'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPass}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
}
