import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSkill = e.target.value;
    const index = skills.indexOf(newSkill);
    if (index === -1) {
      setSkills([...skills, newSkill])
    } else {
      setSkills(skills.filter(skill => skill !== newSkill));
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept these terms and conditions"
          control={<Checkbox checked={acceptTerms}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAcceptTerms(e.target.checked)}
          />}
        />
      </Box>
      {/* Checkbox using icons */}
      <Box>
        <FormControlLabel
          label="I accept these terms and conditions"
          control={
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />}
        />
      </Box>
      {/* A checkbox group */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={<Checkbox value="html" checked={skills.includes('html')}
                onChange={handleSkillChange}
              />}
            />
            <FormControlLabel
              label="CSS"
              control={<Checkbox value="css" checked={skills.includes('css')}
                onChange={handleSkillChange}
              />}
            />
            <FormControlLabel
              label="JavaScript"
              control={<Checkbox value="javascript" checked={skills.includes('javascript')}
                onChange={handleSkillChange}
              />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}
