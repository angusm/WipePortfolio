import getHeroData from './pages/hero';
import getRGAData from './pages/rga';
import getNerdsData from './pages/nerds';
import getAVPData from './pages/avp';
import getDCMData from './pages/dcm';

const PROJECT_LENGTH = 11;

const getEmptyProject = () => {
    return {
        isEmpty: true,
    };
};

const padProjects = (data) => {
    // data.projects = [getEmptyProject()].concat(data.projects);
    while (data.projects.length < PROJECT_LENGTH) {
        data.projects.push(getEmptyProject());
    }
    return data;
};

const allData = [
    getHeroData(),
    getRGAData(),
    getNerdsData(),
    getAVPData(),
    getDCMData(),
];

const paddedData = allData.map((dataSet) => padProjects(dataSet));

export default paddedData;