import portfolioPageModule from './components/decorative/portfolio-page/module';
import projectModule from './components/decorative/project/module';
import allData from './data/data';

let portfolioModule = angular.module('portfolio', [
    portfolioPageModule.name,
    projectModule.name,
]);

class PortfolioController {
    constructor($sce) {
        this.pages = allData.map((page) => {
            const pageCopy = {};
            Object.keys(page).forEach((pageKey) => {
                switch (pageKey) {
                    case 'timeWorked':
                    case 'logo':
                        pageCopy[pageKey] = $sce.trustAsHtml(page[pageKey]);
                        break;
                    case 'projects':
                        pageCopy[pageKey] = page[pageKey].map((project) => {
                            if (project.paragraphs) {
                                project.paragraphs =
                                    project.paragraphs.map((paragraph) => {
                                        return $sce.trustAsHtml(paragraph);
                                    });
                            }
                            return project;
                        });
                        break;
                    default:
                        pageCopy[pageKey] = page[pageKey];
                }
            });
            return pageCopy;
        });
    }
}

portfolioModule.controller(
    'portfolioController', ['$sce', PortfolioController]);
