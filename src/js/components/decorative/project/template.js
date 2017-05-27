export default `
<input type="checkbox" 
       class="project__toggle"
       ng-checked="$ctrl.projectExpanded"  
       name="{{ $ctrl.projectGroup }}">
<div class="project__container" ng-class="$ctrl.projectTexture">
    <div class="project__title">
        <div class="project__title-line"
             ng-repeat="line in $ctrl.getProjectTitleLines()">
            {{ line }}
        </div>
    </div>
    <div class="project__link"
       ng-if="$ctrl.projectLink">
      <a target="_blank"
       href="{{ $ctrl.projectLink }}">
        Check it out
        <svg class="project__link-arrow">
            <use xlink:href="img/chevron-right.svg#chevron-right"></use>
        </svg>
      </a>
    </div>
    <div class="project__details">
        <ng-transclude></ng-transclude>
            <div class="project__link"
               ng-if="$ctrl.projectLink">
              <a target="_blank"
               href="{{ $ctrl.projectLink }}">
                Check it out
                <svg class="project__link-arrow">
                    <use xlink:href="img/chevron-right.svg#chevron-right"></use>
                </svg>
              </a>
          </div>
    </div>
</input>
`;