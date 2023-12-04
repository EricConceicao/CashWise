import ProgressBar from 'react-bootstrap/ProgressBar';
import './ProgressBar.css'


function WithLabelExample() {
 const x= 20;
  const now = 2*x;
  const barStyles = {
    backgroundColor: '#213740',  // Substitua 'green' pela cor desejada
  };
  return <ProgressBar now={now} style={barStyles} label={<span className="progress-bar-label">{`${now}%`}</span>} className='barra' variant='primary'/>;
}

export default WithLabelExample