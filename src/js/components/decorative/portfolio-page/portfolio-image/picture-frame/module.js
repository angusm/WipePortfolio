import template from './template';

const COMPONENT_NAME = 'pictureFrame';

const pictureFrameModule = angular.module(COMPONENT_NAME, []);

pictureFrameModule.component(COMPONENT_NAME, {
    template: template,
    transclude: true,
});

export default pictureFrameModule;
