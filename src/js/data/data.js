import getRGAData from './pages/rga';
import getNerdsData from './pages/nerds';
import getAVPData from './pages/avp';
import getDCMData from './pages/dcm';

const PROJECT_LENGTH = 6;

const getEmptyProject = () => {
    return {};
};

const padProjects = (data) => {
    data.projects = [getEmptyProject()].concat(data.projects);
    while (data.projects.length < PROJECT_LENGTH) {
        data.projects.push(getEmptyProject());
    }
    return data;
};

const allData = [
    getRGAData(),
    getNerdsData(),
    getAVPData(),
    getDCMData(),
];

const paddedData = allData.map((dataSet) => padProjects(dataSet));

export default paddedData;