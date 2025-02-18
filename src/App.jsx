import { useState } from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import ResumeUpload from './components/ResumeUpload';
import JobDescription from './components/JobDescription';
import AnalysisResults from './components/AnalysisResults';

function App() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    setIsLoading(true);
    try {
      // TODO: Implement API call to backend service
      const response = await analyzeResume(resume, jobDescription);
      setAnalysis(response);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Box sx={{ my: 4 }}>
          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            <ResumeUpload onFileUpload={setResume} />
            <JobDescription 
              value={jobDescription} 
              onChange={setJobDescription}
              onAnalyze={handleAnalyze}
              disabled={!resume || !jobDescription || isLoading}
            />
          </Box>

          {analysis && <AnalysisResults analysis={analysis} />}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;