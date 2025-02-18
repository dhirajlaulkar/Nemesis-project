import { 
    Paper, 
    TextField, 
    Button, 
    Box, 
    Typography 
  } from '@mui/material';
  
  const JobDescription = ({ value, onChange, onAnalyze, disabled }) => {
    return (
      <Paper sx={{ p: 3, flex: 1, minWidth: '300px' }}>
        <Typography variant="h6" gutterBottom>
          Job Description
        </Typography>
        
        <TextField
          multiline
          rows={6}
          fullWidth
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste the job description here..."
          sx={{ mb: 2 }}
        />
        
        <Button
          variant="contained"
          onClick={onAnalyze}
          disabled={disabled}
          fullWidth
        >
          Analyze Resume
        </Button>
      </Paper>
    );
  };
  
  export default JobDescription;