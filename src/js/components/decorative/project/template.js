export default `
<input type="checkbox" 
       class="project__toggle"
       ng-checked="$ctrl.projectExpanded"  
       name="{{ $ctrl.projectGroup }}">
<div class="project__container">
    <div class="project__icon">
        <img src="{{ $ctrl.projectIcon }}">
    </div>
    <span>{{ $ctrl.projectTitle }}</span>
    <svg class="project__details-toggle-arrow">
        <use xlink:href="img/chevron-right.svg#chevron-right"></use>
    </svg>
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