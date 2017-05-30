export default `
<input type="checkbox" 
       class="project__toggle"  
       name="{{ $ctrl.project.group }}"
       ng-if="!$ctrl.project.isEmpty && !$ctrl.isOnlyALink()">
<label class="project__toggle-label"
    ng-if="!$ctrl.project.isEmpty && !$ctrl.isOnlyALink()">X</label>
<div class="project__container" ng-if="$ctrl.project.isEmpty"></div>
<div class="project__container" ng-if="!$ctrl.project.isEmpty">
    <div class="project__icon-container">
        <img class="project__icon"
            ng-if="$ctrl.project.icon"
            ng-attr-src="{{ $ctrl.project.icon }}">
    </div>
    <div class="project__title"
        ng-class="{'project__title--with-icon': $ctrl.project.icon && $ctrl.project.title}">
        <div class="project__title-line"
             ng-repeat="line in $ctrl.getProjectTitleLines()">
            {{ line }}
        </div>
    </div>
    <div class="project__details"
        ng-if="!$ctrl.isOnlyALink()">
        <ng-transclude></ng-transclude>
            <div class="project__link"
               ng-if="$ctrl.project.link">
              <a target="{{ $ctrl.project.linkTarget }}"
                 href="{{ $ctrl.project.link }}">
                Check it out
                <svg class="project__link-arrow">
                    <use xlink:href="img/chevron-right.svg#chevron-right"></use>
                </svg>
              </a>
          </div>
    </div>
    <a class="project__full-bleed-link"
       href="{{ $ctrl.project.link }}"
       ng-if="$ctrl.isOnlyALink()"
       target="{{ $ctrl.getLinkTarget() }}">
    </a>
</input>
`;