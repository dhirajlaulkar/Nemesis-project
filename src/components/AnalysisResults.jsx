import { 
    Paper, 
    Typography, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    Chip,
    Box 
  } from '@mui/material';
  import CheckCircleIcon from '@mui/icons-material/CheckCircle';
  import WarningIcon from '@mui/icons-material/Warning';
  import InfoIcon from '@mui/icons-material/Info';
  
  const AnalysisResults = ({ analysis }) => {
    const { matchingKeywords, missingKeywords, suggestions } = analysis;
  
    return (
      <Paper sx={{ mt: 4, p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Analysis Results
        </Typography>
  
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Matching Keywords
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {matchingKeywords.map((keyword, index) => (
              <Chip
                key={index}
                label={keyword}
                color="success"
                icon={<CheckCircleIcon />}
              />
            ))}
          </Box>
        </Box>
  
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Missing Keywords
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {missingKeywords.map((keyword, index) => (
              <Chip
                key={index}
                label={keyword}
                color="warning"
                icon={<WarningIcon />}
              />
            ))}
          </Box>
        </Box>
  
        <Box>
          <Typography variant="h6" gutterBottom>
            Suggestions
          </Typography>
          <List>
            {suggestions.map((suggestion, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <InfoIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={suggestion} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    );
  };
  
  export default AnalysisResults;