import template from './template';

const COMPONENT_NAME = 'project';

const projectModule = angular.module(COMPONENT_NAME, []);

projectModule.component(COMPONENT_NAME, {
    template: template,
    bindings: {
        projectGroup: '@?',
        project: '<',
    },
    transclude: true,
    controller: class Project {
        constructor() {
            this.project = this.project || {};
        }
        getProjectTitleLines() {
            return this.project.title ?
                this.project.title.split(' ') : [];
        }

        isOnlyALink() {
            console.log(!this.project.paragraphs &&
                this.project.link);
            return !this.project.paragraphs &&
                    this.project.link;
        }
    }
});

export default projectModule;
