import template from './template';

const COMPONENT_NAME = 'project';

const projectModule = angular.module(COMPONENT_NAME, []);

projectModule.component(COMPONENT_NAME, {
    template: template,
    bindings: {
        projectGroup: '@?',
        projectIcon: '@?',
        projectLink: '@?',
        projectTexture: '@?',
        projectTitle: '@?',
        projectExpanded: '<?',
    },
    transclude: true,
});

export default projectModule;
