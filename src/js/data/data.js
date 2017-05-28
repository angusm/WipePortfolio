import getRGAData from './pages/rga';
import getNerdsData from './pages/nerds';
import getAVPData from './pages/avp';
import getDCMData from './pages/dcm';

const allData = [
    getRGAData(),
    getNerdsData(),
    getAVPData(),
    getDCMData(),
];

export default allData;
