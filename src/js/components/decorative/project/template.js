export default `
<div class="project__container">
    <input type="radio"
        class="project__expand-button"
        ng-checked="$ctrl.projectExpanded" 
        name="{{$ctrl.projectGroup}}">
    <label for="project" class="project__title">
        <div class="project__name-and-link">
            <div class="project__name">
                {{$ctrl.projectTitle}}
                <svg class="project__details-toggle-arrow">
                    <use xlink:href="img/chevron-right.svg#chevron-right"></use>
                </svg>
            </div>
            <div class="project__link"
               ng-if="$ctrl.projectLink">
              <a target="_blank"
               href="{{$ctrl.projectLink}}">
                Check it out
                <svg class="project__link-arrow">
                    <use xlink:href="img/chevron-right.svg#chevron-right"></use>
                </svg>
              </a>
          </div>
        </div>
    </label>
    <div class="project__details">
        <ng-transclude></ng-transclude>
            <div class="project__link"
               ng-if="$ctrl.projectLink">
              <a target="_blank"
               href="{{$ctrl.projectLink}}">
                Check it out
                <svg class="project__link-arrow">
                    <use xlink:href="img/chevron-right.svg#chevron-right"></use>
                </svg>
              </a>
          </div>
    </div>
</div>
`;