import portfolioPageModule from './components/decorative/portfolio-page/module';
import projectModule from './components/decorative/project/module';

angular.module('portfolio', [
    portfolioPageModule.name,
    projectModule.name,
]);
