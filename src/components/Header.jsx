import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

const Header = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar>
        <Box 
          display="flex" 
          alignItems="center" 
          width="100%" 
          justifyContent="center"
          gap={1.5}
        >
          <ArticleIcon 
            sx={{ 
              color: 'primary.main',
              fontSize: 40,
              filter: 'drop-shadow(0 0 2px rgba(37, 99, 235, 0.2))',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1) rotate(2deg)',
              }
            }} 
          />
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2563eb 30%, #4f46e5 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(37, 99, 235, 0.1)',
              letterSpacing: '0.5px',
              display: 'flex',
              alignItems: 'center',
              '& .highlight': {
                color: '#4f46e5',
                fontWeight: 800,
              }
            }}
          >
            AI<span className="highlight">-ply</span>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 