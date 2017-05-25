import template from './template';

const COMPONENT_NAME = 'portfolioImage';

const portfolioImageModule = angular.module(COMPONENT_NAME, [
]);

portfolioImageModule.component(COMPONENT_NAME, {
    template: template,
    transclude: true,
});

export default portfolioImageModule;
