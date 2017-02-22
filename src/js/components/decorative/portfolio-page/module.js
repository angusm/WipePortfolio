import portfolioContentModule from './portfolio-content/module';
import portfolioImageModule from './portfolio-image/module';
import portfolioSectionModule from './portfolio-section/module';
import template from './template';

const COMPONENT_NAME = 'portfolioPage';

const portfolioPageModule = angular.module(COMPONENT_NAME, [
    portfolioContentModule.name,
    portfolioImageModule.name,
    portfolioSectionModule.name,
]);

portfolioPageModule.component(COMPONENT_NAME, {
    template: template,
    transclude: {
        portfolioPageImage: 'portfolioPageImage',
        portfolioPageContent: 'portfolioPageContent',
    },
});

export default portfolioPageModule;
