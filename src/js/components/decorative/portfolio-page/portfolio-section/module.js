import template from './template';

const COMPONENT_NAME = 'portfolioSection';

const portfolioSectionModule = angular.module(COMPONENT_NAME, []);

portfolioSectionModule.component(COMPONENT_NAME, {
    template: template,
    transclude: true,
});

export default portfolioSectionModule;
