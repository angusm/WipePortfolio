import pictureFrameModule from './picture-frame/module';
import template from './template';

const COMPONENT_NAME = 'portfolioImage';

const portfolioImageModule = angular.module(COMPONENT_NAME, [
    pictureFrameModule.name,
]);

portfolioImageModule.component(COMPONENT_NAME, {
    template: template,
    transclude: true,
});

export default portfolioImageModule;
