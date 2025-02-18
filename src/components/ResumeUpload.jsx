import { useState } from 'react';
import { 
  Paper, 
  Typography, 
  Button, 
  Box,
  CircularProgress 
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ResumeUpload = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    await processFile(file);
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    await processFile(file);
  };

  const processFile = async (file) => {
    if (file && (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFileName(file.name);
      setIsLoading(true);
      try {
        // TODO: Implement file processing logic
        onFileUpload(file);
      } catch (error) {
        console.error('File processing failed:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Paper
      sx={{
        p: 3,
        flex: 1,
        minWidth: '300px',
        textAlign: 'center',
        backgroundColor: isDragging ? 'action.hover' : 'background.paper',
        border: '2px dashed',
        borderColor: isDragging ? 'primary.main' : 'divider',
      }}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="resume-upload"
        hidden
        accept=".pdf,.docx"
        onChange={handleFileSelect}
      />
      
      <Box sx={{ mb: 2 }}>
        <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main' }} />
      </Box>
      
      <Typography variant="h6" gutterBottom>
        Upload Your Resume
      </Typography>
      
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Drag and drop your resume here or click to browse
      </Typography>
      
      <Button
        component="label"
        htmlFor="resume-upload"
        variant="contained"
        disabled={isLoading}
      >
        Browse Files
      </Button>
      
      {fileName && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          Selected file: {fileName}
        </Typography>
      )}
      
      {isLoading && <CircularProgress sx={{ mt: 2 }} />}
    </Paper>
  );
};

export default ResumeUpload;