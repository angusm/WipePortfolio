import template from './template';

const COMPONENT_NAME = 'project';

const projectModule = angular.module(COMPONENT_NAME, []);

projectModule.component(COMPONENT_NAME, {
    template: template,
    bindings: {
        projectGroup: '@?',
        projectLink: '@?',
        projectTitle: '@?',
        projectExpanded: '<?',
    },
    transclude: true,
    controller: class Project {
        constructor() {}
        getProjectTitleLines() {
            return this.projectTitle.split(' ');
        }
    }
});

export default projectModule;
