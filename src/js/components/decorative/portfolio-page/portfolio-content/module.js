import template from './template';

const COMPONENT_NAME = 'portfolioContent';

const portfolioContentModule = angular.module(COMPONENT_NAME, []);

portfolioContentModule.component(COMPONENT_NAME, {
    template: template,
    transclude: true,
});

export default portfolioContentModule;
