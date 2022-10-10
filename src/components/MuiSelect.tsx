import { Box, TextField, MenuItem } from "@mui/material"
import { useState } from "react"

export const MuiSelect = () => {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState<string[]>([]);

  return (
    <>
      <Box width="250px">
        <TextField
          label="Select country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          fullWidth
          select
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>

      <Box width="250px" mt={2}>
        <TextField
          label="Select countries"
          value={countries}
          onChange={e => {
            const value = e.target.value;
            // `value` is always an array, unless the action was done by browser autofill
            // in which case it's a string.
            typeof value == 'string' ? setCountries(value.split(',')) : setCountries(value);
          }}
          fullWidth
          select
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </>
  )
}
